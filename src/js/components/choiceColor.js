const choiceColor = document.querySelectorAll('.choice-color');
choiceColor.forEach(choiceColor => {
    choiceColor.querySelectorAll('.choice-color__item').forEach(item => {
        item.querySelectorAll('.choice-color__input').forEach(input => {
            if (input.checked) {
                item.querySelector('.choice-color__selected').setAttribute('data-color', input.value);
            }
            input.addEventListener('change', (e) => {
                item.querySelector('.choice-color__selected').setAttribute('data-color', e.target.value);
            })
        });
    })
})