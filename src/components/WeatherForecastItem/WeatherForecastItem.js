import React, { Component } from "react";
import { formatDateValue } from "../../utils/constants";
import { generateIconClass } from "../../utils/constants";
import { getDayFromDateString } from "../../utils/constants";
import { convertTemperatureUnits } from "../../utils/constants";
import PropTypes from "prop-types";

export class WeatherForecastItem extends Component {
    render() {
        console.log("itemForecast", this.props);

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

WeatherForecastItem.propTypes = {
    forecastData: PropTypes.object,
    place: PropTypes.string
};
