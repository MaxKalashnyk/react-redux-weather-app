import React, { Component } from "react";
import { FavouritesListItem } from "../FavouritesListItem";
import uuid from "uuid";
import PropTypes from "prop-types";

export class FavouritesList extends Component {
    renderFavouritesList() {
        // console.log(this.props);
        const { favouritesList } = this.props;

        return favouritesList.map(item => (
            <FavouritesListItem
                place={item.place}
                formattedPlace={item.formattedPlace}
                key={uuid.v4()}
            ></FavouritesListItem>
        ));
    }

    render() {
        return (
            <div className="user-activity-item">
                <div className="user-activity-header">
                    <h3 className="user-activity-title user-activity-title-fav">
                        favourite
                    </h3>
                    <button className="remove-button" />
                </div>
                <div className="user-activity-content">
                    <ul className="user-activity-list">
                        {this.renderFavouritesList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FavouritesList;

FavouritesList.propTypes = {
    favouritesList: PropTypes.array.isRequired
};
