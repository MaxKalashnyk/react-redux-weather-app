import React, { Component } from "react";
import { getDayFromDateString } from "../../utils/constants";
import { getcurrentDateString } from "../../utils/constants";
import { defineWindDirection } from "../../utils/constants";
import { convertPressure } from "../../utils/constants";
import { generateIconClass } from "../../utils/constants";
import { convertTemperatureUnits } from "../../utils/constants";
import { convertWindUnits } from "../../utils/constants";

import PropTypes from "prop-types";

export class CurrentForecast extends Component {
    renderTemplate() {
        const { name, dt, main, wind, weather } = this.props.forecastData;

        const setIconClassName = `weather-icon-current ${generateIconClass(
            weather[0].icon
        )}`;

        return (
            <div className="forecast-current">
                <div className="city-name">{name}</div>
                <div className="forecast-details">
                    <div className="forecast-item">
                        <div className="forecast-item-text forecast-item-text-day">
                            {getDayFromDateString(dt)}
                        </div>
                        <div className="forecast-item-text forecast-item-text-icon forecast-item-text-icon-date">
                            {getcurrentDateString(dt)}
                        </div>

                        <div className="forecast-item-text forecast-item-text-icon forecast-item-text-icon-pressure">
                            {`${convertPressure(main.pressure)} mm Hg`}
                        </div>
                        <div className="forecast-item-text forecast-item-text-icon forecast-item-text-icon-wind">
                            {`${convertWindUnits(
                                wind.speed
                            )}, ${defineWindDirection(wind.deg)}`}
                        </div>

                        <div className="forecast-item-text forecast-item-text-icon forecast-item-text-icon-humidity">
                            <span className="humidity-icon" />
                            {main.humidity} %
                        </div>
                    </div>
                    <div className="forecast-item">
                        <div className={setIconClassName}></div>
                        <div className="weather-icon-description">
                            {weather[0].description}
                        </div>
                    </div>
                    <div className="forecast-item">
                        <div className="forecast-item-temps">
                            <div className="temp-min">
                                {convertTemperatureUnits(main.temp_min, "C")}
                            </div>
                            <div className="temp-max">
                                {convertTemperatureUnits(main.temp_max, "C")}
                            </div>
                        </div>
                        <div className="forecast-item-tempcurrent">
                            {convertTemperatureUnits(main.temp, "C")}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return this.renderTemplate();
    }
}

export default CurrentForecast;

CurrentForecast.propTypes = {
    forecastData: PropTypes.object
};
