import React, { Component } from "react";

export class CurrentForecast extends Component {
    render() {
        return (
            <div className="forecast-current">
                <div className="city-name">Gdansk, Poland</div>
                <div className="forecast-details">
                    <div className="forecast-item">
                        <div className="forecast-item-text forecast-item-text-day">
                            Saturday
                        </div>
                        <div className="forecast-item-text forecast-item-text-date">
                            02/03/2019
                        </div>
                        <div className="forecast-item-text forecast-item-text-wind">
                            5 m/s
                        </div>
                        <div className="forecast-item-text forecast-item-text-humidity">
                            <span className="humidity-icon" />
                            55%
                        </div>
                    </div>
                    <div className="forecast-item">
                        <div className="weather-icon-current">Sunny</div>
                    </div>
                    <div className="forecast-item">
                        <div className="forecast-item-temps">
                            <div className="temp-min">-3°</div>
                            <div className="temp-max">10°</div>
                        </div>
                        <div className="forecast-item-tempcurrent">3°</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentForecast;
