// Menu toggle functionality
document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click from immediately closing menu
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('nav')) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('nav')) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});

// Prevent scrolling when menu is open on mobile
document.querySelector('.nav-links').addEventListener('touchmove', function(e) {
    if (this.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
