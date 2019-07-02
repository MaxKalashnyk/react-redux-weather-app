import React, { Component } from "react";
import { store } from "../../store/configureStore";
import { ActivityListItem } from "../ActivityListItem";
import { updateHistoryList } from "../../actions/updateHistoryList";
import { generateID } from "../../utils/constants";
import PropTypes from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";

export class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.historyListRef = React.createRef();
    }

    componentDidMount() {
        new PerfectScrollbar(this.historyListRef.current);
    }

    renderHistoryItemsList() {
        const historyList = this.props.historyList;
        return historyList.map(item => (
            <ActivityListItem
                place={item}
                key={generateID()}
            ></ActivityListItem>
        ));
    }

    clearHistoryList() {
        const emptyList = [];
        store.dispatch(updateHistoryList(emptyList));
    }

    render() {
        return (
            <div className="user-activity-item">
                <div className="user-activity-header">
                    <h3 className="user-activity-title user-activity-title-history">
                        recently viewed
                    </h3>
                    <button
                        className="remove-button"
                        onClick={this.clearHistoryList}
                    />
                </div>
                <div className="user-activity-content">
                    <ul
                        className="user-activity-list"
                        ref={this.historyListRef}
                    >
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
