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

import Choices from 'choices.js';
import {
    _slideToggle
} from './support-modules/slide';

// import increaseImage from './components/increaseImage';
document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    headerFixed();

    // =======================================================

    fixFullheight();
    getHeaderHeight();
    if (window.innerWidth <= 1024) tabs();
    window.addEventListener('resize', () => {
        fixFullheight();
        getHeaderHeight();
        if (window.innerWidth <= 1024) tabs();
    });


    // =======================================================

    spollers();

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




    const selectPrimary = document.querySelectorAll('.select-primary');
    selectPrimary.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: '',
            position: 'bottom',
        })
    });





    // const selectColor = document.querySelectorAll('.select-color');
    // selectColor.forEach(el => {
    //     const choices = new Choices(el, {
    //         searchEnabled: false,
    //         itemSelectText: '',
    //         position: 'bottom',
    //         shouldSort: false,
    //         placeholder: true,
    //         classNames: {
    //             containerOuter: 'choices select-color-container',
    //         }
    //     })
    //     const defaultPlaceholder = el.closest('.select-color-container').querySelector('.choices__placeholder.choices__item--selectable').textContent;
    //     el.addEventListener('change', (e) => {
    //         el.closest('.select-color-container').setAttribute('data-color', e.target.value);
    //         el.closest('.select-color-container').querySelector('.choices__item.choices__item--selectable').textContent = defaultPlaceholder;
    //         console.log(defaultPlaceholder);
    //     })
    // });





    const choiceColor = document.querySelectorAll('.choice-color');
    choiceColor.forEach(container => {
        container.querySelectorAll('.choice-color__input').forEach(el => {
            if (el.checked){
                el.closest('.choice-color').querySelector('.choice-color__selected').setAttribute('data-color',el.value);
            }
            el.addEventListener('change',(e)=>{
                el.closest('.choice-color').querySelector('.choice-color__selected').setAttribute('data-color',e.target.value);
            })
       })
    });
})
