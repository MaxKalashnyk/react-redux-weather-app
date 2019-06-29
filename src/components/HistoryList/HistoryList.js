import React, { Component } from "react";
import { HistoryListItem } from "../HistoryListItem";
import uuid from "uuid";
import PropTypes from "prop-types";

export class HistoryList extends Component {
    renderHistoryItemsList() {
        const historyList = this.props.historyList;
        return historyList.map(item => (
            <HistoryListItem
                place={item.place}
                formattedPlace={item.formattedPlace}
                key={uuid.v4()}
            ></HistoryListItem>
        ));
    }

    render() {
        // console.log(this.props);

        return (
            <div className="user-activity-item">
                <div className="user-activity-header">
                    <h3 className="user-activity-title user-activity-title-history">
                        recently viewed
                    </h3>
                    <button className="remove-button" />
                </div>
                <div className="user-activity-content">
                    <ul className="user-activity-list">
                        {this.renderHistoryItemsList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default HistoryList;

HistoryList.propTypes = {
    historyList: PropTypes.array.isRequired
};
