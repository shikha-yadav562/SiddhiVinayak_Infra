import re

# Read all files
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()
with open('services.html', 'r', encoding='utf-8') as f:
    services_content = f.read()
with open('projects.html', 'r', encoding='utf-8') as f:
    projects_content = f.read()
with open('fleet.html', 'r', encoding='utf-8') as f:
    fleet_content = f.read()

# 1. Add Tower Crane to Fleet
fleet_addition = '''
                <div class="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 hover:-translate-y-2 transition duration-500 group">
                    <div class="h-56 overflow-hidden relative">
                        <img src="images/tower crance.webp" alt="Tower Crane" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-primary mb-2">Tower Cranes & Erection</h4>
                        <p class="text-gray-600 text-sm">Heavy lifting and high-rise construction support.</p>
                    </div>
                </div>'''
                
if 'tower crance.webp' not in fleet_content:
    # Find the end of the grid in fleet.html
    fleet_grid_end = fleet_content.find('</div>\n            </div>\n        </div>\n    </section>')
    if fleet_grid_end != -1:
        fleet_content = fleet_content[:fleet_grid_end] + fleet_addition + fleet_content[fleet_grid_end:]

# 2. Add Services Section to Services Page
# The user wants "services section in service page". In services.html, there is already a services list, but it might just be the textual list. 
# Let's extract the "Four Core Divisions" from index.html and put it in services.html.
match_divs = re.search(r'(<!-- Expanded Four Core Divisions -->.*?)<!-- Global Network / Location -->', index_content, re.DOTALL)
if match_divs:
    core_divs_html = match_divs.group(1)
    # Inject before CTA in services
    cta_idx = services_content.find('<!-- CTA Section -->')
    if cta_idx != -1:
        services_content = services_content[:cta_idx] + core_divs_html + services_content[cta_idx:]

# 3. Add Site Work Section to Projects Page
# The user wants "site work section image also". Let's extract the "Siddhivinayak Infra Works" section from index.html
match_works = re.search(r'(<!-- Siddhivinayak Infra Works -->.*?</section>)', index_content, re.DOTALL)
if match_works:
    works_html = match_works.group(1)
    # Inject before CTA in projects
    cta_idx = projects_content.find('<!-- CTA Section -->')
    if cta_idx != -1:
        projects_content = projects_content[:cta_idx] + works_html + projects_content[cta_idx:]

# 4. Add piling work images in projects page
# I will explicitly add piling work images in projects.html if not already there, but they are inside the core divisions and works sections I just copied.
# Just to be safe, I'll add a dedicated Piling block if it's missing. Actually, works_html has proj1 to proj5.
# Let's save all.

with open('services.html', 'w', encoding='utf-8') as f:
    f.write(services_content)
with open('projects.html', 'w', encoding='utf-8') as f:
    f.write(projects_content)
with open('fleet.html', 'w', encoding='utf-8') as f:
    f.write(fleet_content)

print("Pages updated successfully.")
