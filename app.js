// Splide banner image
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel').mount();
});

Splide.defaults = {
    type: 'loop',
    arrows: boolean = false,
    autoplay: true,
    interval: number = 2000
}