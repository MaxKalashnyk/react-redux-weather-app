import React, { Component } from "react";
import { CurrentForecast } from "../CurrentForecast";
import { WeatherForecastItem } from "../WeatherForecastItem";
import uuid from "uuid";
import PropTypes from "prop-types";

export class WeatherForecast extends Component {
    createSortedList(list) {
        const hoursForecastList = [];
        const indexesList = [3, 11, 19, 27, 35];

        indexesList.forEach(item => {
            hoursForecastList.push(list[item]);
        });

        return hoursForecastList;
    }

    renderTemplate() {
        const { data, isFetching, error, place } = this.props;

        const renderCurrentForecast = () =>
            data ? (
                <CurrentForecast
                    forecastData={data ? data[0] : null}
                ></CurrentForecast>
            ) : (
                ""
            );

        const finalDaysForecastList = data
            ? this.createSortedList(data[1].list)
            : null;

        const weatherForecastItemsList = finalDaysForecastList
            ? finalDaysForecastList.map(item => {
                  return (
                      <WeatherForecastItem
                          forecastData={item}
                          place={place}
                          key={uuid.v4()}
                      ></WeatherForecastItem>
                  );
              })
            : "";

        if (error) {
            return <p className="error">Error!</p>;
        }

        if (isFetching) {
            return <p className="loading">Loading...</p>;
        } else {
            return (
                <div className="search-results-container">
                    {renderCurrentForecast()}
                    <div className="forecast-nearest-days">
                        {weatherForecastItemsList}
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
