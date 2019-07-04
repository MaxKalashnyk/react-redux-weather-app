import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDateValue } from "../../utils/constants";
import { generateIconClass } from "../../utils/constants";
import { getDayFromDateString } from "../../utils/constants";
import { convertTemperatureUnits } from "../../utils/constants";
import PropTypes from "prop-types";

export class WeatherForecastItem extends Component {
    render() {
        const { forecastData, unit } = this.props;
        const setIconClassName = `day-forecast-weather ${generateIconClass(
            forecastData.weather[0].icon
        )}`;

        return (
            <div
                className="forecast-nearest-day-item"
                onClick={() => this.props.updateHandler(forecastData)}
            >
                <h3 className="day-title">
                    {formatDateValue(forecastData.dt_txt)}
                </h3>
                <div className="day-forecast-dayname">
                    {getDayFromDateString(forecastData.dt, "short")}
                </div>
                <div className="day-forecast-temp">
                    {convertTemperatureUnits(forecastData.main.temp, unit)}
                </div>
                <div className={setIconClassName} />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        unit: store.unit.unit
    };
};

export default connect(mapStateToProps)(WeatherForecastItem);

WeatherForecastItem.propTypes = {
    forecastData: PropTypes.object,
    place: PropTypes.string
};
