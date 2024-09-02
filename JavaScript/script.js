document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = document.getElementById('carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true
    });
});
