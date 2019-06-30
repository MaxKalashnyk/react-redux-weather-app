import React, { Component } from "react";
import PropTypes from "prop-types";

export class FavouritesListItem extends Component {
    render() {
        return (
            <li
                className="user-activity-list-item"
                data-place={this.props.place}
            >
                {this.props.formattedPlace}
            </li>
        );
    }
}

export default FavouritesListItem;

FavouritesListItem.propTypes = {
    place: PropTypes.string.isRequired,
    formattedPlace: PropTypes.string.isRequired
};
