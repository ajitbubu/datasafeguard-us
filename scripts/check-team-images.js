#!/usr/bin/env node

/**
 * Team Images Checker
 * This script checks which team member images are missing from the /public/people/ directory
 * and provides instructions on how to download them from the DataSafeguard website.
 */

const fs = require('fs');
const path = require('path');

// Team members and their expected image filenames
const teamMembers = [
  { name: "MR Sahu", file: "MSahu.jpg", status: "✓" },
  { name: "Sudhir Sahu", file: "sudhir.jpg", status: "✓" },
  { name: "Lee Nocon", file: "lee.jpg", status: "✓" },
  { name: "Dr. Damodar Sahu", file: "damodar.jpg", status: "✓" },
  { name: "Swarnam Dash", file: "swarn.png", status: "✓" },
  { name: "Tedra Chen", file: "tedra.jpg", status: "✓" },
  { name: "Sumeet Shah", file: "sumeet-shah.jpg", status: "?" },
  { name: "Pranab Mohanty", file: "pranab-mohanty.jpg", status: "?" },
  { name: "Mahi Gupta", file: "mahi-gupta.jpg", status: "?" },
  { name: "Dr. Deepak Kumar Sahu", file: "deepak-sahu.jpg", status: "?" },
  { name: "N. S. Bala", file: "ns-bala.jpg", status: "?" },
  { name: "Jay Como", file: "jay-como.jpg", status: "?" },
  { name: "Joe Clemons", file: "joe-clemons.jpg", status: "?" },
  { name: "Dr. Amar Patnaik", file: "amar-patnaik.jpg", status: "?" },
  { name: "Rameesh Kailasam", file: "rameesh-kailasam.jpg", status: "?" },
  { name: "Kevin Jurovich", file: "kevin-jurovich.jpg", status: "?" },
  { name: "John Papazian", file: "john-papazian.jpg", status: "?" },
];

const publicPeoplePath = path.join(process.cwd(), 'public', 'people');

console.log('\n🔍 Checking Team Member Images...\n');
console.log('━'.repeat(70));

// Check if directory exists
if (!fs.existsSync(publicPeoplePath)) {
  console.log('❌ Directory /public/people/ does not exist!');
  console.log('   Creating directory...\n');
  fs.mkdirSync(publicPeoplePath, { recursive: true });
}

// Check each team member's image
const existingImages = [];
const missingImages = [];

teamMembers.forEach(member => {
  const imagePath = path.join(publicPeoplePath, member.file);
  const exists = fs.existsSync(imagePath);
  
  if (exists) {
    existingImages.push(member);
    console.log(`✅ ${member.name.padEnd(30)} → ${member.file}`);
  } else {
    missingImages.push(member);
    console.log(`❌ ${member.name.padEnd(30)} → ${member.file} (MISSING)`);
  }
});

console.log('━'.repeat(70));
console.log(`\n📊 Summary:`);
console.log(`   ✅ Found: ${existingImages.length} images`);
console.log(`   ❌ Missing: ${missingImages.length} images\n`);

if (missingImages.length > 0) {
  console.log('📥 To add missing images:\n');
  console.log('1. Visit: https://www.datasafeguard.ai/data-safeguarders');
  console.log('2. Right-click on each team member\'s photo and "Save Image As..."');
  console.log('3. Save to: /public/people/ with these exact filenames:\n');
  
  missingImages.forEach(member => {
    console.log(`   • ${member.file.padEnd(25)} (${member.name})`);
  });
  
  console.log('\n💡 Tip: You can also use browser DevTools to find the image URLs');
  console.log('   and download them programmatically.\n');
} else {
  console.log('🎉 All team member images are present!\n');
}

console.log('━'.repeat(70));
console.log('\n');
