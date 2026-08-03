const fs = require('fs');
const path = require('path');

const targetClass = 'className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800"';

// Add the background overlay container with correct classes if it doesn't have mix-blend-luminosity
// Actually, it's safer to just regex replace the className of the <section>

const filesToCheck = [
    'src/app/about/page.tsx',
    'src/app/blog/page.tsx',
    'src/app/careers/page.tsx',
    'src/app/contact/page.tsx',
    'src/app/gallery/page.tsx',
    'src/app/industries/page.tsx',
    'src/app/infrastructure/page.tsx',
    'src/app/products/page.tsx',
    'src/app/quality/page.tsx',
    'src/app/quote/page.tsx',
    'src/app/services/page.tsx',
    'src/app/services/ServicesClient.tsx'
];

let changedCount = 0;

for (const filePath of filesToCheck) {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) continue;

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the section tag with min-h-[...vh]
    const sectionRegex = /<section className="relative min-h-\[\d+vh\].*?"/g;
    
    if (sectionRegex.test(content)) {
        content = content.replace(sectionRegex, `<section ${targetClass}`);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated hero in ${filePath}`);
        changedCount++;
    }
}

console.log(`Finished updating ${changedCount} files.`);
