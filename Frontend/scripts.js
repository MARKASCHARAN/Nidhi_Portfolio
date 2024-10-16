// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted');
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });

    // Project hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealElementsOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            const revealPoint = 150; // Adjust as needed

            if (elementTop < viewportHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    };

    // Initial check
    revealElementsOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealElementsOnScroll);
});













