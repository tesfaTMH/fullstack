import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

const Weather = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const fetchData = () => {
        axios
            .get(`${API_URL}/weather?q=${city}&appid=${API_KEY}`)
            .then(response => {
                setWeatherData(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() =>{
        fetchData()
    }, [])

    const handleInputChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchData()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter name os city"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit">Get Weather</button>
            </form>

            {weatherData ? (
                <div>
                    <div className="city-name">
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    </div>
                    
                    <div className="icon-weather"> 
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt={weatherData.weather[0].description}
                        />
                    </div>
                    <div className="weather-status">
                        <p>Temperature: {weatherData.main.temp}</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                        <p>Feels like: {weatherData.main.feels_like}</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Pressure: {weatherData.main.pressure}</p>
                        <p>Wind Speed: {weatherData.wind.speed}m/s</p>
                    </div>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    )
}

export default Weather
