// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add subtle nav scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 100) {
        navbar.style.borderBottomColor = 'rgba(79, 109, 138, 0.5)';
    } else {
        navbar.style.borderBottomColor = 'rgba(79, 109, 138, 0.2)';
    }
    
    lastScrollTop = scrollTop;
});

// Lazy load images with intersection observer
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            // Images already load normally, but this allows for future optimization
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});
