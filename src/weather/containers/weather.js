import React, { Component } from 'react'
import { connect } from 'react-redux';
import WeatherView from '../components/weather';
import '../components/weather.css';
import API from '../../../utils/api';
import CONSTANT from '../../api.json';

class Weather extends Component {
     changecity = async (e) => {
        const weatherCurrent = await API.getWeatherCurrent(e.target.value);
        this.props.dispatch({
            type: 'GET_WEATHER_CURRENT',
            payload: {
                weatherCurrent
            }
        })   
    }
    render() {
        const { weatherCurrent } = this.props;
        return (
            <div className="Weather">
                {weatherCurrent &&
                    <WeatherView {...weatherCurrent}/>
                }
                <select onChange={this.changecity}>
                  {
                    CONSTANT.map(item => {
                        return <option key={item.id} value={item.name}>{item.name}({item.country})</option>
                    })
                  }
                </select>
            </div>
        )
    }
}

export default connect(
    state => ({
        weatherCurrent: state.weatherCurrent
    })
)(Weather);