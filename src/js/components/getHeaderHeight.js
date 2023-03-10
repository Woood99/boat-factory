function getHeaderHeight() {
    const header = document.querySelector('.header');
    if (header){
        document.querySelector(':root').style.setProperty('--header-height', `${header.offsetHeight}px`);
    }
}
export default getHeaderHeight;