import Swiper, {
    Navigation,
    Pagination,
    Thumbs,
    EffectFade
} from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, EffectFade]);


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


const productionStages = document.querySelectorAll('.production-stages');
if (productionStages) {
    productionStages.forEach(el => {
        const section = el;
        const slider = section.querySelector('.production-stages-slider__inner');
        const swiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            speed: 600,
            navigation: {
                nextEl: slider.closest('.production-stages').querySelector('.nav-primary-arrow--next'),
                prevEl: slider.closest('.production-stages').querySelector('.nav-primary-arrow--prev'),
            },
        })

    })
}



const configuratorAdditional = document.querySelectorAll('.configurator-additional');
if (configuratorAdditional) {
    configuratorAdditional.forEach(el => {
        const container = el;
        const slider = container.querySelector('.configurator-additional__slider');
        const swiper = new Swiper(slider, {
            slidesPerView: 1.15,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            speed: 600,
            navigation: {
                nextEl: slider.closest('.configurator-additional').querySelector('.nav-primary-arrow--next'),
                prevEl: slider.closest('.configurator-additional').querySelector('.nav-primary-arrow--prev'),
            },
            breakpoints: {
                481: {
                    slidesPerView: 1.6,
                },
                769: {
                    slidesPerView: 2.6,
                    spaceBetween: 20,
                },
                1025: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                },
            }
        })

    })
}



const productionComposition = document.querySelectorAll('.production-composition-item__slider');
if (productionComposition) {
    productionComposition.forEach(el => {
        const swiper = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 40,
            observer: true,
            observeParents: true,
            loopedSlides: 50,
            speed: 600,
            pagination: {
                el: '.production-composition-item__pagination',
                clickable: true,
            },
        })
    })
}


const configuratorSlider = document.querySelectorAll('.configurator-content__slider');
if (configuratorSlider) {
    configuratorSlider.forEach(el => {
        const swiper = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 40,
            observer: true,
            observeParents: true,
            loopedSlides: 50,
            speed: 600,
            pagination: {
                el: '.configurator-content__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelector('.nav-secondary-arrow--next'),
                prevEl: el.querySelector('.nav-secondary-arrow--prev'),
            },
        })
    })
}
