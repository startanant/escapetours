//this file will generate map data
//call this function with latitude, longitude co-ordinates to insert map into the target div


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
      center: ol.proj.fromLonLat([lat, lng]),
      zoom: 12
    })
  });
};

function displayRandomCity(event) {

  document.getElementById("map").innerHTML = "";

  result = p_getRandomCity(event.target.text);

  var city = result.city;

  generate_map(result.coord.lon, result.coord.lat);
  getConversionRate(sourceRate, result.countryCode);

  facts_country = result.country;
  switch (facts_country) {
    case 'USA':
      facts_country = 'united_states';
      break;
    case 'South Africa':
      facts_country = 'south_africa';
      break;
    case 'United Kingdom':
      facts_country = 'united_kingdom';
      break;
    case 'United Arab Emirates':
      facts_country = 'united_arab_emirates';
      break;
    case 'Hong Kong':
      facts_country = 'hong_kong';
      break;
    case 'New Zealand':
      facts_country = 'new_zealand';
      break;
    default:
      break;
  }
  facts_country = facts_country.toLowerCase();

  getFacts(facts_country);



  const apiKey = "1c2a3377eeea4d74ddc0ffd638238cfb"



  var queryURLForcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  $.ajax({
    url: queryURLForcast,
    method: "GET"
  }).then(function (forecastWeather) {

    var cityName = forecastWeather.city.name;

    var descriptionDayOne = forecastWeather.list[0].weather[0].description;
    var iconCode = forecastWeather.list[0].weather[0].icon;
    var iconUrlDayOne = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    var tempDayOne = forecastWeather.list[0].main.temp_min + " C";
    var humidityDayOne = forecastWeather.list[0].main.humidity;
    var windDayOne = forecastWeather.list[0].wind.speed;
    var dateDayOne = forecastWeather.list[0].dt_txt.slice(0, 10)



    var descriptionDayTwo = forecastWeather.list[8].weather[0].description;
    var iconCode = forecastWeather.list[8].weather[0].icon;
    var iconUrlDayTwo = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    var tempDayTwo = forecastWeather.list[8].main.temp_min + " C";
    var humidityDayTwo = forecastWeather.list[8].main.humidity;;
    var windDayTwo = forecastWeather.list[8].wind.speed;
    var dateDayTwo = forecastWeather.list[8].dt_txt.slice(0, 10)



    var descriptionDayThree = forecastWeather.list[16].weather[0].description;
    var iconCode = forecastWeather.list[16].weather[0].icon;
    var iconUrlDayThree = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    var tempDayThree = forecastWeather.list[16].main.temp_min + " C";
    var humidityDayThree = forecastWeather.list[16].main.humidity;;
    var windDayThree = forecastWeather.list[16].wind.speed;
    var dateDayThree = forecastWeather.list[16].dt_txt.slice(0, 10)



    var descriptionDayFour = forecastWeather.list[24].weather[0].description;
    var iconCode = forecastWeather.list[24].weather[0].icon;
    var iconUrlDayFour = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    var tempDayFour = forecastWeather.list[24].main.temp_min + " C";
    var humidityDayFour = forecastWeather.list[24].main.humidity;;
    var windDayFour = forecastWeather.list[24].wind.speed;
    var dateDayFour = forecastWeather.list[24].dt_txt.slice(0, 10);




    var upperCaseDesrp = descriptionDayOne.charAt(0).toUpperCase + descriptionDayOne.substr(1, descriptionDayOne.length);

    $('#city').text(cityName);

    $("#descripDayOne").text(descriptionDayOne);
    $("#iconDayOne").attr("src", iconUrlDayOne);
    $("#tempDayOne").text(tempDayOne);
    $("#humidityDayOne").text(humidityDayOne);
    $("#windDayOne").text(windDayOne);
    $("#dateDayOne").text(dateDayOne);

    $("#descripDayTwo").text(descriptionDayTwo);
    $("#iconDayTwo").attr("src", iconUrlDayTwo);
    $("#tempDayTwo").text(tempDayTwo);
    $("#humidityDayTwo").text(humidityDayTwo);
    $("#windDayTwo").text(windDayTwo);
    $("#dateDayTwo").text(dateDayTwo);

    $("#descripDayThree").text(descriptionDayThree);
    $("#iconDayThree").attr("src", iconUrlDayThree);
    $("#tempDayThree").text(tempDayThree);
    $("#humidityDayThree").text(humidityDayThree);
    $("#windDayThree").text(windDayThree);
    $("#dateDayThree").text(dateDayThree);

    $("#descripDayFour").text(descriptionDayFour);
    $("#iconDayFour").attr("src", iconUrlDayFour);
    $("#tempDayFour").text(tempDayFour);
    $("#humidityDayFour").text(humidityDayFour);
    $("#windDayFour").text(windDayFour);
    $("#dateDayFour").text(dateDayFour);

    $("img").css("width", "60px");
  });

}
