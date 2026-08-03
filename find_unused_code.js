const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(__dirname, 'src', 'components');

function getAllFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const allComponents = getAllFiles(componentsDir);
const allCodeFiles = getAllFiles(srcDir);

// Read all code contents once
const allCode = allCodeFiles.map(file => fs.readFileSync(file, 'utf8')).join('\n');

const unusedComponents = [];

allComponents.forEach(comp => {
  // Get filename without extension
  const basename = path.basename(comp, path.extname(comp));
  
  // We assume that a component is used if its basename is imported or rendered anywhere in the code.
  // Note: we might need to exclude the component file itself if it exports its own name.
  // A naive check: does the string `basename` appear more than once (or in any file other than itself)?
  
  let used = false;
  allCodeFiles.forEach(file => {
    if (file === comp) return; // ignore self
    const content = fs.readFileSync(file, 'utf-8');
    if (content.includes(basename)) {
      used = true;
    }
  });
  
  if (!used) {
    unusedComponents.push(path.relative(srcDir, comp));
  }
});

console.log("=== UNUSED COMPONENTS ===");
unusedComponents.forEach(comp => console.log(comp));
console.log(`\nFound ${unusedComponents.length} unused components out of ${allComponents.length} total components.`);
