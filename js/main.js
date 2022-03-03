const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

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