const fs = require('fs');
const path = require('path');

const filesToImages = {
    'src/app/about/page.tsx': '/company_machines/bannerimage1.png',
    'src/app/blog/page.tsx': '/company_machines/wire_cut_machine_imp1.png',
    'src/app/careers/page.tsx': '/company_machines/programmer_office.png',
    'src/app/contact/page.tsx': '/company_machines/VMC1.png',
    'src/app/gallery/page.tsx': '/company_machines/wirecut_image2.png',
    'src/app/industries/page.tsx': '/company_machines/wire_machines_room.png',
    'src/app/infrastructure/page.tsx': '/company_machines/wire_cut_floor.png',
    'src/app/products/page.tsx': '/company_machines/horizontal_injection_moulding_machine.png',
    'src/app/quality/page.tsx': '/metrology_cmm.png',
    'src/app/quote/page.tsx': '/company_machines/wire_cut_machine_2_imp.png',
    'src/app/services/page.tsx': '/company_machines/VMC_2.png',
    'src/app/services/ServicesClient.tsx': '/company_machines/VMC_2.png'
};

const sectionStart = `<section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">`;

let changedCount = 0;

for (const [filePath, imagePath] of Object.entries(filesToImages)) {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) continue;

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find where the section starts
    const sectionIndex = content.indexOf(sectionStart);
    if (sectionIndex === -1) {
        console.log(`Could not find standard section in ${filePath}`);
        continue;
    }

    // Find the end of the first container or motion div which represents the content
    const containerIndex = content.indexOf('<div className="container', sectionIndex);
    if (containerIndex === -1) {
        console.log(`Could not find container in ${filePath}`);
        continue;
    }

    // We want to replace everything between the section start and the container start
    // with our perfect overlay structure
    
    const prefix = content.substring(0, sectionIndex + sectionStart.length);
    const suffix = content.substring(containerIndex);
    
    const perfectOverlay = `
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: 'url(${imagePath})' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/80 to-brand-dark/40 z-10" />
        
        `;
        
    const newContent = prefix + perfectOverlay + suffix;
    
    if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Fixed overlay in ${filePath}`);
        changedCount++;
    }
}

console.log(`Finished updating ${changedCount} files.`);
