import React from "react";
import { connect } from "react-redux";
import { SearchBar } from "../components/Searchbar";
import { setPlace } from "../actions/place";
import { handleForecastData } from "../actions/forecastData";
import { updateCurrentForecast } from "../actions/updateCurrentForecast";
import { updateHistoryList } from "../actions/updateHistoryList";

class SearchBarContainer extends React.Component {
    render() {
        const {
            setPlaceAction,
            getForecastDataAction,
            setCurrentForecastAction,
            updateHistoryListAction
        } = this.props;
        return (
            <SearchBar
                handleForecastData={getForecastDataAction}
                handleCurrentForecastData={setCurrentForecastAction}
                handleHistoryList={updateHistoryListAction}
                place={setPlaceAction}
            ></SearchBar>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page
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
)(SearchBarContainer);
