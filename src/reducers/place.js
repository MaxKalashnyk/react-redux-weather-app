export const initialState = {
    place: "Kyiv",
    isFavourite: false
};

export function placeReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PLACE":
            return { ...state, place: action.payload };
        default:
            return state;
    }
}
