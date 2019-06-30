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
import { setThemeColor } from "../actions/themeColorAction";
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
            setThemeColorAction,
            themeColor,
            updateHistoryListAction,
            historyList,
            favouritesList
        } = this.props;

        // console.log(this.props);

        const themeColorClass = this.props.themeColor;

        return (
            <div className={`App ${themeColorClass}`}>
                <main className="main">
                    <div className="app-container">
                        <h1 className="main-title">Weather application</h1>
                        <ThemeColorSwitcher
                            handleThemeColorChange={setThemeColorAction}
                            color={themeColor}
                        ></ThemeColorSwitcher>
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
        // isFavourite: store.search.isFavourite,
        // unit: store.unit,
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
        setThemeColorAction: color => dispatch(setThemeColor(color)),
        updateHistoryListAction: historyList =>
            dispatch(updateHistoryList(historyList))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
