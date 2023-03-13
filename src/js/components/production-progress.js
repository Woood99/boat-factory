const productionProgress = document.querySelector('.production-progress');
window.addEventListener('scroll', (e) => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const line = productionProgress.querySelector('.production-progress__line');
    const finish = productionProgress.querySelector('.production-progress__finish');
    const states = productionProgress.querySelectorAll('.state');
    const topOffset = line.getBoundingClientRect().top + window.pageYOffset;
    const topOffsetNegative = (~topOffset + 1) + headerHeight + 300;
    const scrolled = window.pageYOffset;

    if (scrolled > topOffsetNegative) line.style.setProperty('--height', `${topOffsetNegative + scrolled}px`);

    topOffsetNegative + scrolled > 0 ? states[0].classList.add('active') : states[0].classList.remove('active');
    topOffsetNegative + scrolled > 176 ? states[1].classList.add('active') : states[1].classList.remove('active');
    topOffsetNegative + scrolled > (176 * 2) ? states[2].classList.add('active') : states[2].classList.remove('active');
    topOffsetNegative + scrolled > (176 * 3) ? states[3].classList.add('active') : states[3].classList.remove('active');
    topOffsetNegative + scrolled > (176 * 4) ? states[4].classList.add('active') : states[4].classList.remove('active');
    topOffsetNegative + scrolled > (176 * 5) ? states[5].classList.add('active') : states[5].classList.remove('active');
    topOffsetNegative + scrolled > (176 * 5) ? states[5].classList.add('active') : states[5].classList.remove('active');
    topOffsetNegative + scrolled > (176 * 5) ? finish.classList.add('active') : finish.classList.remove('active');
})
