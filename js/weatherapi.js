// Populate the page with weather data from the highlighted temple.
let lat = document.querySelector('#latitude').innerHTML;
let lon = document.querySelector('#longitude').innerHTML;

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=6f1295d458b9a2c5209776b7aa937528`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    currentWeather(jsObject);
    fetchForecast(jsObject);
  });

function currentWeather(weatherData) {
  const temp = weatherData.current.temp.toFixed(0);
  const speed = weatherData.current.wind_speed;
  const description = weatherData.current.weather[0].description;
  const imgURL = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`;
  const humidity = weatherData.current.humidity;
  
  try {
    const weather_alert = weatherData.alerts[0].description;
    alert(weather_alert);
  } catch (error) {
  }
  
  
  document.querySelector('#temp').textContent = temp;
  document.querySelector('#speed').textContent = speed;
  document.querySelector('#weatherIcon').setAttribute('src', imgURL);
  document.querySelector('#weatherIcon').setAttribute('alt', description);
  document.querySelector('#weather-description').textContent = description;
  document.querySelector('#humidity').textContent = humidity;
  

  if (temp <= 50 && speed > 3) {
    const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;F`;
  } else {
    document.querySelector("#windchill").innerHTML = "N/A"
  }
};

function fetchForecast(weatherData) {
  let forecastList = document.querySelector('.weather-forecast')
  const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for(var i = 1; i < 4; i++){
    let milli = weatherData.daily[i].dt * 1000
    dateObject = new Date(milli);

    let div = document.querySelector(`#forecast${i}`);
    let day = document.querySelector(`#day-forecast${i}`);
    let icon = document.querySelector(`#weatherIcon-forecast${i}`);
    let temp = document.querySelector(`#temp-forecast${i}`);
    let wd = weekNames[dateObject.getDay()];
    let condition = document.querySelector(`#conditions-forecast${i}`);

    let imgURL = `https://openweathermap.org/img/wn/${weatherData.daily[i].weather[0].icon}.png`;
    let description = weatherData.daily[i].weather[0].description;
    day.innerHTML = wd;
    icon.setAttribute('src', imgURL);
    icon.setAttribute('alt', description);
    temp.innerHTML = `${weatherData.daily[i].temp.day.toFixed(0)}&#176; F`;
    condition.innerHTML = description;
  }
};