// tabs.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Helper function to handle tab switching
    function setupTabs(tabButtons, tabItems, activeClass, inactiveClasses) {
        if (!tabButtons.length) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active styling from all buttons
                tabButtons.forEach(btn => {
                    btn.className = inactiveClasses;
                });
                
                // Add active styling to clicked button
                button.className = activeClass;
                
                // Get the category to filter by
                const category = button.getAttribute('data-filter');
                
                // Show/Hide items based on category
                tabItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        // Small animation reset
                        item.style.animation = 'none';
                        item.offsetHeight; // trigger reflow
                        item.style.animation = null;
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // 1. Fleet Tabs
    const fleetTabs = document.querySelectorAll('.fleet-tab');
    const fleetItems = document.querySelectorAll('.fleet-item');
    const fleetActive = "fleet-tab bg-secondary text-white font-bold text-xs uppercase px-6 py-2 rounded-sm border border-secondary shadow-sm transition";
    const fleetInactive = "fleet-tab bg-white text-primary hover:bg-gray-100 font-bold text-xs uppercase px-6 py-2 rounded-sm border border-gray-200 transition";
    setupTabs(fleetTabs, fleetItems, fleetActive, fleetInactive);

    // 2. Projects Tabs
    const projectTabs = document.querySelectorAll('.project-tab');
    const projectItems = document.querySelectorAll('.project-item');
    const projActive = "project-tab bg-secondary text-white font-bold text-xs uppercase px-8 py-2 rounded-t-sm shadow-sm transition";
    const projInactive = "project-tab bg-transparent text-primary hover:text-secondary font-bold text-xs uppercase px-8 py-2 rounded-t-sm transition";
    setupTabs(projectTabs, projectItems, projActive, projInactive);

    // 3. Contact Tabs
    const contactTabs = document.querySelectorAll('.contact-tab');
    const contactPanes = document.querySelectorAll('.contact-pane');
    
    if (contactTabs.length > 0) {
        contactTabs.forEach(button => {
            button.addEventListener('click', () => {
                // Reset buttons
                contactTabs.forEach(btn => {
                    btn.className = "contact-tab flex-1 py-4 text-xs font-bold text-gray-400 hover:text-white uppercase transition";
                });
                // Set active button
                button.className = "contact-tab flex-1 py-4 text-xs font-bold text-white bg-secondary uppercase transition";
                
                // Hide all panes
                contactPanes.forEach(pane => pane.classList.add('hidden'));
                
                // Show target pane
                const targetId = button.getAttribute('data-target');
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.classList.remove('hidden');
                }
            });
        });
    }
});
