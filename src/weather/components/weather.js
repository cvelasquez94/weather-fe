import React from 'react';
import './weather.css';
function Weather(props) {
    return (
        <div className="weather-container">
            <h1 className="city">{props.name}</h1>
            <div className="descriptions">
                <p> {props.dt_txt} </p>
                <p> Temperatura: {props.main.temp} ºC</p>
                <p> Humedad: {props.main.humidity}%</p>
                <p> Max: {props.main.temp_max}</p>
                <p> Min: {props.main.temp_min}</p>
            </div>
        </div>
    )
}

export default Weather;