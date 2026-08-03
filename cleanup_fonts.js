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

    // Clean up redundancies caused by previous script
    content = content.replace(/text-4xl sm:text-4xl md:text-4xl lg:text-\[3\.5rem\]/g, 'text-4xl sm:text-5xl lg:text-[3.5rem]');
    content = content.replace(/text-4xl sm:text-4xl lg:text-\[3\.5rem\]/g, 'text-4xl sm:text-5xl lg:text-[3.5rem]');
    content = content.replace(/text-4xl sm:text-4xl md:text-\[3\.5rem\]/g, 'text-4xl sm:text-5xl lg:text-[3.5rem]');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Cleaned ${filePath}`);
    }
  }
});

console.log("Cleanup complete.");
