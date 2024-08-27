document.addEventListener('pjax:complete', todo);
document.addEventListener('DOMContentLoaded', todo);

function todo() {
    var sliderElement = document.querySelector('.blog-slider');

    if (sliderElement) {
        var swiper = new Swiper(sliderElement, {
            passiveListeners: true,
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            autoplay: {
                disableOnInteraction: false,
                delay: 3000
            },
            mousewheel: true,
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });

        swiper.el.onmouseenter = function () {
            swiper.autoplay.stop();
        };

        swiper.el.onmouseleave = function () {
            swiper.autoplay.start();
        };
    }
}
