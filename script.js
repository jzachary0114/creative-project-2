    //API: d7774707e55cd2e79df0d2f2fc20564a MMM Do, h a'
    document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=d7774707e55cd2e79df0d2f2fc20564a";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += '<h2> Current weather in ' + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + Math.round(json.main.temp) + " &deg;F</h2>"
      results += "<p>"
      
      for (let i=0; i < json.weather.length; i++) {
        results += '<h5>' + 'FEELS LIKE: ' + Math.round(json.main.feels_like) + '&deg;F';
	results += '<h5>' + json.weather[i].description.toUpperCase() + ' - WIND SPEED: ' + Math.round(json.wind.speed) + "mph";
	
	results += '<h5>' + 'HUMIDITY: ' + json.main.humidity + '%'; 
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      //results += "<p>" + json.city.sun.rise;
      document.getElementById("weatherResults").innerHTML = results;
    });
     const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=d7774707e55cd2e79df0d2f2fc20564a";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
      
	forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMM D, h a') + "</h2>";
	forecast += "<p>Temp: " + Math.round(json.list[i].main.temp) + "</p>";
	forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
	forecast += '<p> Cloud Coverage: ' + json.list[i].clouds.all + '%';
      }
      console.log(json)
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});