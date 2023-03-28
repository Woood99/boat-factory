import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, 
// lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgZoom from 'lightgallery/plugins/zoom';
const galleries = document.querySelectorAll('.gallery-photo');
galleries.forEach(gallery => {
    lightGallery(gallery, {
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
        addClass: 'gallery-photo-popup gallery-primary',
        download: false,
    });
});

const galleryPhotoList = document.querySelectorAll('.gallery-photo-list');
galleryPhotoList.forEach(gallery => {
    lightGallery(gallery, {
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
        selector: '.photo-card__wrapper',
        addClass: 'gallery-primary',
        download: false,
    });
});


const productionCompositionGallery = document.querySelectorAll('.production-composition-gallery');
productionCompositionGallery.forEach(gallery => {
    lightGallery(gallery, {
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
        addClass: 'production-composition-gallery__wrapper gallery-primary',
        download: false,
    });
});


const galleryAlbum = document.querySelectorAll('#gallery-album-body');
galleryAlbum.forEach(gallery => {
    lightGallery(gallery, {
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
        download: false,
        addClass: 'gallery-album-body__wrapper gallery-primary',
    });
});
