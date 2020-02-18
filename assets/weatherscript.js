//setup the variables
//*******************************************************
const apiKey = "1c2a3377eeea4d74ddc0ffd638238cfb"
console.log(result);


var queryURLForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

$.ajax({
  url: queryURLForcast,
  method: "GET"
}).then(function (forecastWeather) {
  console.log(forecastWeather);
  var cityName = forecastWeather.city.name;

  var descriptionDayOne = forecastWeather.list[0].weather[0].description;
  var iconCode = forecastWeather.list[0].weather[0].icon;
  var iconUrlDayOne = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  var tempDayOne = forecastWeather.list[0].main.temp_min + " C";
  var humidityDayOne = forecastWeather.list[0].main.humidity;
  var windDayOne = forecastWeather.list[0].wind.speed;
  var dateDayOne = forecastWeather.list[0].dt_txt.slice(0, 10)
  // console.log(dateDayOne);
  // console.log(iconUrlDayOne);


  var descriptionDayTwo = forecastWeather.list[6].weather[0].description;
  var iconCode = forecastWeather.list[6].weather[0].icon;
  var iconUrlDayTwo = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  var tempDayTwo = forecastWeather.list[6].main.temp_min + " C";
  var humidityDayTwo = forecastWeather.list[6].main.humidity;;
  var windDayTwo = forecastWeather.list[6].wind.speed;
  var dateDayTwo = forecastWeather.list[6].dt_txt.slice(0, 10)
  // console.log(dateDayTwo);


  var descriptionDayThree = forecastWeather.list[14].weather[0].description;
  var iconCode = forecastWeather.list[14].weather[0].icon;
  var iconUrlDayThree = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  var tempDayThree = forecastWeather.list[14].main.temp_min + " C";
  var humidityDayThree = forecastWeather.list[14].main.humidity;;
  var windDayThree = forecastWeather.list[14].wind.speed;
  var dateDayThree = forecastWeather.list[14].dt_txt.slice(0, 10)
  // console.log(dateDayThree);


  var descriptionDayFour = forecastWeather.list[22].weather[0].description;
  var iconCode = forecastWeather.list[22].weather[0].icon;
  var iconUrlDayFour = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  var tempDayFour = forecastWeather.list[22].main.temp_min + " C";
  var humidityDayFour = forecastWeather.list[22].main.humidity;;
  var windDayFour = forecastWeather.list[22].wind.speed;
  var dateDayFour = forecastWeather.list[22].dt_txt.slice(0, 10)
  // console.log(dateDayFour);



  var upperCaseDesrp = descriptionDayOne.charAt(0).toUpperCase + descriptionDayOne.substr(1, descriptionDayOne.length);
  // console.log(upperCaseDesrp)
  $('#city').text(cityName);

  $("#descripDayOne").text(descriptionDayOne);
  $("#iconDayOne").attr("src", iconUrlDayOne);
  $("#tempDayOne").text(tempDayOne);
  $("#humidityDayOne").text(humidityDayOne)
  $("#windDayOne").text(windDayOne)
  $("#dateDayOne").text(dateDayOne)

  $("#descripDayTwo").text(descriptionDayTwo);
  $("#iconDayTwo").attr("src", iconUrlDayTwo);
  $("#tempDayTwo").text(tempDayTwo);
  $("#humidityDayTwo").text(humidityDayTwo)
  $("#windDayTwo").text(windDayTwo)
  $("#dateDayTwo").text(dateDayTwo)

  $("#descripDayThree").text(descriptionDayThree);
  $("#iconDayThree").attr("src", iconUrlDayThree);
  $("#tempDayThree").text(tempDayThree);
  $("#humidityDayThree").text(humidityDayThree)
  $("#windDayThree").text(windDayThree)
  $("#dateDayThree").text(dateDayThree)

  $("#descripDayFour").text(descriptionDayFour);
  $("#iconDayFour").attr("src", iconUrlDayFour);
  $("#tempDayFour").text(tempDayFour);
  $("#humidityDayFour").text(humidityDayFour)
  $("#windDayFour").text(windDayFour)
  $("#dateDayFour").text(dateDayFour)

  $("img").css("width", "60px")

});
