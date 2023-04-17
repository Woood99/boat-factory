function removeControls(map) {
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}


if (document.querySelector('.where-buy')) {
    const container = document.querySelector('.where-buy');
    const btns = container.querySelectorAll('.where-buy__btn');
    const items = container.querySelectorAll('.address-item');;

    function init() {
        let map = new ymaps.Map('map', {
            center: [55.85299910266709, 37.30898264843751],
            zoom: 5
        });
        items.forEach(item => {
            addPlacemark(item);
        });

        function addPlacemark(item) {
            const itemMap = {
                coord: item.dataset.coord.split(','),
                name: item.querySelector('.address-item__name').textContent,
                address: item.querySelector('.address-item__address').textContent,
                items: item.querySelector('.address-item__list').innerHTML,
            };
            let placemark = new ymaps.Placemark(itemMap.coord, {
                balloonContent: `
                <div class="balloon">
                    <div class="balloon__content">
                        <h4 class="balloon__title">
                           ${itemMap.name}
                        </h4>
                        <p class="balloon__location">
                            ${itemMap.address}
                        </p>
                        <ul class="balloon__list list-reset">
                            ${itemMap.items} 
                        </ul>
                    </div>
                </div>
                `
            }, {
                iconLayout: "default#image",
                iconImageHref: "./img/placemark.svg",
                iconImageSize: [48, 48],
                iconImageOffset: [-17, -27]
            });
            map.geoObjects.add(placemark);
        }

        removeControls(map);
    }
    ymaps.ready(init);
}



if (document.querySelector('.contacts__map')) {
    function init() {
        let map = new ymaps.Map('contacts-map', {
            center: [56.35873763447769, 37.50274807026462],
            zoom: 16
        });
        let placemark1 = new ymaps.Placemark([56.35873763447769, 37.50274807026462], {
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
