$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true, // Enable auto-sliding
        autoplayTimeout: 3000, // Slide every 3 seconds
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        menu.classList.toggle('active');
    });
});
