import os
import re

base_dir = r"c:\Users\shiva\OneDrive\Desktop\SHRINIWAS_TOOLS_AND_EQUIPMENTS\STE_WEB_2_final\src"
pattern = re.compile(r'/images/hero_[a-zA-Z0-9_-]+\.png')
replacement = 'https://placehold.co/1920x1080/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon'

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if pattern.search(content):
                new_content = pattern.sub(replacement, content)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
