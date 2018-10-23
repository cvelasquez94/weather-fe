function weather(state = [], action) {
    switch (action.type) {

        case 'GET_WEATHER_CURRENT': {
            return {...state, ...action.payload}
        }
        case 'GET_FORECAST_OF_WEEK': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default weather;