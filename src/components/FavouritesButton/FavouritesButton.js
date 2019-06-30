import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/configureStore";
import { updateFavouritesList } from "../../actions/updateFavouritesList";
import PropTypes from "prop-types";

export class FavouritesButton extends Component {
    checkPlaceInFavouritesList(place) {
        // console.log(this.props);

        const { favouritesList, updateButtonClass } = this.props;
        const matchedItem = favouritesList.find(
            item => item.placeId === place.placeId
        );

        if (!matchedItem) {
            const updatedFavPlaceObj = Object.assign(place, {
                isFavourite: true
            });
            updateButtonClass(updatedFavPlaceObj);
            place.isFavourite = undefined;
            favouritesList.push(place);
            const filteredList = [...favouritesList];
            store.dispatch(updateFavouritesList(filteredList));
        } else {
            const updatedFavPlaceObj = Object.assign(place, {
                isFavourite: false
            });

            const filteredList = favouritesList.filter(
                item => item.placeId !== place.placeId
            );
            store.dispatch(updateFavouritesList(filteredList));
            updateButtonClass(updatedFavPlaceObj);
        }
    }

    render() {
        const { place } = this.props;
        const { isFavourite } = place;
        const checkActiveClass = isFavourite ? "add-to-favourite-active" : "";

        return (
            <button
                className={`add-to-favourite ${checkActiveClass}`}
                onClick={() => this.checkPlaceInFavouritesList(place)}
            />
        );
    }
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        favouritesList: store.favouritesList.data,
        place: store.place
    };
};

export default connect(mapStateToProps)(FavouritesButton);

FavouritesButton.propTypes = {
    place: PropTypes.object,
    updateButtonClass: PropTypes.func.isRequired
};
