import glob
import re

files = glob.glob('src/app/**/*.tsx', recursive=True)
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Remove `w-full lg:w-[80%]` and `w-full lg:w-2/3` from container divs
    new_content = re.sub(r'(className="[^"]*container[^"]*) w-full lg:w-\[80\%\]([^"]*")', r'\1\2', content)
    new_content = re.sub(r'(className="[^"]*container[^"]*) w-full lg:w-2/3([^"]*")', r'\1\2', new_content)
    new_content = re.sub(r'(className="[^"]*container[^"]*) w-full lg:w-1/2([^"]*")', r'\1\2', new_content)
    
    # Add mx-auto to page.tsx container if it's missing
    new_content = new_content.replace('className="container relative z-10 px-4 md:px-8 text-left text-white mt-16"', 'className="container mx-auto relative z-10 px-4 md:px-8 text-left text-white mt-16"')
    
    # User said fonts didn't change... Wait, did I push the font size changes?
    # I did run `update_hero_texts.py` and committed. Let's make sure it's 5xl.
    new_content = re.sub(r'lg:text-6xl', 'lg:text-5xl', new_content)
    new_content = re.sub(r'md:text-6xl', 'md:text-5xl', new_content)
    
    if content != new_content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print('Updated container in ' + f)
