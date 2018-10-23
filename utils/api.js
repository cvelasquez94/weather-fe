const BASE_API = 'http://localhost:5000/v1';

class Api {
    async getWeatherCurrent (city) {
        const query = await fetch(`${BASE_API}/current/${city ? city : ''}`);
        const data = await query.json();
        return data;
    };
    async getForecastOfWeek (city) {
        const query = await fetch(`${BASE_API}/forecast/${city ? city : ''}`);
        const data = await query.json();
        return data;
    };
}

export default new Api();