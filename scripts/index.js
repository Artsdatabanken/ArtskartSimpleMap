var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  target: 'olMap',
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});

var initialMoveend = () => {
    map.un("moveend", initialMoveend);
    document.getElementById('olMap').style.height = window.innerHeight + "px";
    map.updateSize();
};

map.on("moveend", initialMoveend);