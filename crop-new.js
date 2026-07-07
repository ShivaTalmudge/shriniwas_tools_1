const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'public', 'images', 'products');
const outputDir = path.join(__dirname, 'public', 'images', 'products-cropped');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.webp'));

async function processFiles() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    try {
      await sharp(inputPath)
        .trim({ threshold: 15 }) 
        .toFile(outputPath);
      console.log(`Successfully cropped ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  console.log("All images cropped to products-cropped.");
}

processFiles();
