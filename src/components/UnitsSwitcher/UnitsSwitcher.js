import React, { Component } from "react";

export class UnitsSwitcher extends Component {
    render() {
        return (
            <select className="temperature-units">
                <option value="Celsius">°C</option>
                <option value="Farengheit">°F</option>
            </select>
        );
    }
}

export default UnitsSwitcher;
