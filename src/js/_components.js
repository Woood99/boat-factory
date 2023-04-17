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
import homeVideo from './components/homeVideo';
import galleryAlbumMore from './components/galleryAlbumMore';
import {
    configuratorMore,
    configuratorAddedAdditional,
    configuratorRemoveOrder
} from './components/configuratorActions';
import {
    orderRemoveItem,
    orderSum
} from './components/orderActions';
import './components/map';
import './components/sliders';
import './components/production-progress';
import './components/dynamicAdapt';
import './components/galleryPhoto';
import './components/choiceColor';
import './components/whereBuyFilter';
document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    headerFixed();
    fixFullheight();
    getHeaderHeight();
    spollers();
    validateForm();
    videoBlock();
    scrolling();
    homeVideo();
    if (window.innerWidth <= 1024) tabs();
    window.addEventListener('resize', () => {
        fixFullheight();
        getHeaderHeight();
        homeVideo();
        if (window.innerWidth <= 1024) tabs();
    });



    const slidersBreakpointOptions = {
        heroHome: {
            slidesPerView: 1.2,
            spaceBetween: 15,
            autoHeight: true,
            pagination: false,
            breakpoints: {
                577: {
                    slidesPerView: 1.7,
                },
                750: {
                    slidesPerView: 2.2,
                },
            }
        },
        news: {
            slidesPerView: 1.2,
            spaceBetween: 15,
            autoHeight: false,
            pagination: false,
            breakpoints: {
                577: {
                    slidesPerView: 1.7,
                },
                750: {
                    slidesPerView: 2.2,
                },
            }
        },
        orderImages: {
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: false,
            pagination: {
                el: '.order-images__pagination',
                clickable: true,
            },
        },
    }
    sliderBreakpoint('.hero-home__list', 1150, slidersBreakpointOptions.heroHome);
    sliderBreakpoint('.news__list', 1150, slidersBreakpointOptions.news);
    sliderBreakpoint('.order-images', 1150, slidersBreakpointOptions.orderImages);


    const selectPrimary = document.querySelectorAll('.select-primary');
    selectPrimary.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: '',
            position: 'bottom',
        })
    });


    const requestCall = new popup();

    configuratorMore();
    configuratorAddedAdditional();
    configuratorRemoveOrder();

    orderRemoveItem();
    orderSum();

    galleryAlbumMore();
})
