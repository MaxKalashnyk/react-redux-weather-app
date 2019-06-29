import {
    REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAIL
} from "../actions/forecastDataAction";

export const initialState = {
    data: null,
    isFetching: false
};

export function forecastReducer(state = initialState, action) {

    switch (action.type) {
        case REQUEST:
            return { ...state, isFetching: true };
        case REQUEST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                data: null
            };
        default:
            return state;
    }
}
