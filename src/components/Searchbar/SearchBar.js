import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import { connect } from "react-redux";
import { FavouritesButton } from "../FavouritesButton";
import { UnitsSwitcher } from "../UnitsSwitcher";
import { setPlace } from "../../actions/placeAction";
import PropTypes from "prop-types";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.checkPlaceInHistoryList = this.checkPlaceInHistoryList.bind(this);
        this.placeInfo = {};
    }

    getDataStatusCode = data =>
        data.data ? data.data[0].cod.toString() : null;

    checkPlaceInHistoryList(place) {
        const { historyList } = this.props;
        const matchedItem = historyList.find(
            item => item.placeId === place.placeId
        );

        if (!matchedItem) {
            historyList.push(place);
            this.props.handleHistoryList(historyList);
        }
    }

    checkPlaceInFavouritesList(place) {
        const { favouritesList } = this.props;
        const matchedItem = favouritesList.find(
            item => item.placeId === place.placeId
        );

        if (matchedItem) {
            const updatedFavPlaceObj = Object.assign(place, {
                isFavourite: true
            });

            this.props.place(updatedFavPlaceObj);
        } else {
            const updatedFavPlaceObj = Object.assign(place, {
                isFavourite: false
            });
            this.props.place(updatedFavPlaceObj);
        }
    }

    performSearch(place) {
        const formattedPlaceName = place.formatted_address.split(",")[0];
        this.props.handleForecastData(formattedPlaceName);
        this.props.handleCurrentForecastData(null);

        // const { statusCode } = this.props;

        // console.log(this.props);

        // console.log(statusCode);

        // if (statusCode && statusCode === "200") {
        //     this.checkPlaceInHistoryList(place);
        // }

        const { formatted_address, place_id } = place;

        const placeObj = {
            place: place.address_components[0].long_name,
            formattedPlace: formatted_address,
            placeId: place_id
        };

        this.checkPlaceInHistoryList(placeObj);
        this.checkPlaceInFavouritesList(placeObj);

        this.inputRef.current.refs.input.value = "";
        // console.log(this.props);
    }

    render() {

        const { setPlaceAction } = this.props;

        return (
            <div className="search-block">
                <FavouritesButton
                    place={this.placeInfo}
                    updateButtonClass={setPlaceAction}
                ></FavouritesButton>
                <Autocomplete
                    className="main-search-input"
                    onPlaceSelected={this.performSearch.bind(this)}
                    autoFocus
                    ref={this.inputRef}
                />
                <UnitsSwitcher></UnitsSwitcher>
            </div>
        );
    }
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        historyList: store.historyList.data,
        favouritesList: store.favouritesList.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlaceAction: place => dispatch(setPlace(place))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
    handleForecastData: PropTypes.func.isRequired,
    handleCurrentForecastData: PropTypes.func.isRequired,
    handleHistoryList: PropTypes.func.isRequired,
    place: PropTypes.func
};
