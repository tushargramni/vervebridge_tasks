import React, { useState } from "react";
import locationIcon from "../Icons/location.svg";
import searchIcon from "../Icons/search.svg";
import sunlocation from "../Icons/sun.svg";
import temperature from "../Icons/temp.png";
import humidity from "../Icons/image.png";
import rain from "../Icons/rain.png";
import wind from "../Icons/wind.png";
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
      console.log(data);
      setWeatherData(data.days);
    } catch (error) {
      alert("Enter a Valid or proper name of a location");
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
        <img src={sunlocation} alt="sun" />
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
          <h2>Weather forecast details of 15 days</h2>
          {weatherData.map((day, index) => (
            <div className="day" key={index}>
              <p>Date: {day.datetime}</p>
              <div className="condi">
                <div className="temperature">
                  <img src={temperature} alt="" width={"32px"} />
                  Temperature:
                  <p>Feels like: {day.feelslike}°C</p>
                  <p>Max temp: {day.feelslikemax}°C</p>
                  <p>Min temp: {day.feelslikemin}°C</p>
                </div>
                <p className="humidity">
                  <img src={humidity} alt="" width={"32px"} />
                  Humidity:{day.humidity}
                </p>
                <p className="raining">
                  <img src={rain} alt="" width={"32px"} />
                  Conditions: {day.conditions}
                </p>
                <p className="wind">
                  <img src={wind} alt="" width={"32px"} />
                  Wind:
                  <p>Wind Dir: {day.winddir}</p>
                  <p>Wind Gust: {day.windgust}</p>
                  <p>Wind Speed: {day.windspeed}</p>
                </p>
              </div>
              <div className="hourly">
                <h2>Weather hourly Details</h2>
                {day.hours.map((hour, hourIndex) => (
                  <div key={hourIndex} className="hour">
                    <p>Time: {hour.datetime}</p>
                    <div className="condi-2">
                      <div className="temperature">
                        <img src={temperature} alt="" width={"32px"} />
                        Temperature:
                        <p>Feels like: {day.feelslike}°C</p>
                        <p>Max temp: {day.feelslikemax}°C</p>
                        <p>Min temp: {day.feelslikemin}°C</p>
                      </div>
                      <p className="humidity">
                        <img src={humidity} alt="" width={"32px"} />
                        Humidity:{day.humidity}
                      </p>
                      <p className="raining">
                        <img src={rain} alt="" width={"32px"} />
                        {day.conditions}
                      </p>
                      <p className="wind">
                        <img src={wind} alt="" width={"32px"} />
                        Wind:
                        <p>Wind Dir: {day.winddir}</p>
                        <p>Wind Gust: {day.windgust}</p>
                        <p>Wind Speed: {day.windspeed}</p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p>Description: {day.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
