// main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Slider Automation
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    const slideInterval = 4000; // 4 seconds

    if (slides.length > 0 && dots.length > 0) {
        function nextSlide() {
            // Hide current
            slides[currentSlide].classList.remove('opacity-90');
            slides[currentSlide].classList.add('opacity-0');
            dots[currentSlide].classList.remove('opacity-100');
            dots[currentSlide].classList.add('opacity-40');
            
            // Advance
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Show new
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-90');
            dots[currentSlide].classList.remove('opacity-40');
            dots[currentSlide].classList.add('opacity-100');
        }
        
        // Start automation
        let slideTimer = setInterval(nextSlide, slideInterval);
        
        // Allow manual click on dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideTimer); // pause on click
                
                // Hide current
                slides[currentSlide].classList.remove('opacity-90');
                slides[currentSlide].classList.add('opacity-0');
                dots[currentSlide].classList.remove('opacity-100');
                dots[currentSlide].classList.add('opacity-40');
                
                // Set new
                currentSlide = index;
                
                // Show new
                slides[currentSlide].classList.remove('opacity-0');
                slides[currentSlide].classList.add('opacity-90');
                dots[currentSlide].classList.remove('opacity-40');
                dots[currentSlide].classList.add('opacity-100');
                
                // Restart timer
                slideTimer = setInterval(nextSlide, slideInterval);
            });
        });
    }

});
