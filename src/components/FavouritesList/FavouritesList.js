import React, { Component } from "react";
import { FavouritesListItem } from "../FavouritesListItem";

export class FavouritesList extends Component {
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
                        <FavouritesListItem></FavouritesListItem>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FavouritesList;
