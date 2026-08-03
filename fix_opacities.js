const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

let changed = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace opacity-50 with opacity-80 in the bg-cover div
    const newContent = content
        .replace(
            /bg-cover bg-center bg-no-repeat opacity-50/g,
            'bg-cover bg-center bg-no-repeat opacity-80'
        )
        .replace(
            /bg-gradient-to-r from-brand-dark\/90 via-brand-dark\/80 to-brand-dark\/40/g,
            'bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20'
        );

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
        changed++;
    }
}

console.log(`Finished updating ${changed} files.`);
