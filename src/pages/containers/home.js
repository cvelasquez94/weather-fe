import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
import Weather from '../../weather/components/weather';
import Card from '../../card/containers/card';
import API from '../../../utils/api';

class Home extends Component {
    
    async componentDidMount() {
        const currentWeather = await API.getCurrentWeather();
        console.log('current', currentWeather)
    }
    render() {
        console.log(this.props.data)
        return (
            <HomeLayout>
                <Weather data={this.props.data}/>
                <Card />
            </HomeLayout>
        )
    }
}

export default Home;