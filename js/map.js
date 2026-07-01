document.addEventListener('DOMContentLoaded', () => {
    const mapMarkers = document.querySelectorAll('.map-marker');
    if (mapMarkers.length === 0) return;

    // Connect lines to markers dynamically (optional enhancement)
    // The SVG lines are static in HTML, but we can animate them

    // Function to clear active state from all markers
    const clearActiveMarkers = () => {
        mapMarkers.forEach(marker => marker.classList.remove('active'));
    };

    // Random highlight logic (User request)
    let randomHighlightInterval;
    const startRandomHighlight = () => {
        randomHighlightInterval = setInterval(() => {
            clearActiveMarkers();
            const randomIndex = Math.floor(Math.random() * mapMarkers.length);
            mapMarkers[randomIndex].classList.add('active');
        }, 3000); // Change highlight every 3 seconds
    };

    startRandomHighlight();

    // Pause random highlight on manual hover
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.addEventListener('mouseenter', () => {
            clearInterval(randomHighlightInterval);
            clearActiveMarkers();
        });

        mapContainer.addEventListener('mouseleave', () => {
            clearActiveMarkers();
            startRandomHighlight();
        });
    }

    // Manual hover handling
    mapMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', () => {
            clearActiveMarkers();
            marker.classList.add('active');
        });
    });
});
