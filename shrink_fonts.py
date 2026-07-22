import glob
import re

files = glob.glob('src/app/**/*.tsx', recursive=True)
files.append('src/components/ServicePageTemplate.tsx')
files.append('src/components/Navbar.tsx')

def downgrade_fonts(text):
    # Downgrade 6xl -> 5xl
    text = text.replace('text-6xl', 'text-5xl')
    # Downgrade 5xl -> 4xl
    text = text.replace('text-5xl', 'text-4xl')
    
    # Paragraphs using lg:text-2xl are too big
    text = text.replace('lg:text-2xl', 'lg:text-xl')
    text = text.replace('md:text-2xl', 'md:text-xl')
    
    # Reduce some 4xl to 3xl if they are combined with md:
    text = text.replace('md:text-4xl font-heading', 'md:text-3xl font-heading')
    text = text.replace('lg:text-4xl font-heading', 'lg:text-3xl font-heading')

    # Fix case where we might have text-3xl sm:text-4xl md:text-3xl (which is weird)
    text = text.replace('sm:text-4xl md:text-3xl', 'sm:text-3xl md:text-4xl')
    text = text.replace('sm:text-4xl md:text-4xl', 'sm:text-3xl md:text-4xl')
    
    return text

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = downgrade_fonts(content)
    
    if content != new_content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print('Shrunk fonts in ' + f)

print("Done")
