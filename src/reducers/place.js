export const initialState = {
    place: "Kyiv",
    placeId: "",
    formattedPlace: "",
    isFavourite: false
};

export function placeReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PLACE":
            return Object.assign({ ...state }, action.payload);
        default:
            return state;
    }
}
