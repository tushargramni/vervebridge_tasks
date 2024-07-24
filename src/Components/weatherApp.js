import React, { useState } from "react";
import locationIcon from "../Icons/location.svg";
import searchIcon from "../Icons/search.svg";
import sunlocation from "../Icons/sun.svg";
import "../App.css";

export default function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const api_key = "2BMTTMMRPH3GUDVK5FQZSBJ5H";

  const fetchData = async () => {
    if (!location) return;

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${api_key}&contentType=json`
      );
      const data = await response.json();
      setWeatherData(data.days);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getLocation = async (position) => {
    const { latitude, longitude } = position.coords;
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=${api_key}&contentType=json`
      );
      const data = await response.json();
      setWeatherData(data.days);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const failedToGet = () => {
    console.log("Failed to get location");
  };

  const handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
  };

  return (
    <div>
      <div className="currentLocation" onClick={handleGeolocation}>
        <img src={locationIcon} alt="location" />
      </div>
      <div className="rain">
        {Array.from({ length: 100 }, (_, index) => (
          <div className="lines" key={index}></div>
        ))}
      </div>
      <div className="sun">
        <img src={sunlocation} alt="sun.svg" />
      </div>

      <div className="container">
        <h1>Let's check weather</h1>
        <div className="input-box">
          <input
            type="text"
            className="input"
            placeholder="Enter location"
            spellCheck="true"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="logo" id="searchIcon" onClick={fetchData}>
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        <div className="details">
          {weatherData.map((day, index) => (
            <div className="day" key={index}>
              <p>Date: {day.datetime}</p>
              <p>Temperature: {day.temp}°C</p>
              <p>Conditions: {day.conditions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
