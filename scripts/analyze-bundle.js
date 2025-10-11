#!/usr/bin/env node

/**
 * Bundle Size Analyzer
 * Analyzes the Next.js build output and reports bundle sizes
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(process.cwd(), '.next');
const CHUNKS_DIR = path.join(BUILD_DIR, 'static', 'chunks');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function analyzeDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log('❌ Build directory not found. Run "npm run build" first.');
    return;
  }

  const files = fs.readdirSync(dir, { withFileTypes: true });
  let totalSize = 0;
  const fileList = [];

  files.forEach(file => {
    if (file.isFile() && file.name.endsWith('.js')) {
      const filePath = path.join(dir, file.name);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
      fileList.push({
        name: file.name,
        size: stats.size,
        formattedSize: formatBytes(stats.size)
      });
    }
  });

  return { files: fileList, totalSize };
}

function main() {
  console.log('\n📊 Bundle Size Analysis\n');
  console.log('='.repeat(60));

  // Analyze chunks
  const chunksAnalysis = analyzeDirectory(CHUNKS_DIR);
  
  if (!chunksAnalysis) {
    return;
  }

  // Sort by size (largest first)
  chunksAnalysis.files.sort((a, b) => b.size - a.size);

  console.log('\n📦 JavaScript Chunks:\n');
  
  // Show top 10 largest chunks
  chunksAnalysis.files.slice(0, 10).forEach((file, index) => {
    const bar = '█'.repeat(Math.ceil(file.size / 10000));
    console.log(`${index + 1}. ${file.name}`);
    console.log(`   ${file.formattedSize} ${bar}`);
  });

  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Total JavaScript Size: ${formatBytes(chunksAnalysis.totalSize)}`);

  // Performance budget check
  const budgetKB = 300;
  const totalKB = chunksAnalysis.totalSize / 1024;
  const percentage = (totalKB / budgetKB * 100).toFixed(1);

  console.log(`\n🎯 Performance Budget: ${budgetKB} KB`);
  console.log(`📈 Current Usage: ${totalKB.toFixed(2)} KB (${percentage}%)`);

  if (totalKB > budgetKB) {
    console.log(`\n⚠️  WARNING: Bundle size exceeds budget by ${(totalKB - budgetKB).toFixed(2)} KB`);
    console.log('\n💡 Suggestions:');
    console.log('   - Use dynamic imports for large components');
    console.log('   - Remove unused dependencies');
    console.log('   - Optimize third-party libraries');
    console.log('   - Enable tree-shaking');
  } else {
    console.log(`\n✅ Bundle size is within budget! 🎉`);
  }

  console.log('\n' + '='.repeat(60) + '\n');
}

main();
