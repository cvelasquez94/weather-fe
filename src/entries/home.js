import React from 'react';
import ReactDOM from 'react-dom';
import data from '../api.json';
import Home from '../pages/containers/home';
import '../scss/app.scss'
const app = document.getElementById('app');
ReactDOM.render(<Home data={data} />, app)
