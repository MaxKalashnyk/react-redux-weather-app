import React, { Component } from "react";
import { HistoryListItem } from "../HistoryListItem";

export class HistoryList extends Component {
    render() {
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
                        <HistoryListItem></HistoryListItem>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HistoryList;
