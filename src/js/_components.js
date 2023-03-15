import throttle from './modules/throttle';
import getHeaderHeight from './components/getHeaderHeight';
import headerFixed from './components/headerFixed';
import fixFullheight from './components/fixFullHeight'
import burgerMenu from './components/burger';
import spollers from "./components/spollers";
import validateForm from './components/validation';
import './components/map';
import sliderBreakpoint from './modules/sliderBreakpoint';
import './components/sliders';
import videoBlock from './components/video-block';
import './components/production-progress';
import './components/dynamicAdapt';
import './components/galleryPhoto';
import tabs from './modules/tabs';
import popup from './modules/popup';
import scrolling from './components/scrolling';
// import increaseImage from './components/increaseImage';
document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    headerFixed();

    // =======================================================

    const fixHeight = throttle(fixFullheight);
    const headerHeight = throttle(getHeaderHeight);
    fixHeight();
    headerHeight();
    window.addEventListener('resize', () => {
        fixHeight();
        headerHeight();
    });

    // =======================================================

    spollers();
    if (window.innerWidth <= 1024) tabs();

    // =======================================================

    validateForm();

    // =======================================================

    const heroHomeSliderOptions = {
        slidesPerView: 1.2,
        spaceBetween: 15,
        breakpoints: {
            577: {
                slidesPerView: 1.7,
            },
            750: {
                slidesPerView: 2.2,
            },
        }
    }
    const newsSliderOptions = {
        slidesPerView: 1.2,
        spaceBetween: 15,
        breakpoints: {
            577: {
                slidesPerView: 1.7,
            },
            750: {
                slidesPerView: 2.2,
            },
        }
    }
    sliderBreakpoint('.hero-home__list', 1150, heroHomeSliderOptions);
    sliderBreakpoint('.news__list', 1150, newsSliderOptions);

    // =======================================================

    videoBlock();

    // =======================================================

    const requestCall = new popup();

    // Ненужное
    // const maskMap = {
    //     'tur': "+\\90 999 999-9999",
    //     'usa': "+1 999 999-99-99",
    //     'ru': "+7 (999) 999-9999",
    // };

    // customSelect(maskMap);

    scrolling();
    // increaseImage();


})
