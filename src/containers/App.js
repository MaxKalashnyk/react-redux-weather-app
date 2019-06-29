import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchBar } from "../components/Searchbar";
import { WeatherForecast } from "../components/WeatherForecast";
import { UserActions } from "../components/UserActions";
import { ThemeColorSwitcher } from "../components/ThemeColorSwitcher";
import { setPlace } from "../actions/placeAction";
import { handleForecastData } from "../actions/forecastDataAction";
import { updateCurrentForecast } from "../actions/updateCurrentForecast";
import { setThemeColor } from "../actions/themeColorAction";
import "../styles/scss/main.scss";

class App extends Component {
    render() {
        const {
            setPlaceAction,
            getForecastDataAction,
            forecastData,
            place,
            setCurrentForecast,
            setThemeColor,
            themeColor
        } = this.props;

        // console.log(this.props);

        const themeColorClass = this.props.themeColor;

        return (
            <div className={`App ${themeColorClass}`}>
                <main className="main">
                    <div className="app-container">
                        <h1 className="main-title">Weather application</h1>
                        <ThemeColorSwitcher
                            handleThemeColorChange={setThemeColor}
                            color={themeColor}
                        ></ThemeColorSwitcher>
                        <SearchBar
                            handleForecastData={getForecastDataAction}
                            handleCurrentForecastData={setCurrentForecast}
                            place={setPlaceAction}
                        ></SearchBar>
                        <WeatherForecast
                            data={forecastData.data}
                            isFetching={forecastData.isFetching}
                            place={place}
                        ></WeatherForecast>
                        <UserActions></UserActions>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        // isFavourite: store.search.isFavourite,
        // unit: store.unit,
        themeColor: store.color.color,
        forecastData: store.forecastData,
        place: store.place.place
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlaceAction: place => dispatch(setPlace(place)),
        getForecastDataAction: city => dispatch(handleForecastData(city)),
        setCurrentForecast: data => dispatch(updateCurrentForecast(data)),
        setThemeColor: color => dispatch(setThemeColor(color))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
