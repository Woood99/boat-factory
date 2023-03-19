import Choices from 'choices.js';

import getHeaderHeight from './components/getHeaderHeight';
import headerFixed from './components/headerFixed';
import fixFullheight from './components/fixFullHeight'
import burgerMenu from './components/burger';
import spollers from "./components/spollers";
import validateForm from './components/validation';
import videoBlock from './components/video-block';
import sliderBreakpoint from './modules/sliderBreakpoint';
import tabs from './modules/tabs';
import popup from './modules/popup';
import scrolling from './components/scrolling';

import './components/map';
import './components/sliders';
import './components/production-progress';
import './components/dynamicAdapt';
import './components/galleryPhoto';
import './components/choiceColor';

document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    headerFixed();
    fixFullheight();
    getHeaderHeight();
    spollers();
    validateForm();
    videoBlock();
    scrolling();
    if (window.innerWidth <= 1024) tabs();
    window.addEventListener('resize', () => {
        fixFullheight();
        getHeaderHeight();
        if (window.innerWidth <= 1024) tabs();
    });



    const heroHomeSliderOptions = {
        slidesPerView: 1.2,
        spaceBetween: 15,
        autoHeight: true,
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
        autoHeight: false,
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



    const selectPrimary = document.querySelectorAll('.select-primary');
    selectPrimary.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: '',
            position: 'bottom',
        })
    });


    const requestCall = new popup();
})
