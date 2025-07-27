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