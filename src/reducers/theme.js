export const initialState = {
    color: "dark"
};

export function themeColorReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_THEME_COLOR":
            return { ...state, color: action.payload };
        default:
            return state;
    }
}
