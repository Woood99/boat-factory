import Swiper, {
    Navigation,
    Pagination,
    Thumbs,
    EffectFade
} from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, EffectFade]);


if (document.querySelector('.gallery--home .gallery__inner')) {
    const swiper = new Swiper('.gallery--home .gallery__inner', {
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
}

if (document.querySelector('.gallery--boat .gallery__inner')) {
    const swiper = new Swiper('.gallery--boat .gallery__inner', {
        slidesPerView: 1.25,
        spaceBetween: 13,
        autoHeight: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
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
