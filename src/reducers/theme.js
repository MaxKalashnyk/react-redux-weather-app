const defaultThemeColor = localStorage.getItem("themeColor")
    ? JSON.parse(localStorage.getItem("themeColor"))
    : "dark";

export const initialState = {
    color: defaultThemeColor
};

export function themeColorReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_THEME_COLOR":
            localStorage.setItem("themeColor", JSON.stringify(action.payload));
            return { ...state, color: action.payload };
        default:
            return state;
    }
}
