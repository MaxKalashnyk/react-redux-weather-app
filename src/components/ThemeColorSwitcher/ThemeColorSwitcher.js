import React, { Component } from "react";
import uuid from "uuid";
import "./ThemeColorSwitcher.scss";
import PropTypes from "prop-types";

export class ThemeColorSwitcher extends Component {
    changeColorThemeHandler({ target }) {
        const { value } = target;
        this.props.handleThemeColorChange(value);
    }

    renderTemplate() {
        const colorsList = ["dark", "blue", "yellow"];
        // console.log(this.props);

        return colorsList.map(color => {
            return (
                <div className="color-switcher__item" key={uuid.v4()}>
                    <label className="color-switcher-label">
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            className="color-switcher-input hidden-input"
                            onChange={this.changeColorThemeHandler.bind(this)}
                            // {...(color === "Dark" ? { "defaultChecked" } : {})}
                        />
                        <span className="color-switcher-name">{color}</span>
                    </label>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="color-switcher">
                <p>Choose color theme: </p>
                {this.renderTemplate()}
            </div>
        );
    }
}

export default ThemeColorSwitcher;

ThemeColorSwitcher.propTypes = {
    handleThemeColorChange: PropTypes.func.isRequired,
    color: PropTypes.string
};
