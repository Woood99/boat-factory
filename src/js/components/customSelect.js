import Inputmask from 'inputmask';

const customSelect = (maskMap) => {
    const classCode = '.custom-select__code';
    const classCountry = '.custom-select__country';
    const elements = document.querySelectorAll('.select-code');
    let isOpen = false;

    elements.forEach(el => {
        const select = el.querySelector('.select-code__select');
        const input = el.querySelector('.select-code__input');
        const header = select.querySelector('.custom-select__header');
        const headerCountry = header.querySelector(classCountry);
        const headerCode = header.querySelector(classCode);
        const items = select.querySelectorAll('.custom-select__item');
        header.addEventListener('click', () => {
            select.classList.contains('is-active') ? close() : open(select);
        });

        items.forEach(el => {
            el.addEventListener('click', () => {
                input.value = '';
                input.placeholder = el.querySelector(classCode).textContent;
                headerCountry.textContent = el.querySelector(classCountry).textContent;
                headerCode.textContent = el.querySelector(classCode).textContent;
                activationInputMask(el, maskMap, input);
                close();
            })
        });

        input.placeholder = header.querySelector(classCode).textContent;
        activationInputMask(header, maskMap, input);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.select-code') && isOpen) {
            close();
            isOpen = false;
        }
    })

    function activationInputMask(container, maskMap, input) {
        for (let key in maskMap) {
            if (key === container.querySelector(classCountry).textContent.toLowerCase()) {
                const im = new Inputmask(maskMap[key]);
                im.mask(input);
            }
        }
    }

    function open(target) {
        selectAllRemoveActive(elements);
        target.classList.add('is-active');
        isOpen = true;
    };

    function close() {
        selectAllRemoveActive(elements);
        isOpen = false;
    }

    function selectAllRemoveActive(elements) {
        elements.forEach(el => el.querySelector('.custom-select').classList.remove('is-active'));
    }
};

export default customSelect



// const maskMap = {
//     'tur': "+\\90 999 999-9999",
//     'usa': "+1 999 999-99-99",
//     'ru': "+7 (999) 999-9999",
// };

// customSelect(maskMap);
