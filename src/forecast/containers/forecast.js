import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherView from '../../weather/components/weather';
class Forecast extends Component {
  render() {
    return (
      <div>
        {
          this.props.forecastOfWeek ? 
           <div  className="forecast">{
               this.props.forecastOfWeek.list.map((item) => {
                   return <WeatherView {...item} />
               })
            }</div>: <h1>test</h1>
        }
      </div>
    )
  }
}

export default Forecast;