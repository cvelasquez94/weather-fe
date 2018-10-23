import React, { Component } from 'react'
import { connect } from 'react-redux';
import WeatherView from '../components/weather';
import Forecast from '../../forecast/containers/forecast';

class Weather extends Component {
    render() {
        const { weatherCurrent } = this.props;
        return (
            <div className="Weather">
                {weatherCurrent &&
                    <WeatherView {...weatherCurrent}/>
                }
                <Forecast />                
            </div>
        )
    }
}

export default connect(
    state => ({
        weatherCurrent: state.weatherCurrent
    })
)(Weather);