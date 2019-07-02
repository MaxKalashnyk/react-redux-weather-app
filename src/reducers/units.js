const defaultUnit = localStorage.getItem("unit")
    ? JSON.parse(localStorage.getItem("unit"))
    : "Metric";

export const initialState = {
    unit: defaultUnit
};

export function unitsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_UNIT":
            localStorage.setItem("unit", JSON.stringify(action.payload));
            return { ...state, unit: action.payload };
        default:
            return state;
    }
}
