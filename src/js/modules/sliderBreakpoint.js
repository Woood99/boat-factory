import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);


/**
 * @param {string} containerSelector container selector (where class swiper)
 * @param {number} breakpoint screen resolution
 */
const sliderBreakpoint = (containerSelector, breakpoint) => {
    if (document.querySelector(containerSelector)) {
        const container = document.querySelectorAll(containerSelector);
        container.forEach(el => {
            if (el) {
                let swiper;

                function breakpointSlider() {
                    if (window.innerWidth <= breakpoint && el.dataset.sliderBreakpoint === 'false') {
                        swiper = new Swiper(el, {
                            slidesPerView: 1.2,
                            spaceBetween: 15,
                            autoHeight: true,
                            observer: true,
                            observeParents: true,
                            speed: 600,
                            breakpoints: {
                                577: {
                                    slidesPerView: 1.7,
                                },
                                750: {
                                    slidesPerView: 2.2,
                                },
                            }
                        })
                        el.dataset.sliderBreakpoint = 'true';
                    }
                    if (window.innerWidth > breakpoint) {
                        el.dataset.sliderBreakpoint = 'false';
                        if (el.classList.contains('swiper-initialized')) swiper.destroy();
                    }
                }
                breakpointSlider();
                window.addEventListener('resize', breakpointSlider);
            }
        })
    }
};
export default sliderBreakpoint;
