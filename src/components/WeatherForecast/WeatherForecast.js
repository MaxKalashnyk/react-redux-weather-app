import React, { Component } from "react";
import { CurrentForecast } from "../CurrentForecast";
import { WeatherForecastItem } from "../WeatherForecastItem";
import PropTypes from "prop-types";

export class WeatherForecast extends Component {
    renderTemplate() {
        const { data, isFetching, error } = this.props;
        if (error) {
            return <p className="error">Error!</p>;
        }
        if (isFetching) {
            return <p className="loading">Loading...</p>;
        } else {
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

    render() {
        return this.renderTemplate();
    }
}

export default WeatherForecast;

WeatherForecast.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    error: PropTypes.string,
    isFetching: PropTypes.bool
};
