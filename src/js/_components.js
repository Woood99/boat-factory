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
import videoBlock from './modules/video-block';


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

    // =======================================================

    validateForm();

    // =======================================================

    sliderBreakpoint('.hero-home__list', 1150);

    // =======================================================

    videoBlock();


    // Ненужное
    // const maskMap = {
    //     'tur': "+\\90 999 999-9999",
    //     'usa': "+1 999 999-99-99",
    //     'ru': "+7 (999) 999-9999",
    // };

    // customSelect(maskMap);
})
