import os
import re

def update_heights():
    src_dir = r"c:\Users\shiva\OneDrive\Desktop\SHRINIWAS_TOOLS_AND_EQUIPMENTS\STE_WEB_2_final\src"
    
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace standard page heroes
                new_content = re.sub(r'min-h-\[50vh\] md:h-\[50vh\]', r'min-h-[60vh] lg:min-h-[75vh]', content)
                
                # Replace ServicePageTemplate which has a slightly different pattern
                new_content = re.sub(r'min-h-\[50vh\] lg:min-h-\[60vh\]', r'min-h-[60vh] lg:min-h-[75vh]', new_content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

if __name__ == '__main__':
    update_heights()
