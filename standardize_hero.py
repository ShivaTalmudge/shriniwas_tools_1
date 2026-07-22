import glob
import re

# The standard overlay we want on every page
STANDARD_OVERLAY = '<div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />'

files = glob.glob('src/app/**/*.tsx', recursive=True)
files.append('src/components/ServicePageTemplate.tsx')

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We will look for <section className="relative min-h-...
    # Then we will find the absolute inset-0 background divs and replace them.
    # This might be tricky because each page has a slightly different DOM tree for the image.
    
    # Let's do it with specific patterns for known variations:
    
    # 1. About, Contact, Quote, Careers, Blog, Quality, Gallery
    # They have:
    # <div 
    #   className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
    #   style={{ backgroundImage: 'url(...)' }}
    # >
    #   <div className="absolute inset-0 bg-brand-dark/XX" />
    # </div>
    content = re.sub(r'<div className="absolute inset-0 bg-brand-dark/\d{2}" />', STANDARD_OVERLAY, content)
    
    # 2. ServicePageTemplate
    content = content.replace('<div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />', STANDARD_OVERLAY)
    
    # 3. Industries
    content = content.replace('<div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent z-10" />', STANDARD_OVERLAY)
    
    # 4. Services Parent
    content = content.replace('<div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/50 z-10" />', STANDARD_OVERLAY)

    # 5. Products
    # <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
    # Wait, in products/page.tsx, is there a hero section? 
    # The home page has `z-10` on the overlay, let's keep it.
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Standardized overlays")
