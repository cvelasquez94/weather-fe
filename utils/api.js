const BASE_API = 'http://localhost:3000/v1';

class Api {
    async getCurrentWeather() {
        const query = await fetch(`${BASE_API}/current`);
        const data = await query.json();
        return data;
    }
}

export default new Api();