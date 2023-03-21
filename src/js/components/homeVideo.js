const homeVideo = () => {
    const desktop = document.querySelector('.hero-home-video__video--desktop');
    const mobile = document.querySelector('.hero-home-video__video--mobile');
    desktop.innerHTML = '';
    mobile.innerHTML = '';
    if (window.innerWidth <= 1024) {
        const source = document.createElement('source');
        source.setAttribute('type', 'video/mp4');
        source.setAttribute('src', mobile.dataset.src);
        mobile.insertAdjacentElement('beforeend', source);
    }
    if (window.innerWidth >= 1025) {
        const source = document.createElement('source');
        source.setAttribute('type', 'video/mp4');
        source.setAttribute('src', desktop.dataset.src);
        desktop.insertAdjacentElement('beforeend', source);
    }
}

export default homeVideo;
