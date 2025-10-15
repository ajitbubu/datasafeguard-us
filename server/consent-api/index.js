/**
 * Cross-Domain Consent API Server
 * Handles consent storage and synchronization across multiple domains
 */

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// In-memory storage (replace with database in production)
const consentStore = new Map();
const auditLog = [];

// Domain configuration - define which domains can share consent
const DOMAIN_GROUPS = {
  'datasafeguard-group': {
    domains: [
      'datasafeguard.us',
      'www.datasafeguard.us',
      'datasafeguard.ai',
      'www.datasafeguard.ai'
    ],
    cookiePolicy: {
      necessary: ['ds_session', 'csrf_token'],
      analytics: ['_ga', '_gid'],
      marketing: ['_fbp', 'marketing_id'],
      preferences: ['theme', 'language']
    },
    policyVersion: '1.0'
  }
};

// Get allowed domains for CORS
const getAllowedDomains = () => {
  const domains = [];
  Object.values(DOMAIN_GROUPS).forEach(group => {
    group.domains.forEach(domain => {
      domains.push(`https://${domain}`);
      domains.push(`http://${domain}`); // For development
    });
  });
  // Add localhost for development (all common ports)
  const localhostPorts = [3000, 3001, 3002, 3003, 4000, 5000, 8000, 8080];
  localhostPorts.forEach(port => {
    domains.push(`http://localhost:${port}`);
    domains.push(`http://127.0.0.1:${port}`);
  });
  return domains;
};

const allowedDomains = getAllowedDomains();

// CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    // In development, allow all localhost and 127.0.0.1 origins (any port)
    if (process.env.NODE_ENV !== 'production') {
      if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
        console.log(`✓ Allowed origin: ${origin}`);
        return callback(null, true);
      }
    }
    
    if (allowedDomains.includes(origin)) {
      console.log(`✓ Allowed origin: ${origin}`);
      callback(null, true);
    } else {
      console.log(`✗ Blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(cookieParser());

// Helper: Get or create user ID
function getUserId(req, res) {
  let userId = req.cookies.consent_user_id;
  
  if (!userId) {
    userId = crypto.randomBytes(16).toString('hex');
    
    // Set cookie for cross-domain access
    res.cookie('consent_user_id', userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
      path: '/'
    });
  }
  
  return userId;
}

// Helper: Find domain group
function findDomainGroup(domain) {
  for (const [groupId, config] of Object.entries(DOMAIN_GROUPS)) {
    if (config.domains.some(d => domain.includes(d) || d.includes(domain))) {
      return { groupId, config };
    }
  }
  return null;
}

// Helper: Check if domains are compatible
function arePoliciesCompatible(domain1, domain2) {
  const group1 = findDomainGroup(domain1);
  const group2 = findDomainGroup(domain2);
  return group1 && group2 && group1.groupId === group2.groupId;
}

// Helper: Log audit trail
function logAudit(action, userId, data) {
  auditLog.push({
    timestamp: new Date().toISOString(),
    action,
    userId,
    ...data
  });
  console.log(`[AUDIT] ${action}:`, { userId, ...data });
}

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Check if user has existing consent
app.get('/api/consent/check', (req, res) => {
  try {
    const userId = getUserId(req, res);
    const consent = consentStore.get(userId);
    
    if (!consent) {
      return res.status(404).json({
        hasConsent: false,
        message: 'No consent found'
      });
    }

    // Check if consent is still valid (not older than 12 months)
    const maxAge = 365 * 24 * 60 * 60 * 1000;
    const age = Date.now() - consent.timestamp;
    
    if (age > maxAge) {
      consentStore.delete(userId);
      return res.status(404).json({
        hasConsent: false,
        message: 'Consent expired'
      });
    }

    res.json({
      hasConsent: true,
      preferences: consent.preferences,
      timestamp: consent.timestamp,
      domain: consent.domain,
      version: consent.version
    });
    
  } catch (error) {
    console.error('Error checking consent:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Save consent preferences
app.post('/api/consent/save', (req, res) => {
  try {
    const userId = getUserId(req, res);
    const { preferences, domain, organizationId, version } = req.body;
    
    if (!preferences || !domain) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'preferences and domain are required'
      });
    }

    // Validate domain is in allowed list
    const domainGroup = findDomainGroup(domain);
    if (!domainGroup) {
      return res.status(403).json({
        error: 'Domain not allowed',
        message: 'This domain is not configured for consent sharing'
      });
    }

    const consentData = {
      preferences,
      domain,
      organizationId,
      version: version || domainGroup.config.policyVersion,
      timestamp: Date.now(),
      userId
    };

    consentStore.set(userId, consentData);

    // Log for audit trail
    logAudit('CONSENT_SAVED', userId, {
      domain,
      preferences,
      groupId: domainGroup.groupId
    });

    res.json({
      success: true,
      message: 'Consent saved successfully',
      consentId: userId,
      appliesTo: domainGroup.config.domains
    });
    
  } catch (error) {
    console.error('Error saving consent:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Revoke consent
app.post('/api/consent/revoke', (req, res) => {
  try {
    const userId = getUserId(req, res);
    const { domain } = req.body;

    if (!domain) {
      return res.status(400).json({
        error: 'Missing required field',
        message: 'domain is required'
      });
    }

    consentStore.delete(userId);

    // Log for audit trail
    logAudit('CONSENT_REVOKED', userId, { domain });

    // Clear the consent cookie
    res.clearCookie('consent_user_id');

    res.json({
      success: true,
      message: 'Consent revoked successfully'
    });
    
  } catch (error) {
    console.error('Error revoking consent:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Verify domain compatibility
app.post('/api/consent/verify-compatibility', (req, res) => {
  try {
    const { sourceDomain, targetDomain } = req.body;

    if (!sourceDomain || !targetDomain) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'sourceDomain and targetDomain are required'
      });
    }

    const compatible = arePoliciesCompatible(sourceDomain, targetDomain);
    
    let details = {};
    if (compatible) {
      const group = findDomainGroup(sourceDomain);
      details = {
        groupId: group.groupId,
        sharedDomains: group.config.domains,
        policyVersion: group.config.policyVersion
      };
    }

    res.json({
      compatible,
      sourceDomain,
      targetDomain,
      ...details
    });
    
  } catch (error) {
    console.error('Error verifying compatibility:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Get domain configuration
app.get('/api/consent/domain-config/:domain', (req, res) => {
  try {
    const { domain } = req.params;
    const domainGroup = findDomainGroup(domain);

    if (!domainGroup) {
      return res.status(404).json({
        error: 'Domain not found',
        message: 'This domain is not configured'
      });
    }

    res.json({
      domain,
      groupId: domainGroup.groupId,
      linkedDomains: domainGroup.config.domains,
      cookiePolicy: domainGroup.config.cookiePolicy,
      policyVersion: domainGroup.config.policyVersion
    });
    
  } catch (error) {
    console.error('Error fetching domain config:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Get consent statistics
app.get('/api/consent/stats', (req, res) => {
  try {
    const totalConsents = consentStore.size;
    
    // Calculate preference breakdown
    const breakdown = {
      necessary: 0,
      preferences: 0,
      analytics: 0,
      marketing: 0
    };

    for (const consent of consentStore.values()) {
      if (consent.preferences.necessary) breakdown.necessary++;
      if (consent.preferences.preferences) breakdown.preferences++;
      if (consent.preferences.analytics) breakdown.analytics++;
      if (consent.preferences.marketing) breakdown.marketing++;
    }

    res.json({
      totalConsents,
      preferenceBreakdown: breakdown,
      auditLogSize: auditLog.length
    });
    
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Consent API Server running on port ${PORT}`);
  console.log(`📋 Allowed domains:`, allowedDomains.join(', '));
  console.log(`🔒 Environment: ${process.env.NODE_ENV || 'development'}\n`);
});
