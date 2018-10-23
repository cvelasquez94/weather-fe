export const GET_WEATHER_CURRENT = 'GET_WEATHER_CURRENT';
export function getWeatherCurrent(weatherCurrent) {
    return {type: GET_WEATHER_CURRENT, payload: {weatherCurrent}}
}