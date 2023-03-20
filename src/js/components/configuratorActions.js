export const configuratorMore = () => {
    const btn = document.querySelector('.configurator-additional__more');
    const items = document.querySelectorAll('.configurator-additional__list .configurator-additional__item');
    if (!(btn && items)) return false;
    let counter = 0;
    let increaseNumber = items.length;
    items.forEach(item => {
        if (window.getComputedStyle(item).getPropertyValue('display') !== 'none') {
            counter++;
        }
    })
    btn.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            increaseNumber = 3;
        }
        counter += increaseNumber;
        const array = Array.from(document.querySelector('.configurator-additional__list').children);
        const visItems = array.slice(0, counter);
        visItems.forEach(el => el.classList.add('is-visible'));
        if (visItems.length === items.length) {
            btn.classList.add('hide');
        }
    });
};


export const configuratorAddedAdditional = () => {
    const container = document.querySelector('.configurator-order__more');
    if (!container) return false;
    const items = document.querySelectorAll('.configurator-additional__list .configurator-additional__item');
    const list = container.querySelector('.configurator-order__list');
    const title = container.querySelector('.configurator-order__more-title');
    items.forEach(item => {
        const btn = item.querySelector('.additional-card__status');
        btn.addEventListener('click', () => {
            if (!item.classList.contains('active-added')) {
                item.classList.add('active-added');
                const itemMap = {
                    title: item.querySelector('.additional-card__title').textContent,
                    price: item.querySelector('.additional-card__price').textContent,
                };
                const itemHTML = `
                <div class="configurator-order__item additional-option">
                    <div class="additional-option__icon">
                        <svg>
                            <use xlink:href="img/sprite.svg#check-mark"></use>
                        </svg>
                    </div>
                    <span class="additional-option__title">${itemMap.title}</span>
                    <span class="additional-option__price">${itemMap.price}</span>
                    <button type="button" class="btn btn-reset additional-option__close">
                        <svg>
                            <use xlink:href="img/sprite.svg#plus"></use>
                        </svg>
                    </button>
                </div>
                `;
                list.insertAdjacentHTML('beforeend', itemHTML);
                configuratorSum(itemMap.price.replace(/\s/g, "").slice(0, -1), 'add');

            }
            if (list.children.length >= 1) {
                container.classList.add('active-added');
                title.textContent = 'Дополнительные опции';
            }
        })
    });
};

export const configuratorRemoveOrder = () => {
    const itemsAdditional = document.querySelectorAll('.configurator-additional__list .configurator-additional__item');
    const list = document.querySelector('.configurator-order__list');
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('additional-option__close') || e.target.closest('.additional-option__close')) {
            const item = e.target.closest('.configurator-order__item');

            itemsAdditional.forEach(el => {
                if (el.querySelector('.additional-card__title').textContent === item.querySelector('.additional-option__title').textContent) {
                    el.classList.remove('active-added');
                }
            })
            configuratorSum(item.querySelector('.additional-option__price').textContent.replace(/\s/g, "").slice(0, -1), 'decrease');
            item.remove();
        }
        if (list.children.length === 0) {
            document.querySelector('.configurator-order__more').classList.remove('active-added');
            document.querySelector('.configurator-order__more-title').textContent = 'Дополнительные опции не выбраны';
        }
    })
}


function configuratorSum(price, operator) {
    const sum = +document.querySelector('.configurator-order__based-sum').textContent.replace(/\s/g, '').replace('₽', '');
    let temp = sum;
    if (operator === 'add') temp += +price;
    if (operator === 'decrease') temp -= +price;
    const result = `${temp.toLocaleString('ru-RU')} ₽`;
    document.querySelector('.configurator-order__based-sum').textContent = result;
}
