document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'slide',
        perPage: 3,
        autoplay: true,
        interval: 5000,
        pauseOnHover: false,
        easing: 'ease',
        speed: 1000,
        breakpoints: {
            640: {
                perPage: 1,
            }
        }
    }).mount();
});
