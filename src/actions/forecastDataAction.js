import { HttpService } from "../services/dataService";

export const REQUEST = "REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAIL = "REQUEST_FAIL";

export const handleForecastData = city => dispatch => {
    dispatch({
        type: REQUEST
    });

    const httpService = new HttpService();

    httpService
        .getWeatherData(city)
        .then(res => {
            const userInfo = res;
            dispatch({
                type: REQUEST_SUCCESS,
                payload: userInfo
            });
        })
        .catch(err => {
            dispatch({
                type: REQUEST_FAIL,
                payload: err,
                error: true
            });
        });
};
