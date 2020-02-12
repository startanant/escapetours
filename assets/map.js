//this file will generate map data
//call this function with latitude, longitude co-ordinates to insert map into the target div

//for example:
paris_lat = 2.35236;
paris_lng = 48.856461;
generate_map(paris_lat, paris_lng);

function generate_map(lat, lng) {
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([lat,lng]),
          zoom: 8
        })
    });
}

