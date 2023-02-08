import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(elem) {
    this.swiper = elem;
  }

  init() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    new Swiper(this.swiper, {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
      },
      initialSlide: 1,
    });
  }
}
