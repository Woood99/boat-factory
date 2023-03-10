import throttle from './modules/throttle';
import getHeaderHeight from './components/getHeaderHeight';
import headerFixed from './components/headerFixed';
import fixFullheight from './components/fixFullHeight'
import burgerMenu from './components/burger';
import spollers from "./components/spollers";
import './components/map';


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
})
