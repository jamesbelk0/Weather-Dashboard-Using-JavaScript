// Const Global Variables
const key = '87e4dd356fec77ea01cd2c3d336cadc1'
const cityInputEl = document.getElementById('city-input');
const searchEl = document.getElementBtId('search-button');
const tempEl = document.getElementById('temperature');
const humidEl= document.getElementById('humidity');
const windEl = document.getElementById('wind-speed');
const uvindexEl = document.getElementBtId('UV-index');
const forecastEl = document.querySelectorAll('.forecast');

function getLocation() {
    const cityName = cityInputEl.value.trim()
    fetch(`http://api.openweathermap.org/geo/1.0/direct?=${cityName}&limit=&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        let lat = data[0].lat
        let lon = data[0].lon
        getWeather(lat,lon)
    })
};

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall>lat=${lat}&lon=${lon}&units=imperial&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dailyWeather(data.current)
        displayForecast(data.daily)
    })
};
