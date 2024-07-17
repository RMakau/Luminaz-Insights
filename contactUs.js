document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navbar Toggle
    const navbarToggle = document.createElement('button');
    navbarToggle.className = 'navbar-toggle';
    navbarToggle.innerHTML = '☰';
    document.querySelector('.navbar').prepend(navbarToggle);

    navbarToggle.addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active');
    });

    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        this.reset();
    });

    // Google Maps Embed (Optional, replace with your own settings)
    const mapFrame = document.createElement('iframe');
    mapFrame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2dLongitude!3dLatitude!4m22!2m13!1m12!4m8!1m3!1d1234.5678!2dLongitude!3dLatitude!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1dLatitude!2dLongitude!4m5!1s0x0%3A0x0!2zMTPCsDU2JzM0LjYiTiAxMjfCsDEyJzA1LjIiRQ!3b1!7e81!12e3!5m1!1e1!6m1!1e1!8m2!3dLatitude!4dLongitude');
    mapFrame.setAttribute('width', '600');
    mapFrame.setAttribute('height', '450');
    mapFrame.setAttribute('style', 'border:0;');
    mapFrame.setAttribute('allowfullscreen', '');
    mapFrame.setAttribute('loading', 'lazy');
    document.getElementById('map').appendChild(mapFrame);
});
