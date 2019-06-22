import React, { Component } from "react";
import { HistoryList } from "../HistoryList";
import { FavouritesList } from "../FavouritesList";

export class UserActions extends Component {
    render() {
        return (
            <div className="user-activity-wrap">
                <FavouritesList></FavouritesList>
                <HistoryList></HistoryList>
            </div>
        );
    }
}

export default UserActions;
