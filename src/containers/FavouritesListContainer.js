import React from "react";
import { connect } from "react-redux";
import { FavouritesList } from "../components/FavouritesList";

class FavouritesListContainer extends React.Component {
    render() {
        const { favouritesList } = this.props;
        return (
            <FavouritesList favouritesList={favouritesList}></FavouritesList>
        );
    }
}

const mapStateToProps = store => {
    return {
        favouritesList: store.favouritesList.data
    };
};

export default connect(mapStateToProps)(FavouritesListContainer);
