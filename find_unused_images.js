const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

function getAllFiles(dir, extArray = null) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file, extArray));
    } else {
      if (!extArray || extArray.some(ext => file.endsWith(ext))) {
        results.push(file);
      }
    }
  });
  return results;
}

const imageExts = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
const allImages = getAllFiles(publicDir, imageExts);
const allCodeFiles = getAllFiles(srcDir, ['.ts', '.tsx', '.css', '.js', '.json']);

const codeContents = allCodeFiles.map(file => fs.readFileSync(file, 'utf8')).join('\n');

const unusedImages = [];

allImages.forEach(img => {
  // Get filename and relative path from public
  const relativePath = path.relative(publicDir, img).replace(/\\/g, '/');
  const filename = path.basename(img);
  
  // We check if either the exact filename or the relative path appears in the code.
  if (!codeContents.includes(filename)) {
    unusedImages.push(relativePath);
  }
});

console.log("=== UNUSED IMAGES ===");
unusedImages.forEach(img => console.log(img));
console.log(`\nFound ${unusedImages.length} unused images out of ${allImages.length} total images.`);
