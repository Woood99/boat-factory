const videoBlock = () => {
    const videos = document.querySelectorAll('.video-block');
    if (!videos) return;
    videos.forEach(video => {
        const btn = video.querySelector('.video-block__button');
        const content = video.querySelector('.video-block__video');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const contentHTML = `
                <iframe src="${btn.dataset.src}?autoplay=1&mute=1" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </iframe>
                `
            content.insertAdjacentHTML('beforeend', contentHTML);
        });
    })





    // $('.play_btn').on('click', function (e) {
    //     e.preventDefault();
    //     let $block = $('.video-block');

    //     $(this).hide();
    //     $block.find('img.poster').hide();
    //     $block.append('<iframe class="frameYouTube" src="https://www.youtube.com/embed/KtBLV-FF9Dk?autoplay=1&mute=1&start=25" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>');

    //     return false;
    // });


};


export default videoBlock;
