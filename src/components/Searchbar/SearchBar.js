import React, { Component } from "react";

export class SearchBar extends Component {
    render() {
        return (
            <div className="search-block">
                <button className="add-to-favourite" />
                <input
                    type="text"
                    className="main-search-input"
                    placeholder="Location"
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
