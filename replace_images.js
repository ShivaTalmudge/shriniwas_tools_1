const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace background images (Hero sections) where it starts with url(https://images.unsplash.com...
    content = content.replace(/url\(https:\/\/images\.unsplash\.com\/[^)]+\)/g, 
      "url(https://placehold.co/1920x1080/1a1a1a/ffffff/png?text=Image+Uploading+Soon)");

    // Replace src properties
    content = content.replace(/"https:\/\/images\.unsplash\.com\/[^"]+"/g, 
      "\"https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon\"");

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated:', filePath);
    }
  }
});
