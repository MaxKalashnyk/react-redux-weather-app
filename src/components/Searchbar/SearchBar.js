import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.checkPlaceInHistoryList = this.checkPlaceInHistoryList.bind(this);
    }

    getDataStatusCode = data =>
        data.data ? data.data[0].cod.toString() : null;

    checkPlaceInHistoryList(place) {
        const currentHistoryList = this.props.historyList;
        const matchedItem = currentHistoryList.find(
            item => item.placeId === place.placeId
        );
        const { formatted_address, place_id } = place;

        if (!matchedItem) {
            const placeObj = {
                place: place.address_components[0].long_name,
                formattedPlace: formatted_address,
                placeId: place_id
            };
            currentHistoryList.push(placeObj);
            this.props.handleHistoryList(currentHistoryList);
        }
    }

    performSearch(place) {
        const formattedPlaceName = place.formatted_address.split(",")[0];
        this.props.place(formattedPlaceName);
        this.props.handleForecastData(formattedPlaceName);
        this.props.handleCurrentForecastData(null);

        // const { statusCode } = this.props;

        // console.log(this.props);

        // console.log(statusCode);

        // if (statusCode && statusCode === "200") {
        //     this.checkPlaceInHistoryList(place);
        // }

        this.checkPlaceInHistoryList(place);

        this.inputRef.current.refs.input.value = "";
        // console.log(this.props);
    }

    render() {
        // console.log(this.props);

        return (
            <div className="search-block">
                <button className="add-to-favourite" />
                <Autocomplete
                    className="main-search-input"
                    onPlaceSelected={this.performSearch.bind(this)}
                    autoFocus
                    ref={this.inputRef}
                />
                <select className="temperature-units">
                    <option value="Celsius">°C</option>
                    <option value="Farengheit">°F</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        historyList: store.historyList.data
    };
};

export default connect(mapStateToProps)(SearchBar);

SearchBar.propTypes = {
    handleForecastData: PropTypes.func.isRequired,
    handleCurrentForecastData: PropTypes.func.isRequired,
    handleHistoryList: PropTypes.func.isRequired,
    place: PropTypes.func
};
