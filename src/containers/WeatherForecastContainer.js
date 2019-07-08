import React from "react";
import { connect } from "react-redux";
import { WeatherForecast } from "../components/WeatherForecast";

class WeatherForecastContainer extends React.Component {
    render() {
        const { forecastData, place } = this.props;
        return (
            <WeatherForecast
                data={forecastData.data}
                isFetching={forecastData.isFetching}
                place={place}
            ></WeatherForecast>
        );
    }
}

const mapStateToProps = store => {
    return {
        forecastData: store.forecastData,
        place: store.place.place
    };
};

export default connect(mapStateToProps)(WeatherForecastContainer);
