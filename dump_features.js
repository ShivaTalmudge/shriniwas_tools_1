const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app', 'services');
const files = fs.readdirSync(dir, { withFileTypes: true });

for (const f of files) {
    if (f.isDirectory()) {
        const filePath = path.join(dir, f.name, 'page.tsx');
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            const match = content.match(/keyFeatures:\s*\[([\s\S]*?)\]/);
            if (match) {
                console.log(`\n\n--- ${f.name} ---`);
                console.log(match[0]);
            }
        }
    }
}
