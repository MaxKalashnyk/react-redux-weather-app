import React from "react";
import { connect } from "react-redux";
import "./styles/scss/main.scss";

function App() {
    return (
        <div className="App">
            <main className="main">
                <div className="app-container">
                    <h1 className="main-title">Weather application</h1>
                    <div className="search-block">
                        <button className="add-to-favourite" />
                        <input
                            type="text"
                            className="main-search-input"
                            placeholder="Location"
                        />
                        <select className="temperature-units">
                            <option value="Celsius">°C</option>
                            <option value="Farengheit">°F</option>
                        </select>
                    </div>

                    <div className="search-results-container">
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
                                    <div className="weather-icon-current">
                                        Sunny
                                    </div>
                                </div>
                                <div className="forecast-item">
                                    <div className="forecast-item-temps">
                                        <div className="temp-min">-3°</div>
                                        <div className="temp-max">10°</div>
                                    </div>
                                    <div className="forecast-item-tempcurrent">
                                        3°
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="forecast-nearest-days">
                            <div className="forecast-nearest-day-item">
                                <h3 className="day-title">03/03</h3>
                                <div className="day-forecast-icon" />
                                <div className="day-forecast-temp">4°</div>
                                <div className="day-forecast-weather day-forecast-weather-sunny" />
                            </div>
                            <div className="forecast-nearest-day-item">
                                <h3 className="day-title">04/03</h3>
                                <div className="day-forecast-icon" />
                                <div className="day-forecast-temp">2°</div>
                                <div className="day-forecast-weather day-forecast-weather-thunder" />
                            </div>
                            <div className="forecast-nearest-day-item">
                                <h3 className="day-title">05/03</h3>
                                <div className="day-forecast-icon" />
                                <div className="day-forecast-temp">6°</div>
                                <div className="day-forecast-weather day-forecast-weather-cloudy" />
                            </div>
                            <div className="forecast-nearest-day-item">
                                <h3 className="day-title">06/03</h3>
                                <div className="day-forecast-icon" />
                                <div className="day-forecast-temp">7°</div>
                                <div className="day-forecast-weather day-forecast-weather-snow" />
                            </div>
                            <div className="forecast-nearest-day-item">
                                <h3 className="day-title">07/03</h3>
                                <div className="day-forecast-icon" />
                                <div className="day-forecast-temp">9°</div>
                                <div className="day-forecast-weather day-forecast-weather-rain" />
                            </div>
                        </div>
                    </div>

                    <div className="user-activity-wrap">
                        <div className="user-activity-item">
                            <div className="user-activity-header">
                                <h3 className="user-activity-title user-activity-title-fav">
                                    favourite
                                </h3>
                                <button className="remove-button" />
                            </div>
                            <div className="user-activity-content">
                                <ul className="user-activity-list">
                                    <li className="user-activity-list-item">
                                        Braga, PT
                                    </li>
                                    <li className="user-activity-list-item">
                                        Gdansk, PL
                                    </li>
                                    <li className="user-activity-list-item">
                                        Le Havre, FR
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="user-activity-item">
                            <div className="user-activity-header">
                                <h3 className="user-activity-title user-activity-title-history">
                                    recently viewed
                                </h3>
                                <button className="remove-button" />
                            </div>
                            <div className="user-activity-content">
                                <ul className="user-activity-list">
                                    <li className="user-activity-list-item">
                                        Dresden, DE
                                    </li>
                                    <li className="user-activity-list-item">
                                        Krakow, PL
                                    </li>
                                    <li className="user-activity-list-item">
                                        Oleksandriia, UA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = store => {
    console.log(store); // посмотрим, что же у нас в store?
    return {
        user: store.user
    };
};

export default connect(mapStateToProps)(App);
