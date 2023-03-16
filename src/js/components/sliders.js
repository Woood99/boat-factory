import Swiper, {
    Navigation,
    Pagination,
    Thumbs,
    EffectFade
} from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, EffectFade]);




const galleryHomeSlider = document.querySelectorAll('.gallery--home');
if (galleryHomeSlider) {
    galleryHomeSlider.forEach(el => {
        const section = el;
        const slider = section.querySelector('.gallery__inner');
        const swiper = new Swiper(slider, {
            slidesPerView: 1.25,
            spaceBetween: 13,
            autoHeight: true,
            observer: true,
            observeParents: true,
            centeredSlides: true,
            loop: true,
            speed: 600,
            navigation: {
                nextEl: slider.closest('.gallery--home').querySelector('.nav-primary-arrow--next'),
                prevEl: slider.closest('.gallery--home').querySelector('.nav-primary-arrow--prev'),
            },
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
    })
}
const gallerySlider = document.querySelectorAll('.gallery-slider');
if (gallerySlider) {
    gallerySlider.forEach(el => {
        const section = el;
        const slider = section.querySelector('.gallery__inner');
        const swiper = new Swiper(slider, {
            slidesPerView: 1.25,
            spaceBetween: 13,
            autoHeight: true,
            observer: true,
            observeParents: true,
            centeredSlides: true,
            loop: true,
            loopedSlides: 50,
            speed: 600,
            navigation: {
                nextEl: slider.closest('.gallery-slider').querySelector('.nav-primary-arrow--next'),
                prevEl: slider.closest('.gallery-slider').querySelector('.nav-primary-arrow--prev'),
            },
            breakpoints: {
                569: {
                    slidesPerView: 1.9,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                    autoHeight: false,
                },
                1400: {
                    slidesPerView: 3.2,
                    autoHeight: false,
                },
            }
        })
    })
}


const aboutCompanySlider = document.querySelectorAll('.company-hero__slider');
if (aboutCompanySlider) {
    aboutCompanySlider.forEach(el => {
        const swiper = new Swiper(el, {
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            loopedSlides: 50,
            speed: 600,
            pagination: {
                el: '.company-hero__pagination',
                clickable: true,
            },
        })
    })
}




if (document.querySelector('.boat-hero')) {
    const container = document.querySelector('.boat-hero');
    const nav = container.querySelector('.boat-hero__nav');
    const body = container.querySelector('.boat-hero__body');
    let navSlider = new Swiper(nav, {
        slidesPerView: 2.5,
        spaceBetween: 12,
        observer: true,
        observeParents: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            569: {
                slidesPerView: 3,
            }
        },
    });
    let bodySlider = new Swiper(body, {
        spaceBetween: 50,
        observer: true,
        observeParents: true,
        effect: 'fade',
        thumbs: {
            swiper: navSlider,
        },
    })
}
