import os
import re

pages = {
    'src/app/about/page.tsx': 'About Us',
    'src/app/quality/page.tsx': 'Quality',
    'src/app/gallery/page.tsx': 'Gallery',
    'src/app/careers/page.tsx': 'Careers',
    'src/app/infrastructure/page.tsx': 'Infrastructure',
    'src/app/industries/page.tsx': 'Industries',
    'src/app/products/page.tsx': 'Products',
    'src/app/contact/page.tsx': 'Contact Us',
    'src/app/quote/page.tsx': 'Request a Quote',
    'src/app/services/page.tsx': 'Services',
    'src/app/blog/page.tsx': 'Blog',
}

for path, title in pages.items():
    if not os.path.exists(path):
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'import Link from "next/link"' not in content:
        content = content.replace('import {', 'import Link from "next/link";\nimport {', 1)
        
    if 'ChevronRight' not in content:
        # Match `import { X, Y, Z } from "lucide-react";` safely without messing up brackets
        content = re.sub(r'import\s+{([^}]+)}\s+from\s+"lucide-react"', r'import {\1, ChevronRight} from "lucide-react"', content)
        if 'import {' not in content or '"lucide-react"' not in content:
            # If lucide react is missing entirely
            content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { ChevronRight } from "lucide-react";')

    breadcrumb = f"""
            {{/* Breadcrumb */}}
            <div className="flex items-center justify-start gap-2 text-sm text-gray-300 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{title}</span>
            </div>
"""

    if "Breadcrumb" not in content:
        content = content.replace('<h1', breadcrumb + '            <h1')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Breadcrumbs added")
