import React, { Component } from "react";
import { CurrentForecast } from "../CurrentForecast";
import { WeatherForecastItem } from "../WeatherForecastItem";

export class WeatherForecast extends Component {
    render() {
        return (
            <div className="search-results-container">
                <CurrentForecast></CurrentForecast>
                <div className="forecast-nearest-days">
                    <WeatherForecastItem></WeatherForecastItem>
                </div>
            </div>
        );
    }
}

export default WeatherForecast;
