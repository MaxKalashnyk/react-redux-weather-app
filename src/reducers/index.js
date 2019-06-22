import { combineReducers } from "redux";
import { unitsReducer } from "./units";
import { searchReducer } from "./search";
import { themeColorReducer } from "./theme";

export const rootReducer = combineReducers({
    units: unitsReducer,
    search: searchReducer,
    themeColor: themeColorReducer
});
