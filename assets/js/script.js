document.addEventListener('DOMContentLoaded', function() {
    // Contact page: assemble the address on click so it isn't sitting in the HTML
    const reveal = document.querySelector('.contact-reveal');
    if (reveal) {
        reveal.addEventListener('click', function() {
            const address = reveal.dataset.eu + String.fromCharCode(64) + reveal.dataset.ed;
            const link = document.createElement('a');
            link.href = 'mailto:' + address;
            link.textContent = address;
            link.className = 'contact-email';
            reveal.replaceWith(link);
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
});
