// Toggle Mobile Navigation Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Interactive Counter Logic
let count = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterValue.textContent = count;
});

// Contact Form Interactive Submission Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate successful form submission
    formStatus.style.color = 'green';
    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
    
    // Reset form fields
    contactForm.reset();
});