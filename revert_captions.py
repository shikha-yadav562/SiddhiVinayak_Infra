import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Revert captions to just machine and wall
replacements = {
    "600 MM Dia Touch Piling (MRVC Naigaon Site)": "600 MM Dia Touch Piling",
    "Gabion Wall & Micro Pile (Thane Mahanagar Palika)": "Gabion Wall & Micro Pile (300 MM Dia)",
    "Sheet Pile Work (L&T, Damanganga Vapi)": "Sheet Pile Work",
    "Heavy Pile Foundation (MRVC Koper Site)": "Heavy Pile Foundation",
    "Piling Work (Ma. Balasaheb Thackeray Smarak, Bandra)": "Railway Piling Work",
    "Deep Foundation (Kharbav Site)": "Deep Foundation",
    "Rock Anchoring (Ulhasnagar Site)": "Rock Anchoring",
    "Track Logistics (Dadar Site)": "Track Logistics"
}

for old, new in replacements.items():
    content = content.replace(f">{old}<", f">{new}<")
    # Also handle multiline indentation if needed, but since we used generic replace we can just do stripping
    content = re.sub(r'>\s*' + re.escape(old) + r'\s*<', f'>\\n                        {new}\\n                    <', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Reverted captions to just machine and wall info.")
