import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(elem) {
    this.elem = elem;
    this.carousel = null;
  }

  init() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    new Swiper('.swiper', {
      // direction: 'horizontal' | 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
      },
      initialSlide: 1,
    });
  }
}
