import React from "react";
import { connect } from "react-redux";
import { SearchBar } from "../../components/Searchbar";
import { WeatherForecast } from "../../components/WeatherForecast";
import { UserActions } from "../../components/UserActions";
import "../../styles/scss/main.scss";

function App() {
    return (
        <div className="App">
            <main className="main">
                <div className="app-container">
                    <h1 className="main-title">Weather application</h1>
                    <SearchBar></SearchBar>
                    <WeatherForecast></WeatherForecast>
                    <UserActions></UserActions>
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = store => {
    console.log(store); // посмотрим, что же у нас в store?
    return {
        city: store.search.city,
        isFavourite: store.search.isFavourite,
        unit: store.unit,
        color: store.color
    };
};

export default connect(mapStateToProps)(App);
