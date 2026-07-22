import os
import glob
import re

files = glob.glob('src/app/**/*.tsx', recursive=True)
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace md:text-6xl with md:text-5xl and lg:text-6xl with lg:text-5xl for h1/h2 in heroes
    new_content = re.sub(r'md:text-6xl', 'md:text-5xl', content)
    new_content = re.sub(r'lg:text-6xl', 'lg:text-5xl', new_content)
    new_content = re.sub(r'md:text-7xl', 'md:text-6xl', new_content)
    
    # Fix the home page redirection buttons specifically in page.tsx
    if f.endswith('page.tsx') and 'src\\app\\page.tsx' in f:
        # We replace the buttons div block
        buttons_div_pattern = r'(<motion\.div[^>]*className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4"[^>]*>)[\s\S]*?(</motion\.div>)'
        
        replacement = r'''\1
            <button
              onClick={openQuoteModal}
              className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded-full hover:-translate-y-1 hover:shadow-xl shadow-brand-accent/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider rounded-full border border-white/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          \2'''
        
        new_content = re.sub(buttons_div_pattern, replacement, new_content)

    if content != new_content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print('Updated ' + f)
