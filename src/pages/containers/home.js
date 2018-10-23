import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeLayout from '../components/homeLayout';
import Weather from '../../weather/containers/weather';
import API from '../../../utils/api';
import Forecast from '../../forecast/containers/forecast';
import { getWeatherCurrent } from '../../actions';
class Home extends Component {
    async componentDidMount() {
        const weatherCurrent = await API.getWeatherCurrent();
        const forecastOfWeek = await API.getForecastOfWeek();
        // this.props.getWeatherCurrent(weatherCurrent)
        this.props.dispatch({
            type: 'GET_WEATHER_CURRENT',
            payload: {
                weatherCurrent
            }
        })
        this.props.dispatch({
            type: 'GET_FORECAST_OF_WEEK',
            payload: {
                forecastOfWeek
            }
        })
    }
    render() {
        const { forecastOfWeek } = this.props;
        return (
            <HomeLayout>
                <Weather />
                <Forecast forecastOfWeek={forecastOfWeek} />
            </HomeLayout>
        )
    }
}

export default connect(
    state => ({
        weatherCurrent: state.weatherCurrent,
        forecastOfWeek: state.forecastOfWeek
    })
)(Home);