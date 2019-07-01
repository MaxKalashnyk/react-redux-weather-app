import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/configureStore";
import { setThemeColor } from "../../actions/themeColorAction";
import uuid from "uuid";
import "./ThemeColorSwitcher.scss";

export class ThemeColorSwitcher extends Component {
    changeColorThemeHandler({ target }) {
        const { value } = target;
        store.dispatch(setThemeColor(value));
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

export default connect()(ThemeColorSwitcher);
