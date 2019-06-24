import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchBar } from "../components/Searchbar";
import { WeatherForecast } from "../components/WeatherForecast";
import { UserActions } from "../components/UserActions";
import { setPlace } from "../actions/placeAction";
import { handleForecastData } from "../actions/forecastDataAction";
import "../styles/scss/main.scss";

class App extends Component {
    render() {
        const {
            setPlaceAction,
            getForecastDataAction,
            forecastData,
            place
        } = this.props;

        // console.log(this.props);

        return (
            <div className="App">
                <main className="main">
                    <div className="app-container">
                        <h1 className="main-title">Weather application</h1>
                        <SearchBar
                            handleForecastData={getForecastDataAction}
                            place={setPlaceAction}
                        ></SearchBar>
                        <WeatherForecast
                            data={forecastData.data}
                            error={forecastData.error}
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
        // color: store.color,
        forecastData: store.forecastData,
        place: store.place.place
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlaceAction: place => dispatch(setPlace(place)),
        getForecastDataAction: city => dispatch(handleForecastData(city))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
