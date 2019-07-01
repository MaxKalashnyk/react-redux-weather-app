import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/configureStore";
import { handleForecastData } from "../../actions/forecastDataAction";
import { setPlace } from "../../actions/placeAction";
import PropTypes from "prop-types";

export class ActivityListItem extends Component {
    updateForecast({ target }) {
        const placeName = target.dataset.place;
        store.dispatch(handleForecastData(placeName));
        this.checkPlaceInFavouritesList(placeName);
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
        const { place } = this.props;

        return (
            <li
                className="user-activity-list-item"
                data-place={place}
                onClick={this.updateForecast.bind(this)}
            >
                {this.props.formattedPlace}
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
    place: PropTypes.string.isRequired,
    formattedPlace: PropTypes.string.isRequired
};
