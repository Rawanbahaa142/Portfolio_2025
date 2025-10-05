// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
        console.log('Theme toggle clicked!'); // Debug log
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeIcon.textContent = '☀️';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.textContent = '🌙';
        }
    });
} else {
    console.error('Theme toggle elements not found!');
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        console.log('Mobile toggle clicked!'); // Debug log
        navMenu.classList.toggle('active');
    });
} else {
    console.error('Mobile menu elements not found!');
}

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(`Clicked link: ${this.getAttribute('href')}`); // Debug log
        navMenu?.classList.remove('active');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            console.log(`Scrolling to: ${this.getAttribute('href')}`); // Debug log
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Section not found: ${this.getAttribute('href')}`); // Debug log
        }
    });
});

// Navbar Scroll Effect (shrink on scroll)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.style.padding = '0.8rem 5%';
        } else {
            navbar.style.padding = '1.2rem 5%';
        }
        lastScroll = currentScroll;
    }
});

// Formbutton (if you're using it)
if (typeof formbutton !== 'undefined') {
    formbutton("create", {
        action: "https://formspree.io/f/xdkwdgvv",
        title: "How can we help?",
        fields: [
            { type: "email", label: "Email:", name: "email", required: true, placeholder: "your@email.com" },
            { type: "textarea", label: "Message:", name: "message", placeholder: "What's on your mind?" },
            { type: "submit" }
        ],
        styles: {
            title: { backgroundColor: "gray" },
            button: { backgroundColor: "gray" }
        }
    });
}