import { combineReducers } from "redux";
import { unitsReducer } from "./units";
import { placeReducer } from "./place";
import { themeColorReducer } from "./theme";
import { forecastReducer } from "./forecast";
import { currentForecastReducer } from "./currentForecast";
import { historyListReducer } from "./historyList";
import { favouritesListReducer } from "./favouritesList";

export const rootReducer = combineReducers({
    units: unitsReducer,
    place: placeReducer,
    color: themeColorReducer,
    forecastData: forecastReducer,
    currentForecastData: currentForecastReducer,
    historyList: historyListReducer,
    favouritesList: favouritesListReducer
});
