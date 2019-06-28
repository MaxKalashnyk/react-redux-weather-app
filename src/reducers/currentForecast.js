export const initialState = {
    currentForecastData: null
};

export function currentForecastReducer(state = initialState, action) {
    switch (action.type) {
        case "CURRENT_FORECAST":
            return { ...state, currentForecastData: action.payload };
        default:
            return state;
    }
}
