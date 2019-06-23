import {
    REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAIL
} from "../actions/forecastDataAction";

export const initialState = {
    data: null,
    isFetching: false,
    error: ""
};

export function forecastReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST:
            return { ...state, isFetching: true, error: "" };
        case REQUEST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.message
            };
        default:
            return state;
    }
}
