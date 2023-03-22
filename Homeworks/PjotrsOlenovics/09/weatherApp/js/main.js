const inputval = document.querySelector("#cityinput");
const addbtn = document.querySelector("#add");
const cityoutput = document.querySelector("#cityoutput");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");

const apik = "3045dd712ffe6e702e3245525ac7fa38";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function convertKelvinToCelsius(kelvin) {
  return (kelvin - 273).toFixed(1);
}

function showWeatherData(data) {
  cityoutput.textContent = data.name;
  description.textContent = data.weather[0].description;
  temp.textContent = `${convertKelvinToCelsius(data.main.temp)} °C`;
  wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
}

function fetchWeatherData() {
  const city = inputval.value;
  const url = `${apiUrl}?q=${city}&appid=${apik}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      showWeatherData(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

addbtn.addEventListener("click", fetchWeatherData);
