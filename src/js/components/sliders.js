import { auto } from '@popperjs/core';
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);



const swiper = new Swiper('.gallery__inner', {
   slidesPerView: 1.25,
    spaceBetween: 13,
    autoHeight: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    loop: true,
    speed: 600,
    breakpoints: {
        450: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        577: {
            slidesPerView: 2.4,
            spaceBetween: 20,
            autoHeight: false,
        },
        769: {
            slidesPerView: 3.2,
            autoHeight: false,
        },
        1025: {
            slidesPerView: 4.1,
            autoHeight: false,
        },
    }
})
