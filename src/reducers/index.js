import { combineReducers } from "redux";
import { unitsReducer } from "./units";
import { placeReducer } from "./place";
import { themeColorReducer } from "./theme";
import { forecastReducer } from "./forecast";
import { currentForecastReducer } from "./currentForecast";

export const rootReducer = combineReducers({
    units: unitsReducer,
    place: placeReducer,
    themeColor: themeColorReducer,
    forecastData: forecastReducer,
    currentForecastData: currentForecastReducer
});
