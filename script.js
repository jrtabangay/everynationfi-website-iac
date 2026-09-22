// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Event poster lightbox: keep the current page and scroll position visible behind the image.
const eventLightbox = document.getElementById('eventLightbox');
const eventLightboxImage = document.getElementById('eventLightboxImage');
if (eventLightbox && eventLightboxImage) {
    document.querySelectorAll('.event-poster').forEach(poster => {
        poster.addEventListener('click', (e) => {
            e.preventDefault();
            eventLightboxImage.src = poster.href;
            eventLightboxImage.alt = poster.querySelector('img').alt;
            eventLightbox.hidden = false;
        });
    });
    eventLightbox.addEventListener('click', () => {
        eventLightbox.hidden = true;
        eventLightboxImage.src = '';
    });
}
