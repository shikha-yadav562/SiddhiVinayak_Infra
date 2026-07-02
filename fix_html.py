import os
import glob

html_files = glob.glob('*.html')

tailwind_config = '''    <script>
        tailwind.config = { theme: { extend: { colors: { primary: '#082B59', secondary: '#D72638', dark: '#041A3B' }, fontFamily: { sans: ['Poppins', 'sans-serif'], heading: ['Montserrat', 'sans-serif'] } } } }
    </script>'''

aos_css = '''    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/animations.css">'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    changed = False
    
    if '<link rel="stylesheet" href="css/animation.css">' in content:
        content = content.replace('<link rel="stylesheet" href="css/animation.css">', aos_css)
        changed = True
        
    if '<script src="https://cdn.tailwindcss.com"></script>' in content:
        if 'tailwind.config =' not in content:
            content = content.replace('<script src="https://cdn.tailwindcss.com"></script>', '<script src="https://cdn.tailwindcss.com"></script>\n' + tailwind_config)
            changed = True

    if changed:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed {file}')
