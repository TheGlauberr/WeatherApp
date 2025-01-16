import { useEffect, useState } from "react";
import {useLocation } from "./getLocation";

export const useWeather = () =>{

  const {latitude,longitude,isLoading} = useLocation();
  const [weatherData, setweatherData] = useState(null)

  console.log(`latitude ${latitude}, longitude: ${longitude}, isLoading ${isLoading}`);
  
  useEffect(() => {
    const getWeatherInformation = async () => {
        try {
            const key = "b36e330a65d64d1f84003758251501";
            const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setweatherData(data);
            // console.log("Weather Data:", data);
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    };
    if (!isLoading && latitude && longitude) {
        // console.log("CONDITIONS MET");
        getWeatherInformation();
    }
}, [latitude, longitude, isLoading]); 

return { weatherData, isLoading };
}
