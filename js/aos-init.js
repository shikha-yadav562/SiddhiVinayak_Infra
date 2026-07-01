// aos-init.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS as strictly requested by user
    AOS.init({
        duration: 1000,
        offset: 120,
        once: false,
        easing: 'ease-in-out'
    });
});
