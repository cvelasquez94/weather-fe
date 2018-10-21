import { createStore } from 'redux';
import reducer from './src/reducers/weather';

const store = createStore(reducer, {
    weatherCurrent: []
});

export { store };
