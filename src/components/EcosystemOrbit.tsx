'use client';

import React, { useState, useCallback } from 'react';

export type OrbitGroup = {
  radius: number;
  speed: number;
  logos: Array<string | { src?: string; alt?: string; emoji?: string }>;
};

export type EcosystemOrbitProps = {
  brand?: string;
  title?: string;
  subtitle?: string;
  orbitGroups?: OrbitGroup[];
  className?: string;
};

function isImg(x: string | { src?: string }): x is { src: string } {
  return typeof x !== 'string' && !!x?.src;
}

export function computeDelay(idx: number, total: number, speed: number): string {
  if (total <= 0 || speed <= 0) return '0s';
  const step = speed / total;
  const val = (idx * step) % speed;
  return `${val}s`;
}

const CircleIcon = ({ icon, color }: { icon: string; color: string }) => {
  const icons: Record<string, React.ReactElement> = {
    cloud: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  };

  return (
    <div
      className="eoh-circle-icon"
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      }}
    >
      {icons[icon] || icons.cloud}
    </div>
  );
};

function LogoTile({
  item,
  altFallback,
  index
}: {
  item: string | { src?: string; alt?: string; emoji?: string };
  altFallback: string;
  index: number;
}) {
  const alt = typeof item === 'string' ? altFallback : (item.alt || altFallback);
  const iconName = typeof item === 'string' ? undefined : item.emoji;

  const colors = [
    '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b',
    '#10b981', '#06b6d4', '#6366f1', '#f97316',
  ];

  if (isImg(item)) {
    return (
      <div className="eoh-logo" aria-label={alt} title={alt}>
        <img
          src={item.src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.35'; }}
        />
      </div>
    );
  }

  return (
    <div className="eoh-logo" aria-label={alt} title={alt}>
      <CircleIcon icon={iconName || 'cloud'} color={colors[index % colors.length]} />
    </div>
  );
}

const DEFAULT_GROUPS: OrbitGroup[] = [
  {
    radius: 150,
    speed: 40,
    logos: [
      { src: 'https://cdn.simpleicons.org/amazonaws/FF9900', alt: 'AWS' },
      { src: 'https://cdn.simpleicons.org/microsoftazure/0078D4', alt: 'Azure' },
      { src: 'https://cdn.simpleicons.org/googlecloud/4285F4', alt: 'Google Cloud' },
      { src: 'https://cdn.simpleicons.org/snowflake/29B5E8', alt: 'Snowflake' }
    ]
  },
  {
    radius: 220,
    speed: 60,
    logos: [
      { src: 'https://cdn.simpleicons.org/slack/4A154B', alt: 'Slack' },
      { src: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub' },
      { src: 'https://cdn.simpleicons.org/notion/000000', alt: 'Notion' },
      { src: 'https://cdn.simpleicons.org/asana/F06A6A', alt: 'Asana' }
    ]
  },
  {
    radius: 300,
    speed: 80,
    logos: [
      { src: 'https://cdn.simpleicons.org/openai/412991', alt: 'OpenAI' },
      { src: 'https://cdn.simpleicons.org/databricks/FF3621', alt: 'Databricks' },
      { src: 'https://cdn.simpleicons.org/looker/4285F4', alt: 'Looker' },
      { src: 'https://cdn.simpleicons.org/powerbi/F2C811', alt: 'Power BI' }
    ]
  },
];

export default function EcosystemOrbit({
  brand = 'DataSafeguard.ai',
  title = 'Command Your Data + AI',
  subtitle = 'Explore the intelligent orbit of 1000+ pre-built integrations across hybrid multicloud and SaaS.',
  orbitGroups,
  className = ''
}: EcosystemOrbitProps) {
  const groups = orbitGroups && orbitGroups.length ? orbitGroups : DEFAULT_GROUPS;
  const [paused, setPaused] = useState(false);

  const onTouchToggle = useCallback(() => {
    setPaused((p) => !p);
  }, []);

  return (
    <section
      className={`eoh-hero ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchToggle}
    >
      <div className="eoh-inner">
        <h2 className="eoh-title">{title}</h2>
        <p className="eoh-subtitle">{subtitle}</p>

        <div className={`eoh-orbit-wrap ${paused ? 'paused' : ''}`} aria-label="Integrations Orbit" role="region">
          <div className="eoh-core" aria-label="Brand core">
            {brand}
          </div>

          {groups.map((orbit, oi) => (
            <React.Fragment key={`orbit-${oi}`}>
              <div
                className="eoh-orbit"
                style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
              />
              {orbit.logos.map((item, li) => {
                const delay = computeDelay(li, orbit.logos.length, orbit.speed);
                const globalIndex = groups.slice(0, oi).reduce((acc, g) => acc + g.logos.length, 0) + li;
                return (
                  <div
                    key={`rot-${oi}-${li}`}
                    className="eoh-rot"
                    style={{
                      animation: `eoh-spin ${orbit.speed}s linear infinite`,
                      animationDelay: delay,
                    }}
                    role="img"
                    aria-label="integration logo"
                  >
                    <div
                      className="eoh-logo-wrapper"
                      style={{
                        transform: `translate(${orbit.radius}px, -50%)`,
                      }}
                    >
                      <LogoTile item={item} altFallback={`Integration ${li + 1}`} index={globalIndex} />
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        <div className="eoh-cta">
          <a className="eoh-btn eoh-btn--primary" href="/storefront">
            Explore Integrations
          </a>
          <a className="eoh-btn eoh-btn--ghost" href="/contact-us">
            Book a Demo
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes eoh-spin { 
          from { transform: translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-50%, -50%) rotate(360deg); } 
        }
      `}</style>

      <style jsx>{`
        .eoh-hero { 
          position: relative; 
          background: linear-gradient(to bottom, #f8fafc, #ffffff); 
          color: #0f172a; 
          overflow: hidden; 
        }

        .eoh-inner { 
          max-width: 1120px; 
          margin: 0 auto; 
          padding: 4rem 1.25rem 5rem; 
          text-align: center; 
        }

        .eoh-title { 
          font-size: clamp(2rem, 3.6vw, 3rem); 
          font-weight: 800; 
          letter-spacing: -0.02em; 
          margin: 0 0 0.5rem; 
        }

        .eoh-subtitle { 
          color: #475569; 
          font-size: clamp(1rem, 1.4vw, 1.125rem); 
          margin: 0 auto 2.5rem; 
          max-width: 48rem; 
        }

        .eoh-orbit-wrap { 
          position: relative; 
          width: min(92vw, 700px); 
          height: min(92vw, 700px); 
          margin: 0 auto; 
          touch-action: manipulation; 
        }

        .eoh-orbit-wrap.paused .eoh-rot { 
          animation-play-state: paused !important; 
        }

        .eoh-core { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          width: 10rem; 
          height: 10rem; 
          background: linear-gradient(135deg, #0284c7, #2563eb); 
          border-radius: 9999px; 
          box-shadow: 0 8px 22px rgba(2,132,199,.28); 
          color: #fff; 
          display: grid; 
          place-items: center; 
          font-weight: 600; 
          text-align: center; 
          padding: 1rem; 
          z-index: 1; 
        }

        .eoh-orbit { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          border: 1px solid rgba(56,189,248,.35); 
          border-radius: 9999px; 
          pointer-events: none; 
          z-index: 0; 
        }

        .eoh-rot { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          width: 0; 
          height: 0; 
          z-index: 2; 
        }

        .eoh-logo-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .eoh-logo { 
          width: 56px; 
          height: 56px; 
          border-radius: 50%; 
          background: #fff; 
          padding: 12px; 
          box-shadow: 0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04); 
          transition: transform 200ms ease, box-shadow 200ms ease; 
          display: inline-flex; 
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .eoh-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .eoh-logo:hover { 
          transform: scale(1.12); 
          box-shadow: 0 8px 24px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.08); 
        }

        .eoh-circle-icon {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: inset 0 2px 4px rgba(0,0,0,.1);
        }

        .eoh-cta { 
          display: flex; 
          gap: .75rem; 
          justify-content: center; 
          margin-top: 2rem; 
          flex-wrap: wrap;
        }

        .eoh-btn { 
          text-decoration: none; 
          display: inline-flex; 
          align-items: center; 
          gap: .5rem; 
          padding: .75rem 1.25rem; 
          border-radius: 14px; 
          font-weight: 600; 
          transition: all 200ms ease;
        }

        .eoh-btn--primary { 
          background: #0f172a; 
          color: #fff; 
          box-shadow: 0 6px 16px rgba(15, 23, 42, .25); 
        }

        .eoh-btn--primary:hover { 
          filter: brightness(1.05); 
          transform: translateY(-2px);
        }

        .eoh-btn--ghost { 
          background: #fff; 
          color: #0f172a; 
          border: 1px solid #e2e8f0; 
        }

        .eoh-btn--ghost:hover { 
          background: #f8fafc; 
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .eoh-core { 
            width: 8rem; 
            height: 8rem; 
            font-size: .95rem; 
            padding: .5rem; 
          }

          .eoh-logo { 
            width: 48px; 
            height: 48px; 
            padding: 10px;
          }
        }

        @media (max-width: 390px) {
          .eoh-core { 
            width: 7rem; 
            height: 7rem; 
            font-size: .9rem; 
          }

          .eoh-logo { 
            width: 40px; 
            height: 40px; 
            padding: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .eoh-rot { 
            animation-duration: 80s !important; 
          }
        }
      `}</style>
    </section>
  );
}
