import os

base_dir = r"c:\Users\shiva\OneDrive\Desktop\SHRINIWAS_TOOLS_AND_EQUIPMENTS\STE_WEB_2_final\src"

def replace_in_file(filepath, old_str, new_str):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

placeholder_hero = "https://placehold.co/1920x1080/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
placeholder_img = "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"

mappings = {
    r"app\page.tsx": [(placeholder_hero, "/company_machines/bannerimage1.png")],
    r"app\about\page.tsx": [(placeholder_hero, "/company_machines/bannerimage2.png")],
    
    r"app\services\cnc-wire-cut\page.tsx": [
        (placeholder_hero, "/company_machines/wire_cut_floor.png"),
        (placeholder_img, "/company_machines/wirecut_image2.png")
    ],
    r"app\services\cnc-vmc-machining\page.tsx": [
        (placeholder_hero, "/company_machines/milling_machine.png"),
        (placeholder_img, "/company_machines/VMC_2.png")
    ],
    r"app\services\dmc-molding-pune\page.tsx": [
        (placeholder_hero, "/company_machines/bannerimage1.png"),
        (placeholder_img, "/company_machines/horizontal_injection_moulding_machine.png")
    ],
    r"app\services\plastic-molding-dies\page.tsx": [
        (placeholder_hero, "/company_machines/bannerimage2.png"),
        (placeholder_img, "/company_machines/horizonatl_injection_moulding_machine_1.png")
    ],
    r"app\services\jigs-fixtures\page.tsx": [
        (placeholder_hero, "/company_machines/bannerimage1.png"),
        (placeholder_img, "/company_machines/milling_machine.png")
    ],
    r"app\services\press-tools\page.tsx": [
        (placeholder_hero, "/company_machines/bannerimage2.png"),
        (placeholder_img, "/company_machines/VMC1.png")
    ],
    r"app\services\dmc-dies\page.tsx": [
        (placeholder_hero, "/company_machines/wire_cut_floor.png"),
        (placeholder_img, "/company_machines/horizontal_injection_moulding_machine.png")
    ],
    r"app\services\rubber-molds\page.tsx": [
        (placeholder_hero, "/company_machines/bannerimage1.png"),
        (placeholder_img, "/company_machines/horizonatl_injection_moulding_machine_1.png")
    ],
    r"app\services\backlite-dies-components\page.tsx": [
        (placeholder_hero, "/company_machines/bannerimage2.png"),
        (placeholder_img, "/company_machines/horizontal_injection_moulding_machine.png")
    ],
}

for rel_path, replacements in mappings.items():
    full_path = os.path.join(base_dir, rel_path)
    for old, new in replacements:
        replace_in_file(full_path, old, new)

# General fallback for all other files
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            replace_in_file(filepath, placeholder_hero, "/company_machines/bannerimage1.png")
