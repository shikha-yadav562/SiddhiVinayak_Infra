document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve if we want animations to replay, but usually we unobserve
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-up, .slide-in-left, .zoom-in').forEach(el => {
        animateObserver.observe(el);
    });

    // Counter Animation
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter-value');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const counterSection = document.getElementById('counter-section');
    if (counterSection) counterObserver.observe(counterSection);

    // Testimonials Auto Slider
    const testimonialTrack = document.getElementById('testimonial-track');
    if (testimonialTrack) {
        let items = testimonialTrack.children;
        let index = 0;
        setInterval(() => {
            for(let i=0; i<items.length; i++) {
                items[i].style.opacity = '0';
                items[i].style.position = 'absolute';
                items[i].style.pointerEvents = 'none';
            }
            items[index].style.opacity = '1';
            items[index].style.position = 'relative';
            items[index].style.pointerEvents = 'auto';
            index = (index + 1) % items.length;
        }, 5000);
    }
});
