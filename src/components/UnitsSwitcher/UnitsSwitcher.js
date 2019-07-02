import React, { Component } from "react";
import { store } from "../../store/configureStore";
import { setUnit } from "../../actions/unitAction";
import { generateID } from "../../utils/constants";
import { unitsList } from "../../utils/constants";

export class UnitsSwitcher extends Component {
    renderTemplateList() {
        return unitsList.map(({ name, degreesUnit }) => (
            <option value={name} key={generateID()}>
                {degreesUnit}
            </option>
        ));
    }

    switchUnit({ target }) {
        const { value } = target;
        store.dispatch(setUnit(value));
    }

    render() {
        return (
            <select className="temperature-units" onChange={this.switchUnit}>
                {this.renderTemplateList()}
            </select>
        );
    }
}

export default UnitsSwitcher;
