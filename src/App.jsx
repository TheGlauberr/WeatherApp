import { useEffect, useState } from "react";
import {useWeather } from "./helpers/getWeather"

useWeather
export const App = () => {
  const {weatherData, isLoading} = useWeather();
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    if (weatherData) {
      console.log(weatherData);
      setDisplayData({
        temperature: weatherData.current.temp_c,
        humidity: weatherData.current.humidity,
        icon: weatherData.current.condition.icon,
        condition: weatherData.current.condition.text,
        wind_kph: weatherData.current.wind_kph,
        lastUpdated: weatherData.current.last_updated,
        locationCountry: weatherData.location.country,
        locationCity: weatherData.location.name
      });
    }
  }, [weatherData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  

  return (
    <>
      <h1>Weather App</h1>
      {displayData ? (
        <div className="flex-container">
          <div className="outerBox">
          <div className="innerBox"> 
            <h2>{displayData.locationCountry}, {displayData.locationCity}</h2>
          </div>
          {/* <div className="innerBox"> 
            <p>{displayData.locationLatitude},{displayData.locationLongitud} </p>
          </div> */}
          <div className="innerBox">
            <img src={displayData.icon} alt={displayData.condition} />
          </div>
          <div className="innerBox"> 
            <p>Temperature: {displayData.temperature}°C</p>
          </div>
          <div className="innerBox">
            <p>Humidity: {displayData.humidity}%</p>
          </div>
          <div className="innerBox">
            <p>Humidity: {displayData.wind_kph} km/h</p>
          </div>
          <div className="innerBox">
            <p>Condition: {displayData.condition}</p>
           </div>
          <div className="innerBox">
            <p>Last Updated: {displayData.lastUpdated}</p>
          </div>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  )
}

