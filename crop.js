const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public', 'images', 'products');
const tempDir = path.join(directoryPath, 'temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const files = fs.readdirSync(directoryPath).filter(f => f.endsWith('.webp'));

async function processFiles() {
  for (const file of files) {
    const inputPath = path.join(directoryPath, file);
    const outputPath = path.join(tempDir, file);
    try {
      // Trim removes surrounding background color 
      // The threshold helps if the background has slight noise (like jpeg/webp compression artifacts)
      await sharp(inputPath)
        .trim({ threshold: 15 }) 
        .toFile(outputPath);
      console.log(`Successfully cropped ${file}`);
      
      // Overwrite the original with the cropped version
      fs.copyFileSync(outputPath, inputPath);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  // Clean up
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log("All images processed and trimmed.");
}

processFiles();
