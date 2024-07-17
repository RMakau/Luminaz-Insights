// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach((link) => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Responsive navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
