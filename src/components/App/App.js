import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBarContainer from "../../containers/SearchBarContainer";
import WeatherForecastContainer from "../../containers/WeatherForecastContainer";
import FavouritesListContainer from "../../containers/FavouritesListContainer";
import HistoryListContainer from "../../containers/HistoryListContainer";
import { ThemeColorSwitcher } from "../ThemeColorSwitcher";
import "../../styles/scss/main.scss";

class App extends Component {
    render() {
        const { themeColor } = this.props;

        return (
            <div className={`App ${themeColor}`}>
                <main className="main">
                    <div className="app-container">
                        <h1 className="main-title">Weather application</h1>
                        <ThemeColorSwitcher></ThemeColorSwitcher>
                        <SearchBarContainer></SearchBarContainer>
                        <WeatherForecastContainer></WeatherForecastContainer>
                        <div className="user-activity-wrap">
                            <FavouritesListContainer></FavouritesListContainer>
                            <HistoryListContainer></HistoryListContainer>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        themeColor: store.color.color
    };
};

export default connect(mapStateToProps)(App);
