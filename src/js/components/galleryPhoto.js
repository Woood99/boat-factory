import lightGallery from 'lightgallery';

const galleries = document.querySelectorAll('.gallery-photo');
galleries.forEach(gallery => {
    lightGallery(gallery, {
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
    });
});