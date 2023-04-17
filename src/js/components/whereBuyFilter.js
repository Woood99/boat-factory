function whereBuyFilter() {
    const container = document.querySelector('.where-buy');
    if (!container) return;
    const btns = container.querySelectorAll('.where-buy__btn');
    const items = container.querySelectorAll('.address-item');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('where-buy__btn--all')) {
                btns.forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
                items.forEach(item => item.classList.remove('is-hidden'));
            } else {
                btns.forEach(el => el.classList.remove('active'));
                items.forEach(item => {
                    if (btn.dataset.id !== item.dataset.region) {
                        item.classList.add('is-hidden');
                        btn.classList.add('active');
                    } else {
                        item.classList.remove('is-hidden');
                    }
                });
            }
        });
    })
}

whereBuyFilter();
