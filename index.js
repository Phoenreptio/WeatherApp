function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input"); 
  let apiKey = "f6fc8d6e97o4b220033t044a1041dfbf";
  let city = cityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then((response) => {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#current-temperature");
    temperatureElement.innerHTML = temperature;
    let cityElement = document.querySelector("#city-display");
    cityElement.innerHTML = response.data.city;
  });
}


let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let currentDate = new Date();
console.log(currentDate);
let currentDay = days[currentDate.getDay()];
let currentHours= currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;

document.getElementById("current-time").innerHTML = currentDay + " " + currentHours + ":" + currentMinutes


let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", showCity);