document.addEventListener('DOMContentLoaded', function() {
    const accent = document.querySelector('.hero-accent[data-text]');
    if (accent) {
        const text = accent.dataset.text;
        let i = 0;
        setTimeout(function() {
            const timer = setInterval(function() {
                accent.textContent += text[i++];
                if (i >= text.length) clearInterval(timer);
            }, 150);
        }, 2000);
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
});
