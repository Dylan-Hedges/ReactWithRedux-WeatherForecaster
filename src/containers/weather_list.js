import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    //Renders the name and data for a specific city on screen
    renderWeather(cityData){
    const name = cityData.city.name;
    //Returns tempreature for each city and assign it to "temps"
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    console.log(temps);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }
    
    //Displays table, maps over cities and executes the renderWeather function
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (k)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

//Maps the global state to the props of this container - otherwise the container would not be able to access the weather data in the Redux store (where app/global level state is stored)
function mapStateToProps(state) {
    //Maps the "weather" array to the props of this container so it can access and display weather data on screen - "weather" is the key for the part of global state we want to access (as defined in "reducers/index.js"), the value for this key is an array containing weather data (see "weather_reducer.js")
    return { weather: state.weather};
}

//Connects and exports the container with "mapStateToProps" function - otherwise the function will not be applied to the container
export default connect(mapStateToProps)(WeatherList);