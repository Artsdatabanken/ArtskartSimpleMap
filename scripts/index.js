setTimeout(() => {

  var epsgCode = 32633;
  var artskartAppapiUrl = 'https://artskart.artsdatabanken.no/appapi/';
  var artskartUrl = 'https://artskart.artsdatabanken.no/app/';
  var defaultLayers = ['terreng_norgeskart', 'norges_grunnkart'];
  var taxonId = 0;

  var projectionBounds = {
    25832: {
      bounds: [-2000000.0, 3500000.0, 3545984.0, 9045984.0],
      defs: '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    25833: {
      bounds: [-2500000.0, 3500000.0, 3045984.0, 9045984.0],
      defs: '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    32632: {
      bounds: [-2000000.0, 3500000.0, 3545984.0, 9045984.0],
      defs: '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs',
      unit: 'm'
    },
    32633: {
      bounds: [-2500000.0, 3500000.0, 3045984.0, 9045984.0],
      defs: '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs',
      unit: 'm'
    }
  };

  var projectionInfo = projectionBounds[epsgCode];

  proj4.defs(`EPSG:${epsgCode}`, projectionInfo.defs);

  if (ol.proj.setProj4) {
    ol.proj.setProj4(proj4);
  } else {
    ol.proj.proj4.register(proj4);
  }

  var extent = projectionInfo.bounds;
  var projection = new ol.proj.Projection({
    code: `EPSG:${epsgCode}`,
    extent: extent,
    units: projectionInfo.unit
  });
  ol.proj.addProjection(projection);  
  
  var numZoomLevels = 18;
  var resolutions = new Array(numZoomLevels);
  var matrixIds = new Array(numZoomLevels);
  var size = ol.extent.getWidth(projection.getExtent()) / 256;
  
  for (var z = 0; z < numZoomLevels; ++z) {
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = `EPSG:${epsgCode}:${z}`;
  }

  var attribution = new ol.control.Attribution({
    collapsible: false,
  });

  var createLayer = (name, options) => {
    var tileOptions = Object.assign({
      opacity: 1,
      name: name,
      extent: projectionInfo.bounds,
      source: new ol.source.WMTS({
          url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?',
          layer: name,
          attributions: 'Bakgrunnskart fra: <a href=\'https://www.kartverket.no/kart\'>Kartverket</a>,',
          matrixSet: `EPSG:${epsgCode}`,
          format: 'image/png',
          projection: projection,
          tileGrid: new ol.tilegrid.WMTS({
            origin: ol.extent.getTopLeft(projection.getExtent()),
            resolutions: resolutions,
            matrixIds: matrixIds
        }),
        style: 'default',
        wrapX: true,
        crossOrigin: 'anonymous'
      })
    }, options);

    return new ol.layer.Tile(tileOptions);
  };
  
  var map = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    layers: [
      createLayer('norges_grunnkart'),
    ],
    target: 'olMap',
    view: new ol.View({
      center: ol.proj.fromLonLat([10.4029732232767, 63.44216038900488], `EPSG:${epsgCode}`),
      projection: `EPSG:${epsgCode}`,
      maxZoom: 18,
      zoom: 3
    })
  });

  var layerOptions = {
    'egk': undefined,
    'gebco': undefined,
    'terreng_norgeskart': undefined,
    'norges_grunnkart': { minZoom: 10, maxResolution: resolutions[10] },
    'sirkumpolar_stedsnavn': { minZoom: 10, maxResolution: resolutions[10] },
  };

  var getLayerOptions = (name) => {
    return layerOptions[name.toLocaleLowerCase()];
  };

  var showLayers = (layers) => {
    var mapLayers = map.getLayers().getArray();
    var addLayers = [];
    for (var key in layers) {
      // add layer
      addLayers.push(createLayer(layers[key], getLayerOptions(layers[key])));
    }

    mapLayers.forEach(layer => {
      map.removeLayer(layer);
    });

    addLayers.forEach(layer => {
      map.addLayer(layer);
    });

  };

  var getArtskartUrl = () => {
    if (taxonId  == 0) return '';

    var center = map.getView().getCenter();
    var zoom = map.getView().getZoom();
    var url = `Funndata i <a target='_blank' href='${artskartUrl}#map/${center[0]},${center[1]}/${parseInt(zoom)}/background/NiB/filter/{%22TaxonIds%22:[${taxonId}],%22IncludeSubTaxonIds%22:true%2C%22Found%22:[2]}'>Artskart</a>`;
    return url;
  };

  var displayFeaturesById = (name, id) => {
    var scientificUrl = `${artskartAppapiUrl}api/data/GetLocationsByScientificId`;
    fetch(`${scientificUrl}?${name}=${id}`)
    .then(response => response.json())
    .then(data => {

      var styleFunction = () => {
        return [new ol.style.Style({
          image: new ol.style.Circle({
            radius: 4,
            fill: new ol.style.Fill({
              color: 'rgba(255, 0, 0, 1)'
            }),
            stroke: new ol.style.Stroke({
              color: 'rgba(0, 0, 0, 0.9)',
              width: 2
            })
          })
        })];
      };
      var vectorSource = new ol.source.Vector({
        attributions: getArtskartUrl,
        features: new ol.format.GeoJSON().readFeatures(data),
      });
      var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: styleFunction,
      });
      map.addLayer(vectorLayer);
      var mapSize = map.getSize();
      var pad = parseInt(Math.min(mapSize[0], mapSize[1]) / 3);
      map.getView().fit(vectorSource.getExtent(), {
        padding: [pad, pad, pad, pad],
        nearest: false,
        size: map.getSize()
      });
    });
  };

  var checkInput = () => {
    var hasLayers = false;
    var params = new URLSearchParams(window.location.search)
    params.forEach((value, key) => {
      if (key.toLocaleLowerCase() == 'layers') {
        hasLayers = true;
        showLayers(value.split(','));
      } else if (key.toLocaleLowerCase() == 'scientificnameid') {
        displayFeaturesById(key, value);
      } else if (key.toLocaleLowerCase() == 'taxonid') {
        var taxonUrl = `${artskartAppapiUrl}api/data/GetTaxon/?id=`;
        fetch(`${taxonUrl}${value}`)
        .then(response => response.json())
        .then(data => {
          for(var key in data) {
            if (key.toLocaleLowerCase() == 'id') {
              taxonId = data[key];
              continue;
            }
            if (key.toLocaleLowerCase() !== 'scientificnameid') continue;
            displayFeaturesById(key, data[key]);
          }
        });
      }
    });
    if (hasLayers) return;
    showLayers(defaultLayers);
  };

  var initialMoveend = () => {
      map.un('moveend', initialMoveend);
      document.getElementById('olMap').focus();
      document.getElementById('olMap').style.height = window.innerHeight + 'px';
      map.updateSize();
      checkInput();
  };
  
  map.on('moveend', initialMoveend);

  window.onresize = () => {
    document.getElementById('olMap').style.height = window.innerHeight + 'px';
    map.updateSize();
  };
  
}, 0);
