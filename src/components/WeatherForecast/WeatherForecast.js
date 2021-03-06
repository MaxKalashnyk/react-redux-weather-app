import React, { Component } from "react";
import { CurrentForecast } from "../CurrentForecast";
import { WeatherForecastItem } from "../WeatherForecastItem";
import { generateID } from "../../utils/constants";
import { connect } from "react-redux";
import { updateCurrentForecast } from "../../actions/updateCurrentForecast";
import PropTypes from "prop-types";

export class WeatherForecast extends Component {
    renderTemplate() {
        const {
            data,
            isFetching,
            place,
            currentForecast,
            setCurrentForecast
        } = this.props;

        const { currentForecastData } = currentForecast;
        const dataCode = data ? +data[0].cod : null;

        const createSortedList = list => {
            const hoursForecastList = [];
            const indexesList = [3, 11, 19, 27, 35];

            indexesList.forEach(item => {
                hoursForecastList.push(list[item]);
            });

            return hoursForecastList;
        };

        const renderCurrentForecast = () => {
            if (data) {
                if (dataCode <= 400) {
                    return (
                        <CurrentForecast
                            forecastData={data ? data[0] : null}
                        ></CurrentForecast>
                    );
                } else if (dataCode === 404) {
                    return <p>City not found!</p>;
                } else {
                    return <p>There is some problems with API</p>;
                }
            } else {
                return "";
            }
        };

        const renderCurrentForecastFromItems = () => {
            const placeObj = {
                name: place
            };

            const finalCurrentForecastData = Object.assign(
                currentForecastData,
                placeObj
            );

            return finalCurrentForecastData ? (
                <CurrentForecast
                    forecastData={
                        finalCurrentForecastData
                            ? finalCurrentForecastData
                            : null
                    }
                ></CurrentForecast>
            ) : (
                ""
            );
        };

        const finalDaysForecastList =
            data && dataCode === 200 ? createSortedList(data[1].list) : null;

        const weatherForecastItemsList = finalDaysForecastList
            ? finalDaysForecastList.map(item => {
                  return (
                      <WeatherForecastItem
                          forecastData={item}
                          place={place.place}
                          key={generateID()}
                          updateHandler={setCurrentForecast}
                      ></WeatherForecastItem>
                  );
              })
            : "";

        const renderForecastDaysList = () => {
            if (data) {
                if (dataCode <= 400) {
                    return (
                        <div className="forecast-nearest-days">
                            {weatherForecastItemsList}
                        </div>
                    );
                } else {
                    return "";
                }
            } else {
                return "";
            }
        };

        if (isFetching) {
            return <p className="loading">Loading...</p>;
        } else {
            return (
                <div className="search-results-container">
                    {!currentForecastData
                        ? renderCurrentForecast()
                        : renderCurrentForecastFromItems()}
                    {renderForecastDaysList()}
                </div>
            );
        }
    }

    render() {
        return this.renderTemplate();
    }
}

const mapStateToProps = store => {
    return {
        currentForecast: store.currentForecastData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentForecast: data => dispatch(updateCurrentForecast(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherForecast);

WeatherForecast.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    error: PropTypes.string,
    isFetching: PropTypes.bool
};
