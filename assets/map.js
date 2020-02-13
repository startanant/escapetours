//this file will generate map data
//call this function with latitude, longitude co-ordinates to insert map into the target div

//for example:
// paris_lat = 2.35236;
// paris_lng = 48.856461;
// generate_map(paris_lat, paris_lng);

//let coord = p_getRandomCity('Europe');

// console.log(coord.city);
// console.log(coord.coord.lat, coord.coord.lon);

// generate_map(coord.coord.lon,coord.coord.lat);

function generate_map(lat, lng) {

    var openCycleMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
          attributions: [
            '© <a href="https://www.opencyclemap.org/">OpenCycleMap</a>'
          ],
          url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=5e9e2dd7d391443a8d532f3a3e09e811'
        })
      });

      var openSeaMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
          attributions: [
            '© <a href="http://www.openseamap.org/">OpenSeaMap</a>'
          ],
          opaque: false,
          url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'
        })
      });

    var map = new ol.Map({
        target: 'map',
        layers: [
          openCycleMapLayer,
          openSeaMapLayer
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([lat,lng]),
          zoom: 12
        })
    });
};

function displayRandomCity(event){
    document.getElementById("map").innerHTML = "";
    result = p_getRandomCity(event.target.text);
    generate_map(result.coord.lon,result.coord.lat);
    getConversionRate(sourceRate, result.countryCode);
}

