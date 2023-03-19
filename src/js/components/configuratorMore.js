const configuratorMore = () => {
    const btn = document.querySelector('.configurator-additional__more');
    const items = document.querySelectorAll('.configurator-additional__list .configurator-additional__item');
    let counter = 0;
    let increaseNumber = 3;
    items.forEach(item => {
        if (window.getComputedStyle(item).getPropertyValue('display') !== 'none') {
            counter++;
            console.log(item);
        }
    })
    btn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            increaseNumber = 2;
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

export default configuratorMore;
