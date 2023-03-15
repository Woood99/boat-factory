import disableScroll from '../modules/disableScroll';
import enableScroll from '../modules/enableScroll';

const burgerMenu = () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuItems = document.querySelectorAll('[data-menu-item]');
    if (burger && menu) {
        burger.addEventListener('click', () => {
            !menu.classList.contains('menu--active') ? openMenu() : closeMenu();
        });
    }
    if (menuItems.length) {
        menuItems.forEach(el => {
            el.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    function openMenu() {
        header.classList.add('header--active');
        burger.classList.add('burger--active');
        menu.classList.add('menu--active');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
    }

    function closeMenu() {
        header.classList.remove('header--active');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        enableScroll();
    }
}
export default burgerMenu;
