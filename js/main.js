// get year
const year = document.querySelector('#year');
const date = new Date();
year.innerHTML = date.getFullYear();

const navbar = document.querySelector('.navbar');
const heroPage = document.querySelector('.hero-page');

const sectionOptions = {
    rootMargin: "-350px 0px 0px 0px"
};

const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    })
}, sectionOptions);

sectionObserver.observe(heroPage);

$(document).ready(function () {
    $(".css-transitions-only-after-page-load").each(function (index, element) {
        setTimeout(function () {
            $(element).removeClass("css-transitions-only-after-page-load")
        }, 10);
    });
});