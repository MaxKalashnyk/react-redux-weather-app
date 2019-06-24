import { apiKey } from "../utils/constants";
import { currentWeaterURLString } from "../utils/constants";
import { weatherForecastURLString } from "../utils/constants";

export class HttpService {
    getWeatherURLS(url, city) {
        return `${url}${city}&appid=${apiKey}&units=metric`;
    }

    getWeatherData(city) {
        const urlsArray = [
            this.getWeatherURLS(currentWeaterURLString, city),
            this.getWeatherURLS(weatherForecastURLString, city)
        ];

        return Promise.all(urlsArray.map(u => fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        );
    }

    getForecast(url, city) {
        const requestURL = `${url}${city}&appid=${apiKey}&units=metric`;

        return fetch(requestURL)
            .then(response => response.json())
            .catch(error => console.error(error));
    }
}

export default HttpService;
