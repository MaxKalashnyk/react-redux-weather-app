import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import PropTypes from "prop-types";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    performSearch(place) {
        console.log(place);
        const formattedPlaceName = place.formatted_address.split(",")[0];
        console.log(formattedPlaceName);
        // this.props.setPlace(formattedPlaceName);
        this.props.handleForecastData(formattedPlaceName);
        this.inputRef.current.refs.input.value = "";
    }

    render() {
        console.log(this.props);

        return (
            <div className="search-block">
                <button className="add-to-favourite" />
                <Autocomplete
                    className="main-search-input"
                    onPlaceSelected={this.performSearch.bind(this)}
                    autoFocus
                    ref={this.inputRef}
                />
                <select className="temperature-units">
                    <option value="Celsius">°C</option>
                    <option value="Farengheit">°F</option>
                </select>
            </div>
        );
    }
}

export default SearchBar;

SearchBar.propTypes = {
    handleForecastData: PropTypes.func.isRequired // добавили новое свойство в propTypes
};
