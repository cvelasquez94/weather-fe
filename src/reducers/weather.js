function weather(state = [], action) {
    switch (action.type) {
        case 'SET_WEATHER_CURRENT': {
            return {...state, ...action.payload}
        }
    }
}

export default weather;