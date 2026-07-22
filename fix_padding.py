import os
import re

base_dir = r"c:\Users\shiva\OneDrive\Desktop\SHRINIWAS_TOOLS_AND_EQUIPMENTS\STE_WEB_2_final\src"

pattern1 = re.compile(r'pt-28 pb-8 md:pt-0 md:pb-0')
repl1 = r'pt-[120px] pb-8 md:pt-[140px] md:pb-12'

pattern2 = re.compile(r'pt-\[120px\] pb-10 md:pt-0 md:pb-0')
repl2 = r'pt-[120px] pb-10 md:pt-[140px] md:pb-12'

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern1.sub(repl1, content)
            new_content = pattern2.sub(repl2, new_content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
