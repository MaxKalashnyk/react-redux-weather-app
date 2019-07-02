import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchBar } from "../components/Searchbar";
import { WeatherForecast } from "../components/WeatherForecast";
import { HistoryList } from "../components/HistoryList";
import { FavouritesList } from "../components/FavouritesList";
import { ThemeColorSwitcher } from "../components/ThemeColorSwitcher";
import { setPlace } from "../actions/placeAction";
import { handleForecastData } from "../actions/forecastDataAction";
import { updateCurrentForecast } from "../actions/updateCurrentForecast";
import { updateHistoryList } from "../actions/updateHistoryList";
import "../styles/scss/main.scss";

class App extends Component {
    render() {
        const {
            setPlaceAction,
            getForecastDataAction,
            forecastData,
            place,
            setCurrentForecastAction,
            themeColor,
            updateHistoryListAction,
            historyList,
            favouritesList,
            unit
        } = this.props;

        // console.log(this.props);

        return (
            <div className={`App ${themeColor}`}>
                <main className="main">
                    <div className="app-container">
                        <h1 className="main-title">Weather application</h1>
                        <ThemeColorSwitcher></ThemeColorSwitcher>
                        <SearchBar
                            handleForecastData={getForecastDataAction}
                            handleCurrentForecastData={setCurrentForecastAction}
                            handleHistoryList={updateHistoryListAction}
                            place={setPlaceAction}
                        ></SearchBar>
                        <WeatherForecast
                            data={forecastData.data}
                            isFetching={forecastData.isFetching}
                            place={place}
                            unit={unit}
                        ></WeatherForecast>
                        <div className="user-activity-wrap">
                            <FavouritesList
                                favouritesList={favouritesList}
                            ></FavouritesList>
                            <HistoryList
                                historyList={historyList}
                            ></HistoryList>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        unit: store.unit.unit,
        themeColor: store.color.color,
        forecastData: store.forecastData,
        place: store.place.place,
        historyList: store.historyList.data,
        favouritesList: store.favouritesList.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlaceAction: place => dispatch(setPlace(place)),
        getForecastDataAction: city => dispatch(handleForecastData(city)),
        setCurrentForecastAction: data => dispatch(updateCurrentForecast(data)),
        updateHistoryListAction: historyList =>
            dispatch(updateHistoryList(historyList))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
