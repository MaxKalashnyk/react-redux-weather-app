import React from "react";
import { connect } from "react-redux";
import { HistoryList } from "../components/HistoryList";

class HistoryListContainer extends React.Component {
    render() {
        const { historyList } = this.props;
        return <HistoryList historyList={historyList}></HistoryList>;
    }
}

const mapStateToProps = store => {
    return {
        historyList: store.historyList.data
    };
};

export default connect(mapStateToProps)(HistoryListContainer);
