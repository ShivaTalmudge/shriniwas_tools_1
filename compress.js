const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public', 'images', 'products');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory', err);
    return;
  }
  
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(directoryPath, file);
      const outputPath = path.join(directoryPath, file.replace(/\.(png|jpe?g)$/i, '.webp'));
      
      sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Successfully compressed ${file} to WebP`);
          // Delete original file to save space
          fs.unlinkSync(inputPath);
        })
        .catch(err => {
          console.error(`Error processing ${file}:`, err);
        });
    }
  });
});
