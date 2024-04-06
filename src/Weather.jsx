import React from 'react';

function Weather({ weatherData }) {
  return (
    <div>
      {weatherData && (
        <div className="weather">
          <h2 className="name">{weatherData.name}</h2>
          <p className="description">{weatherData.weather[0].description}</p>
          <img
            className="icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p className="tempF">{Math.round(weatherData.main.temp)}°F</p>
          <p className="humidity">humidity: {weatherData.main.humidity}%</p>
          <p className="wind">wind: {Math.round(weatherData.wind.speed)} mph</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
