const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Order is important so we don't double replace
    // Replace 9xl to 6xl
    content = content.replace(/text-9xl/g, 'text-6xl');
    // Replace 7xl to [3.5rem]
    content = content.replace(/text-7xl/g, 'text-[3.5rem]');
    // Replace 6xl to 5xl
    content = content.replace(/text-6xl/g, 'text-5xl');
    // Replace 5xl to 4xl
    content = content.replace(/text-5xl/g, 'text-4xl');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  }
});

console.log("Typography downscaling complete.");
