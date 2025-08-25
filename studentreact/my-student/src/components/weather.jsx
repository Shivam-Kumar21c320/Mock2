import React, { useEffect, useState } from 'react';
import './WeatherComponent.css'; // Import the CSS file

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7186/WeatherForecast')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather Forecast</h2>
      <ul className="weather-list">
        {weatherData.map((item, index) => (
          <li key={index} className="weather-item">
            <span className="weather-date">{item.date}</span>
            <span className="weather-temp">
              {item.temperatureC}°C / {item.temperatureF}°F
            </span>
            <span className="weather-summary">{item.summary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherComponent;