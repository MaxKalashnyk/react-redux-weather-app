import React, { Component } from "react";
import { store } from "../../store/configureStore";
import { ActivityListItem } from "../ActivityListItem";
import { updateFavouritesList } from "../../actions/updateFavouritesList";
import { generateID } from "../../utils/constants";
import PropTypes from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";

export class FavouritesList extends Component {
    constructor(props) {
        super(props);
        this.favouritesListRef = React.createRef();
    }

    componentDidMount() {
        new PerfectScrollbar(this.favouritesListRef.current);
    }

    renderFavouritesList() {
        const { favouritesList } = this.props;

        return favouritesList.map(item => (
            <ActivityListItem
                place={item}
                key={generateID()}
            ></ActivityListItem>
        ));
    }

    clearFavouritesList() {
        const emptyList = [];
        store.dispatch(updateFavouritesList(emptyList));
    }

    render() {
        return (
            <div className="user-activity-item">
                <div className="user-activity-header">
                    <h3 className="user-activity-title user-activity-title-fav">
                        favourite
                    </h3>
                    <button
                        className="remove-button"
                        onClick={this.clearFavouritesList}
                    />
                </div>
                <div className="user-activity-content">
                    <ul
                        className="user-activity-list"
                        ref={this.favouritesListRef}
                    >
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
