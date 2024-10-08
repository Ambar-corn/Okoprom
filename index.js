const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
    nextEl: '.product-card__arrow-right',
    prevEl: '.product-card__arrow-left',
    },
});