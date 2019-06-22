import React, { Component } from "react";

export class WeatherForecastItem extends Component {
    render() {
        return (
            <div className="forecast-nearest-day-item">
                <h3 className="day-title">03/03</h3>
                <div className="day-forecast-icon" />
                <div className="day-forecast-temp">4°</div>
                <div className="day-forecast-weather day-forecast-weather-sunny" />
            </div>
        );
    }
}

export default WeatherForecastItem;
