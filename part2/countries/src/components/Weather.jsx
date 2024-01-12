import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

export const Weather = ({ capital }) => {
    const [weatherData, setWeatherData] = useState(null)
    
    const fetchData = async () => {
        await axios
                .get(`${API_URL}/weather?q=${capital}&appid=${API_KEY}`)
                .then(response => {
                    setWeatherData(response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            {weatherData ? (
                <div>
                    <div className="capital-name">
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    </div>
                    <div className="weather-icon">
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt={weatherData.weather[0].description}
                        />
                    </div>
                        <div className="weather-status">
                        <p>Temperature: {Math.floor(weatherData.main.temp - 273.15)} {'\u00b0'}C</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                        <p>Feels like: {Math.floor(weatherData.main.feels_like-273.15)} {'\u00b0'}C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Pressure: {weatherData.main.pressure} Pa</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            ):(
                <div>
                    <h3>Loading weather data...</h3>
                </div>
            )}
        </div>
    )
}