import React from 'react';
import './weather.css';
function Weather(props) {
    console.log(props)
    return (
        <div className="Weather">
            <h1 className="City">{props.data.name}</h1>
            <p> Temperatura: {props.data.main.temp} ºC</p>
            <p> Humedad: {props.data.main.humidity}%</p>
            <p> Max: {props.data.main.temp_max}</p>
            <p> Min: {props.data.main.temp_min}</p>
        </div>
    )
}

export default Weather;