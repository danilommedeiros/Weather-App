let weather = {
    "apiKey": "d3fd379167ffb1424ae70a84ad9e4c9d",
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
  displayWeather: function(data) {
      const { name } = data;
      const { icon, description } = data.weather;
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log("name,icon,description,temp,humidity,speed")
    }
};