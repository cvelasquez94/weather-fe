import React, { Component } from 'react';
import WeatherView from '../../weather/components/weather';
import './forecast.css'
class Forecast extends Component {
  render() {
    return (
      <div>
        {
          this.props.forecastOfWeek && 
           <div  className="forecast">{
               this.props.forecastOfWeek.list.map((item) => {
                   return <WeatherView {...item} key={item.dt}/>
               })
            }</div>
        }
      </div>
    )
  }
}

export default Forecast;