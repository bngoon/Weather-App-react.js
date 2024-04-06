import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      setError("Please enter a city name");
      return;
    }

    document.body.style.backgroundImage = `url('https://source.unsplash.com/1440x1000/?${city}')`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setError("Error fetching weather data. Please try again.");
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
      {error && <p className="error">{error}</p>}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
