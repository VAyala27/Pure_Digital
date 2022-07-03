$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 5,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        swipeToSlide: true,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    });
});