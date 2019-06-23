import React from "react";
import { connect } from "react-redux";
import { SearchBar } from "../components/Searchbar";
import { setPlace } from "../actions/placeAction";

class SearchBarContainer extends React.Component {
    render() {
        const { page, getPhotos } = this.props;
        return <SearchBar />;
    }
}

const mapStateToProps = store => {
    return {
        page: store.page
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: year => dispatch(getPhotos(year))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBarContainer);
