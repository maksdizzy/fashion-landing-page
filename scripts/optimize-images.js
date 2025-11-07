#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * Converts all JPG images to WebP format with optimized settings
 *
 * Usage: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const QUALITY = 85; // WebP quality (0-100)
const MAX_WIDTH = 1080; // Max width for 9:16 aspect ratio
const MAX_HEIGHT = 1920; // Max height for 9:16 aspect ratio

// Directories to process
const directories = [
  './src/assets/hero',
  './src/assets/social-proof',
];

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'cover',
        position: 'center',
        withoutEnlargement: true, // Don't upscale small images
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}`);
    console.log(`  ${(originalSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB (${savings}% savings)`);

    return { originalSize, optimizedSize };
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.warn(`⚠️  Directory not found: ${dir}`);
    return { totalOriginal: 0, totalOptimized: 0, count: 0 };
  }

  const files = fs.readdirSync(dir);
  const jpgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));

  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  console.log(`\n📁 Processing ${dir}... (${jpgFiles.length} images)`);

  for (const file of jpgFiles) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));

    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
      count++;
    }
  }

  return { totalOriginal, totalOptimized, count };
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');

  let grandTotalOriginal = 0;
  let grandTotalOptimized = 0;
  let grandCount = 0;

  for (const dir of directories) {
    const { totalOriginal, totalOptimized, count } = await processDirectory(dir);
    grandTotalOriginal += totalOriginal;
    grandTotalOptimized += totalOptimized;
    grandCount += count;
  }

  console.log('\n================================');
  console.log('📊 Summary:');
  console.log(`   Optimized: ${grandCount} images`);
  console.log(`   Original: ${(grandTotalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Optimized: ${(grandTotalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Savings: ${(grandTotalOriginal / 1024 / 1024 - grandTotalOptimized / 1024 / 1024).toFixed(2)} MB (${((1 - grandTotalOptimized / grandTotalOriginal) * 100).toFixed(1)}%)`);
  console.log('\n✅ Done!');
  console.log('   Update your imports to use .webp files');
}

main().catch(console.error);
