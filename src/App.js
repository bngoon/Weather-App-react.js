import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "bc76c6c455a389e49273e3af747a45eb";

  const handleSubmit = (e) => {
    e.preventDefault();

    document.body.style.backgroundImage = `url('https://source.unsplash.com/1440x1000/?${city}')`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
      });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">🔎</button>
      </form>
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
