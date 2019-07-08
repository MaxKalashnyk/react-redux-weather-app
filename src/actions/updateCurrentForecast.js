export const CURRENT_FORECAST = "CURRENT_FORECAST";

export const updateCurrentForecast = data => ({
    type: CURRENT_FORECAST,
    payload: data
});
