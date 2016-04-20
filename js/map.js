ymaps.ready(function () {
  var
  customHHTMLLayout = ymaps.templateLayoutFactory.createClass('<div class=placemark></div>'),
  map = new ymaps.Map('map', {
    center: [59.93632276, 30.32133551],
    zoom: 16,
    controls: []
  }),
  placemark1 = new ymaps.Placemark(
    [59.93632276, 30.32115050], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'C:/dywork/6022-pink/img/icon-map.svg',
      iconImageSize: [36, 36],
      iconImageOffset: [-10, 0]
    })
    map.geoObjects.add(placemark1);
});
