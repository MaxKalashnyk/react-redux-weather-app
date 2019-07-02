import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/configureStore";
import { handleForecastData } from "../../actions/forecastDataAction";
import { setPlace } from "../../actions/placeAction";
import PropTypes from "prop-types";

export class ActivityListItem extends Component {
    updateForecast() {
        const placeObj = this.props.place;
        const { place } = placeObj;
        store.dispatch(handleForecastData(place));
        this.checkPlaceInFavouritesList(placeObj);
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

            store.dispatch(setPlace(updatedFavPlaceObj));
        } else {
            const updatedFavPlaceObj = Object.assign(place, {
                isFavourite: false
            });
            store.dispatch(setPlace(updatedFavPlaceObj));
        }
    }

    render() {
        const { formattedPlace } = this.props.place;

        return (
            <li
                className="user-activity-list-item"
                onClick={this.updateForecast.bind(this)}
            >
                {formattedPlace}
            </li>
        );
    }
}

const mapStateToProps = store => {
    return {
        favouritesList: store.favouritesList.data
    };
};

export default connect(mapStateToProps)(ActivityListItem);

ActivityListItem.propTypes = {
    place: PropTypes.object.isRequired
};
