const fs = require('fs');
const path = require('path');

const updates = [
  {
    file: 'src/app/services/backlite-dies-components/page.tsx',
    search: `    { title: "Electrical Insulation", description: "Parts designed specifically for high-voltage arc resistance and safety.", icon: "Zap" },`,
    replace: `    { title: "Electrical Insulation", description: "Parts designed specifically for high-voltage arc resistance and safety.", icon: "Zap" },
    { title: "Dimensional Stability", description: "Moulds constructed to ensure components maintain strict dimensions even under severe thermal stress.", icon: "Layers" },
    { title: "Custom Formulation", description: "Adapting tool designs to perfectly accommodate specific Bakelite powder formulations and shrink rates.", icon: "Settings" },`
  },
  {
    file: 'src/app/services/cnc-vmc-machining/page.tsx',
    search: `    { title: "Complex 3D Profiling", description: "Utilizing advanced CAM programming to create intricate, multi-axis geometries.", icon: "Box" },`,
    replace: `    { title: "Complex 3D Profiling", description: "Utilizing advanced CAM programming to create intricate, multi-axis geometries.", icon: "Box" },
    { title: "Rapid Turnaround", description: "Optimized toolpaths and high spindle speeds ensure fast project completion.", icon: "Zap" },
    { title: "Consistent Quality", description: "Automated probing and tool wear compensation for identical mass production.", icon: "CheckCircle2" },`
  },
  {
    file: 'src/app/services/cnc-wire-cut/page.tsx',
    search: `    { title: "Superior Finish", description: "Delivering micron-level accuracy with smooth, assembly-ready surface finishes.", icon: "CheckCircle2" },`,
    replace: `    { title: "Superior Finish", description: "Delivering micron-level accuracy with smooth, assembly-ready surface finishes.", icon: "CheckCircle2" },
    { title: "Complex Geometries", description: "Effortlessly cutting intricate shapes, tapers, and varying cross-sections.", icon: "Layers" },
    { title: "Material Versatility", description: "Capable of machining any conductive material regardless of its hardness.", icon: "Settings" },`
  },
  {
    file: 'src/app/services/dmc-dies/page.tsx',
    search: `    { title: "Heavy-Duty Build", description: "Thick mold bases designed to endure immense compression press tonnage.", icon: "Settings" },`,
    replace: `    { title: "Heavy-Duty Build", description: "Thick mold bases designed to endure immense compression press tonnage.", icon: "Settings" },
    { title: "Ejection Systems", description: "Custom engineered knock-out mechanisms for safe part removal without cracking.", icon: "Box" },
    { title: "Precision Inserts", description: "Interchangeable cavity inserts for multi-variant part manufacturing.", icon: "Layers" },`
  },
  {
    file: 'src/app/services/dmc-molding-pune/page.tsx',
    search: `    { title: "Quality Assurance", description: "Rigorous ISO 9001 compliant testing for strength and dimensional stability.", icon: "CheckCircle2" },`,
    replace: `    { title: "Quality Assurance", description: "Rigorous ISO 9001 compliant testing for strength and dimensional stability.", icon: "CheckCircle2" },
    { title: "High-Volume Capacity", description: "Multiple compression presses operating round-the-clock to meet massive order demands.", icon: "Factory" },
    { title: "Material Expertise", description: "Deep knowledge of DMC compounds to ensure optimal curing and mechanical properties.", icon: "Shield" },`
  },
  {
    file: 'src/app/services/jigs-fixtures/page.tsx',
    search: `    { title: "Turnkey Calibration", description: "Fully inspected and calibrated before deployment on your floor.", icon: "Wrench" },`,
    replace: `    { title: "Turnkey Calibration", description: "Fully inspected and calibrated before deployment on your floor.", icon: "Wrench" },
    { title: "Fool-Proof Design", description: "Poka-yoke implementations to completely prevent incorrect part loading by operators.", icon: "ShieldCheck" },
    { title: "Rapid Clamping", description: "Integration of toggle and pneumatic clamps to significantly reduce cycle times.", icon: "Zap" },`
  },
  {
    file: 'src/app/services/plastic-molding-dies/page.tsx',
    search: `    { title: "Complete Turnkey", description: "From initial CAD design to final physical mold trials on our shop floor.", icon: "CheckCircle2" },`,
    replace: `    { title: "Complete Turnkey", description: "From initial CAD design to final physical mold trials on our shop floor.", icon: "CheckCircle2" },
    { title: "Hot Runner Systems", description: "Expert integration of hot runners to eliminate waste and improve part quality.", icon: "Flame" },
    { title: "Precision Ejection", description: "Engineered pin and stripper plate designs to prevent part deformation during ejection.", icon: "Settings" },`
  },
  {
    file: 'src/app/services/press-tools/page.tsx',
    search: `    { title: "Precision Guided", description: "Heavy-duty guide pillars and bushes for absolute punch alignment.", icon: "CheckCircle2" },`,
    replace: `    { title: "Precision Guided", description: "Heavy-duty guide pillars and bushes for absolute punch alignment.", icon: "CheckCircle2" },
    { title: "Scrap Reduction", description: "Optimized strip layouts to maximize material utilization and minimize waste.", icon: "Layers" },
    { title: "Rapid Setup", description: "Standardized die sets designed for quick changeovers in the press shop.", icon: "Zap" },`
  },
  {
    file: 'src/app/services/rubber-molds/page.tsx',
    search: `    { title: "Multi-Cavity Layouts", description: "Optimized runner and venting designs for high-volume production.", icon: "Factory" },`,
    replace: `    { title: "Multi-Cavity Layouts", description: "Optimized runner and venting designs for high-volume production.", icon: "Factory" },
    { title: "Tear-Resistant Demolding", description: "Engineered cavity drafts to ensure complex rubber parts can be safely extracted.", icon: "Shield" },
    { title: "Thermal Optimization", description: "Balanced heating plates to prevent under-curing and maintain elastomer elasticity.", icon: "Flame" },`
  }
];

let changedCount = 0;
for (const update of updates) {
  const fullPath = path.join(process.cwd(), update.file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(update.search)) {
      content = content.replace(update.search, update.replace);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log("Updated " + update.file);
      changedCount++;
    } else {
      console.log("Could not find search string in " + update.file);
    }
  } else {
    console.log("File not found: " + update.file);
  }
}

console.log("Finished updating " + changedCount + " files.");
