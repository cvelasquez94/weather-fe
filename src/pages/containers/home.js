import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
import Weather from '../../weather/components/weather';
import Card from '../../card/containers/card';

class Home extends Component {
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