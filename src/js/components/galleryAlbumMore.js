const galleryAlbumMore = () => {
    const body = document.querySelector('.gallery-album__body');
    const btn = document.querySelector('.gallery-album__more');
    if (!(body && btn)) return false;
    const items = body.querySelectorAll('.gallery-album__item');
    btn.addEventListener('click', () => {
        items.forEach(item => {
            if (window.getComputedStyle(item).getPropertyValue('display') === 'none') {
                item.style.display = 'block';
            }
        })
        btn.remove();
    });
}

export default galleryAlbumMore;
