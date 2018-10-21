import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { store } from '../store';
import Home from './pages/containers/home';
import data from './api.json'
export default class App extends Component {
  render() {
    return (
        <Provider
            store={store}
        >
            <Home data={data}/>
        </Provider>
    )
  }
}
