import enableScroll from "../modules/enableScroll";
import disableScroll from "../modules/disableScroll";

const increaseImage = () => {
    const popup = document.createElement('div');
    const popupContainer = document.createElement('div');
    const settingsModal = {
        modal: popup,
        container: popupContainer,
        isOpen: false,
        speed: 300,
        animation: 'fade'
    };
    popup.classList.add('popup-img');
    popupContainer.classList.add('popup-img__container');
    const popupImg = document.createElement('img');
    popup.appendChild(popupContainer);
    popupContainer.appendChild(popupImg);
    const elements = document.querySelectorAll('.increase-image');

    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const href = el.getAttribute('href'); 

            setTimeout(() => {
                open(settingsModal);
            }, 1);
           

            window.addEventListener('keydown', (e) => {
                if (e.keyCode == 27) {
                    close(settingsModal);
                }
            })
            document.body.appendChild(popup);
            popupImg.setAttribute('src', href);
        });
    })


    function open(settingsModal){
        if (!settingsModal.isOpen) {
            settingsModal.container.scrollTo(0, 0);
            settingsModal.modal.style.setProperty('--transition-time', `${settingsModal.speed / 1000}s`);
            settingsModal.modal.classList.add('is-open');
            document.body.style.scrollBehavior = 'auto';
            document.documentElement.style.scrollBehavior = 'auto';
            disableScroll();
            settingsModal.container.classList.add('popup-open');
            settingsModal.container.classList.add(settingsModal.animation);
            setTimeout(() => {
                settingsModal.container.classList.add('animate-open');
            }, settingsModal.speed);
            settingsModal.isOpen = true;
        }
    }
    function close(settingsModal){
        if (settingsModal.isOpen) {
            settingsModal.container.classList.remove('animate-open');
            settingsModal.container.classList.remove(settingsModal.animation);
            settingsModal.modal.classList.remove('is-open');
            settingsModal.container.classList.remove('open');
            enableScroll();
            document.body.style.scrollBehavior = 'auto';
            document.documentElement.style.scrollBehavior = 'auto';
            setTimeout(() => {
                popup.remove();
            }, settingsModal.speed);
            settingsModal.isOpen = false;
        }
    }
};


export default increaseImage;