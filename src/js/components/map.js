function removeControls(map) {
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
}


if (document.querySelector('.where-buy__map')) {
    function init() {
        let map = new ymaps.Map('map', {
            center: [55.85299910266709, 37.30898264843751],
            zoom: 9
        });
        let placemark1 = new ymaps.Placemark([55.7462485754695, 37.25679758984377], {
            balloonContent: `
            <div class="balloon">
                <div class="balloon__content">
                    <h4 class="balloon__title">
                        ООО Фабрика Лодок
                    </h4>
                    <p class="balloon__location">
                        г. Дмитров
                    </p>
                    <a href="mailto:info@fl-boats.ru" class="balloon__link">
                        info@fl-boats.ru
                    </a>
                    <a href="tel:79261449935" class="balloon__link">
                        +7 926 144-99-35
                    </a>
                </div>
            </div>
            `
        }, {
            iconLayout: "default#image",
            iconImageHref: "./img/placemark.svg",
            iconImageSize: [48, 48],
            iconImageOffset: [-17, -27]
        });
        removeControls(map);
        map.geoObjects.add(placemark1);
    }
    ymaps.ready(init);
}



if (document.querySelector('.contacts__map')){
    function init() {
        let map = new ymaps.Map('contacts-map', {
            center: [56.35873763447769,37.50274807026462],
            zoom: 16
        });
        let placemark1 = new ymaps.Placemark([56.35873763447769,37.50274807026462], {
            balloonContent: `
            <div class="balloon">
                <div class="balloon__content">
                    <h4 class="balloon__title">
                        ООО Фабрика Лодок
                    </h4>
                    <p class="balloon__location">
                        г. Дмитров
                    </p>
                    <a href="mailto:info@fl-boats.ru" class="balloon__link">
                        info@fl-boats.ru
                    </a>
                    <a href="tel:79261449935" class="balloon__link">
                        +7 926 144-99-35
                    </a>
                </div>
            </div>
            `
        }, {
            iconLayout: "default#image",
            iconImageHref: "./img/placemark.svg",
            iconImageSize: [32, 32],
            iconImageOffset: [-12, -25]
        });
        removeControls(map);
        map.geoObjects.add(placemark1);
    }
    ymaps.ready(init);
}