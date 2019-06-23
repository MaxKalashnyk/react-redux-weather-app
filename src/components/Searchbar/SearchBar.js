import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";

export class SearchBar extends Component {
    performSearch(place) {
        console.log(place);
    }

    render() {
        return (
            <div className="search-block">
                <button className="add-to-favourite" />
                <Autocomplete
                    className="main-search-input"
                    onPlaceSelected={this.performSearch}
                    autoFocus
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
