import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);


/**
 * @param {string} containerSelector container selector (where class swiper)
 * @param {number} breakpoint screen resolution
 */
const sliderBreakpoint = (containerSelector, breakpoint, options) => {
    if (document.querySelector(containerSelector)) {
        const container = document.querySelectorAll(containerSelector);
        container.forEach(el => {
            if (el) {
                let swiper;

                function breakpointSlider() {
                    if (window.innerWidth <= breakpoint && el.dataset.sliderBreakpoint === 'false') {
                        swiper = new Swiper(el, {
                            slidesPerView: options.slidesPerView,
                            spaceBetween: options.spaceBetween,
                            autoHeight: true,
                            observer: true,
                            observeParents: true,
                            speed: 600,
                            breakpoints: options.breakpoints,
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
