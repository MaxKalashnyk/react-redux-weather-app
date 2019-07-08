import { UPDATE_HISTORY_LIST } from "../actions/updateHistoryList";

const historyList = localStorage.getItem("historyList")
    ? JSON.parse(localStorage.getItem("historyList"))
    : [];

export const initialState = {
    data: historyList
};

export function historyListReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_HISTORY_LIST:
            localStorage.setItem("historyList", JSON.stringify(action.payload));
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
