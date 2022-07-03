$(document).ready(function () {
    $('.testimonal-slider').slick({
        slidesToShow: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        swipeToSlide: true,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
    });
});