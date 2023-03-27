export const orderSum = () => {
    if (!document.querySelector('.order-content__option-content--additional')) return false;
    const items = document.querySelector('.order-content__option-content--additional').querySelectorAll('.additional-option');
    const priceAdditional = document.querySelector('.order-content__additional-price');
    let temp = 0;
    items.forEach(el => {
        temp += +el.querySelector('.additional-option__price').textContent.replace(/\s/g, "").slice(0, -1);
    });
    priceAdditional.textContent = `${temp.toLocaleString('ru-RU')} ₽`;
    orderSumCalc();
};

export const orderRemoveItem = () => {
    const container = document.querySelector('.order-content__option-content--additional');
    if (!container) return false;

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('additional-option__close') || e.target.closest('.additional-option__close')) {
            const item = e.target.closest('.additional-option');

            let temp = +document.querySelector('.order-content__additional-price').textContent.replace(/\s/g, '').replace('₽', '');;
            temp -= +item.querySelector('.additional-option__price').textContent.replace(/\s/g, "").slice(0, -1);
            document.querySelector('.order-content__additional-price').textContent = `${temp.toLocaleString('ru-RU')} ₽`;;
            orderSumCalc();
            item.remove();
        }
        if (container.querySelector('ul').children.length === 0) {
            container.closest('.order-content__option').remove();
        }
    })
};


function orderSumCalc() {
    const priceBased = document.querySelector('.order-content__based-price');
    const priceAdditional = document.querySelector('.order-content__additional-price');
    const priceFull = document.querySelector('.order-content__price-full');
    priceFull.textContent = `${(+priceBased.textContent.replace(/\s/g, "").slice(0, -1) + 
    +priceAdditional.textContent.replace(/\s/g, "").slice(0, -1)).toLocaleString('ru-RU')} ₽`;
}
