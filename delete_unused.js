const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');

function getAllFiles(dir, extArray = null) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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

// 1. Delete Unused Images
const imageExts = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
const allImages = getAllFiles(publicDir, imageExts);
const allCodeFiles = getAllFiles(srcDir, ['.ts', '.tsx', '.css', '.js', '.json']);
const allCodeContents = allCodeFiles.map(file => fs.readFileSync(file, 'utf8')).join('\n');

let deletedImagesCount = 0;
allImages.forEach(img => {
  const relativePath = path.relative(publicDir, img).replace(/\\/g, '/');
  const filename = path.basename(img);
  
  if (!allCodeContents.includes(filename)) {
    console.log(`Deleting image: ${relativePath}`);
    fs.unlinkSync(img);
    deletedImagesCount++;
  }
});
console.log(`\nDeleted ${deletedImagesCount} unused images.`);

// 2. Delete Unused Components
const allComponents = getAllFiles(componentsDir);
let deletedComponentsCount = 0;
allComponents.forEach(comp => {
  const basename = path.basename(comp, path.extname(comp));
  let used = false;
  allCodeFiles.forEach(file => {
    if (file === comp) return;
    const content = fs.readFileSync(file, 'utf-8');
    if (content.includes(basename)) {
      used = true;
    }
  });
  
  if (!used) {
    console.log(`Deleting component: ${path.relative(srcDir, comp)}`);
    fs.unlinkSync(comp);
    deletedComponentsCount++;
  }
});
console.log(`Deleted ${deletedComponentsCount} unused components.`);
