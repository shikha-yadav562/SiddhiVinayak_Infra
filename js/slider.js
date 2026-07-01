document.addEventListener('DOMContentLoaded', () => {
    // Modern Auto Slider (for Testimonials)
    const initSlider = (sliderId, dotContainerId) => {
        const slider = document.getElementById(sliderId);
        const dotContainer = document.getElementById(dotContainerId);
        if (!slider || !dotContainer) return;

        const slides = slider.children;
        const totalSlides = slides.length;
        let currentSlide = 0;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-secondary w-8' : 'bg-gray-300 hover:bg-gray-400'}`;
            dot.addEventListener('click', () => goToSlide(i));
            dotContainer.appendChild(dot);
        }
        const dots = dotContainer.children;

        const goToSlide = (index) => {
            currentSlide = index;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            Array.from(dots).forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.className = 'w-8 h-3 rounded-full transition-all duration-300 bg-secondary';
                } else {
                    dot.className = 'w-3 h-3 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400';
                }
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        };

        // Auto slide
        let slideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        slider.parentElement.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.parentElement.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    };

    initSlider('testimonial-slider', 'testimonial-dots');
});
