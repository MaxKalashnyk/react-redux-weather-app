const pascalToMmHg = 0.75006;
const coefficientImperial = 2.2369;

export const currentWeaterURLString =
    "https://api.openweathermap.org/data/2.5/weather?q=";
export const weatherForecastURLString =
    "https://api.openweathermap.org/data/2.5/forecast?q=";
export const apiKey = "c1bfe9b98646ae15af74164518f99538";

export const scrollableBlockWrapClassFavourite = "user-activity-list-favourite";

export const scrollableBlockWrapClassHistory = "user-activity-list-history";

export const formatValue = value => (value ? Math.round(value) : "");

export const checkProperty = property => (property ? property : "");

export const getCurrentDate = () => {
    const currDate = new Date();
    const day = String(currDate.getDate()).padStart(2, "0");
    const month = String(currDate.getMonth() + 1).padStart(2, "0");
    const year = currDate.getFullYear();
    const finalDate = `${day}/${month}/${year}`;

    return finalDate;
};

export const getcurrentDateString = milliseconds => {
    if (!milliseconds) {
        return;
    }

    const date = new Date(milliseconds);
    return new Intl.DateTimeFormat("en-GB").format(date * 1000);
};

export const getCurrentDayName = () => {
    const currDate = new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const day = new Date(currDate);
    const dayName = days[day.getDay()];

    return dayName;
};

export const convertPressure = pressureValue => {
    if (!pressureValue) {
        return "";
    }

    return Math.round(pressureValue * pascalToMmHg);
};

export const defineWindDirection = degrees => {
    let windDirectionString = "";

    if (!degrees) {
        return "";
    } else {
        if (degrees <= 22.5 || (degrees > 337.5 && degrees <= 360)) {
            windDirectionString = "North";
        } else if (degrees > 22.5 && degrees < 67.5) {
            windDirectionString = "North-East";
        } else if (degrees > 67.5 && degrees < 112.5) {
            windDirectionString = "East";
        } else if (degrees > 112.5 && degrees < 157.5) {
            windDirectionString = "South-East";
        } else if (degrees > 157.5 && degrees < 202.5) {
            windDirectionString = "South";
        } else if (degrees > 202.5 && degrees < 247.5) {
            windDirectionString = "South-West";
        } else if (degrees > 247.5 && degrees < 292.5) {
            windDirectionString = "West";
        } else if (degrees > 292.5 && degrees < 337.5) {
            windDirectionString = "North-West";
        }

        return windDirectionString;
    }
};

export const formatDateValue = dateString => {
    if (!dateString) {
        return;
    }

    const firstStringPartArray = dateString.split(" ")[0].split("-");

    return `${firstStringPartArray[2]}/${firstStringPartArray[1]}`;
};

export const generateIconClass = iconString => {
    let finalIconClass = "";

    if (!iconString) {
        return;
    } else {
        if (iconString === "01d" || iconString === "01n") {
            finalIconClass = "day-forecast-weather-sunny";
        } else if (iconString === "02d" || iconString === "02n") {
            finalIconClass = "day-forecast-weather-cloudy-small";
        } else if (
            iconString === "03d" ||
            iconString === "04d" ||
            iconString === "50d" ||
            iconString === "03n" ||
            iconString === "04n" ||
            iconString === "50n"
        ) {
            finalIconClass = "day-forecast-weather-cloudy";
        } else if (iconString === "09d" || iconString === "09n") {
            finalIconClass = "day-forecast-weather-shower-rain";
        } else if (iconString === "10d" || iconString === "10n") {
            finalIconClass = "day-forecast-weather-rain";
        } else if (iconString === "11d" || iconString === "11n") {
            finalIconClass = "day-forecast-weather-thunder";
        } else if (iconString === "13d" || iconString === "13n") {
            finalIconClass = "day-forecast-weather-snow";
        } else {
            finalIconClass = "";
        }
    }

    return finalIconClass;
};

export const generateID = () => {
    return (
        "_" +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
};

export const colorsList = ["dark", "blue", "yellow"];

export const unitsList = [
    { name: "Metric", degreesUnit: "°C" },
    { name: "Imperial", degreesUnit: "°F" }
];

export const getDayFromDateString = (milliseconds, type = "long") => {
    return new Intl.DateTimeFormat("en-US", { weekday: type }).format(
        milliseconds * 1000
    );
};

export const convertTemperatureUnits = (value, units) => {
    if (!value) {
        return;
    }

    return units === "Metric"
        ? `${Math.round(value)} °C`
        : `${Math.round(value * 1.8 + 32)} °F`;
};

export const convertWindUnits = (value, units) => {
    if (!value) {
        return "";
    }

    return units === "Metric"
        ? `${value.toFixed(1)} m/s`
        : `${(value * coefficientImperial).toFixed(1)} mph`;
};

export const checkResponse = response => {
    if (response.data.status === "ok") {
        return true;
    } else if (response.data.message) {
        const message = response.data.message.split("_").join(" ");
        throw new Error(message);
    }
    throw new Error("Something wrong");
};
