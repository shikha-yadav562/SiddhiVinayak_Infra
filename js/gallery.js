document.addEventListener('DOMContentLoaded', () => {
    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    if (filterBtns.length > 0 && filterItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white');
                    b.classList.add('bg-white', 'text-gray-600');
                });
                // Add active class to clicked button
                btn.classList.add('bg-primary', 'text-white');
                btn.classList.remove('bg-white', 'text-gray-600');

                const target = btn.getAttribute('data-target');

                filterItems.forEach(item => {
                    if (target === 'all' || item.getAttribute('data-category') === target) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Tabs logic (for Fleet section)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Deactivate all
                tabBtns.forEach(b => {
                    b.classList.remove('border-secondary', 'text-primary');
                    b.classList.add('border-transparent', 'text-gray-500');
                });
                tabContents.forEach(c => c.classList.add('hidden'));

                // Activate selected
                btn.classList.add('border-secondary', 'text-primary');
                btn.classList.remove('border-transparent', 'text-gray-500');
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.remove('hidden');
            });
        });
    }

    // Simple Lightbox
    const galleryImages = document.querySelectorAll('.lightbox-trigger');
    if (galleryImages.length > 0) {
        // Create lightbox container
        const lightbox = document.createElement('div');
        lightbox.className = 'fixed inset-0 z-[100] bg-black/90 hidden flex items-center justify-center p-4 transition-opacity duration-300 opacity-0';
        
        const lightboxImg = document.createElement('img');
        lightboxImg.className = 'max-w-full max-h-full object-contain shadow-2xl rounded-lg';
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'absolute top-6 right-6 text-white text-5xl hover:text-secondary transition';
        
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.remove('hidden');
                setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden'; // prevent scrolling
            });
        });

        const closeLightbox = () => {
            lightbox.classList.add('opacity-0');
            setTimeout(() => lightbox.classList.add('hidden'), 300);
            document.body.style.overflow = 'auto';
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
});
