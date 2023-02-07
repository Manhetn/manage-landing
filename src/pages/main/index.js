// import '@splidejs/splide/css/core';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import './index.scss';
import Header from '../../scripts/Header';
import Carousel from '../../scripts/Carousel';

const header = document.querySelector('.header');
const commentsCarousel = document.querySelector('.comments__carousel');

new Header(header).init();
new Carousel(commentsCarousel).init();
