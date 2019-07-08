import { UPDATE_FAVOURITES_LIST } from "../actions/updateFavouritesList";

const favouritesList = localStorage.getItem("favouritesList")
    ? JSON.parse(localStorage.getItem("favouritesList"))
    : [];

export const initialState = {
    data: favouritesList
};

export function favouritesListReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FAVOURITES_LIST:
            localStorage.setItem(
                "favouritesList",
                JSON.stringify(action.payload)
            );
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
