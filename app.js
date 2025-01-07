let weather = {
  apiKey: "d3fd379167ffb1424ae70a84ad9e4c9d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { country } = data.sys;
    const { icon, description } = data.weather[0];
    const { feels_like } = data.main;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { temp_max, temp_min } = data.main;
    document.querySelector("#city").innerText = "Clima em " + ( name + "," + " " + country );
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector("#feels-like").innerText =
      "Sensação Térmica: " + feels_like + "°C";
    document.querySelector("#temp-max").innerText =
      "Max-temp: " + temp_max + "°C";
    document.querySelector("#temp-min").innerText =
      "Min-temp: " + temp_min + "°C";
    document.querySelector("#temp").innerText = temp + "°C";
    document.querySelector("#humidity").innerText =
      "Humidade: " + humidity + "%";
    document.querySelector("#wind").innerText =
      "Velocidade do vento: " + speed + " km/h";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });



