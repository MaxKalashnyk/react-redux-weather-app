import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../store/configureStore";
import { setThemeColor } from "../../actions/themeColorAction";
import { generateID } from "../../utils/constants";
import { colorsList } from "../../utils/constants";
import "./ThemeColorSwitcher.scss";

export class ThemeColorSwitcher extends Component {
    changeColorThemeHandler({ target }) {
        const { value } = target;
        store.dispatch(setThemeColor(value));
    }

    renderTemplate() {
        const { themeColor } = this.props;

        return colorsList.map(color => {
            return (
                <div className="color-switcher__item" key={generateID()}>
                    <label className="color-switcher-label">
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            className="color-switcher-input hidden-input"
                            onChange={this.changeColorThemeHandler.bind(this)}
                            checked={color === themeColor}
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

const mapStateToProps = store => {
    return {
        themeColor: store.color.color
    };
};

export default connect(mapStateToProps)(ThemeColorSwitcher);
