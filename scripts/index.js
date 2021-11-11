setTimeout(() => {

  var projectionBounds = {
    23031: {
      bounds: [-1500000.0, 3500000.0, 4045984.0, 9045984.0],
      defs: '+proj=utm +zone=31 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    23032: {
      bounds: [-2000000.0, 3500000.0, 3545984.0, 9045984.0],
      defs: '+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    23033: {
      bounds: [-2500000.0, 3500000.0, 3045984.0, 9045984.0],
      defs: '+proj=utm +zone=33 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    23034: {
      bounds: [-3000000.0, 3500000.0, 2545984.0, 9045984.0],
      defs: '+proj=utm +zone=34 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    23035: {
      bounds: [-3500000.0, 3500000.0, 2045984.0, 9045984.0],
      defs: '+proj=utm +zone=35 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    23036: {
      bounds: [-4000000.0, 3500000.0, 1545984.0, 9045984.0],
      defs: '+proj=utm +zone=36 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    25831: {
      bounds: [-1500000.0, 3500000.0, 4045984.0, 9045984.0],
      defs: '+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
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
    25834: {
      bounds: [-3000000.0, 3500000.0, 2545984.0, 9045984.0],
      defs: '+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    25835: {
      bounds: [-3500000.0, 3500000.0, 2045984.0, 9045984.0],
      defs: '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    25836: {
      bounds: [-4000000.0, 3500000.0, 1545984.0, 9045984.0],
      defs: '+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    },
    32631: {
      bounds: [-1500000.0, 3500000.0, 4045984.0, 9045984.0],
      defs: '+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs',
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
    },
    32634: {
      bounds: [-3000000.0, 3500000.0, 2545984.0, 9045984.0],
      defs: '+proj=utm +zone=34 +datum=WGS84 +units=m +no_defs',
      unit: 'm'
    },
    32635: {
      bounds: [-3500000.0, 3500000.0, 2045984.0, 9045984.0],
      defs: '+proj=utm +zone=35 +datum=WGS84 +units=m +no_defs',
      unit: 'm'
    },
    32636: {
      bounds: [-4000000.0, 3500000.0, 1545984.0, 9045984.0],
      defs: '+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs',
      unit: 'm'
    },
    4326: {
      bounds: [-180, -90, 180, 90],
      defs: '+proj=longlat +datum=WGS84 +no_defs',
      unit: 'degrees'
    },
    3857: {
      bounds: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
      defs: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
      unit: 'm'
    },
    900913: {
      bounds: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
      defs: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
      unit: 'm'
    },
    54009: {
      bounds: [-18000000.0, -9000000.0, 18000000.0, 9000000.0],
      defs: '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
      unit: 'degrees'
    },
    3006: {
      bounds: [-1200000.0, 4700000.0, 2600000.0, 8500000.0],
      defs: '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      unit: 'm'
    }
  };

  var epsgCode = 32633;
  var projectionInfo = projectionBounds[epsgCode];

  // proj4.defs('EPSG:4326', projectionBounds[4326].defs);
  // proj4.defs('EPSG:3857', projectionBounds[3857].defs);
  proj4.defs(`EPSG:${epsgCode}`, projectionInfo.defs);

  ol.proj.proj4.register(proj4);

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
  
  var map = new ol.Map({
    controls: ol.control.defaults(),
    layers: [
      // new ol.layer.Tile({
      //   source: new ol.source.OSM(),
      // }),
      new ol.layer.Tile({
        opacity: 1,
        extent: projectionInfo.bounds,
        source: new ol.source.WMTS({
            url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?',
            layer: 'egk',
            attributions: 'Bakgrunnskart fra: <a href=\'https://www.kartverket.no/kart\'>Kartverket</a>',
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
        }),
        visible: false
      }),
      new ol.layer.Tile({
        opacity: 1,
        extent: projectionInfo.bounds,
        source: new ol.source.WMTS({
            url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?',
            layer: 'norges_grunnkart',
            attributions: 'Bakgrunnskart fra: <a href=\'https://www.kartverket.no/kart\'>Kartverket</a>',
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
        }),
        visible: true
      })
    ],
    target: 'olMap',
    view: new ol.View({
      center: ol.proj.fromLonLat([10.4029732232767, 63.44216038900488], `EPSG:${epsgCode}`),
      // center: [394000, 7200000],
      projection: `EPSG:${epsgCode}`,
      maxZoom: 18,
      zoom: 3
    })
  });
  
  var initialMoveend = () => {
      map.un('moveend', initialMoveend);
      document.getElementById('olMap').focus();
      document.getElementById('olMap').style.height = window.innerHeight + 'px';
      map.updateSize();
  };
  
  map.on('moveend', initialMoveend);
  // map.on('moveend', () => {
  //   setTimeout(() => {
  //     var coordinate = map.getView().getCenter();
  //     var lonlat = ol.proj.toLonLat(coordinate, `EPSG:${epsgCode}`);
  //     console.log(map.getView().getZoom(), map.getView().getCenter(), lonlat);
  //   }, 10);
  // });

  // map.on('click', function (evt) {
  //   const coordinate = evt.coordinate;
  //   const hdms = ol.proj.toLonLat(coordinate, `EPSG:${epsgCode}`);
  //   console.log(hdms);
  // });

  window.onresize = () => {
    document.getElementById('olMap').style.height = window.innerHeight + 'px';
    map.updateSize();
  };
  
}, 0);
