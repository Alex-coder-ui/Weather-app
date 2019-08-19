import React, {Component} from 'react'
import {getCityById} from "../actions/fetch_api_data";


class WeatherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            weather: "",
            weatherDesc: "",
            temp: "",
            pressure: "",
            //TODO: and so on..
        };
        this.setItem = this.setItem.bind(this);
    }

    componentDidMount() {
        getCityById(this.props.match.params.id, this.setItem);
    }

    setItem = (cityData) => {
        this.setState({
            id: cityData.id,
            name: cityData.name,
            country: cityData.sys.country,
            weather: cityData.weather[0].main,
            weatherDesc: cityData.weather[0].description,
            temp: cityData.main.temp,
            pressure:cityData.main.pressure,
            humidity:cityData.main.humidity,
            temp_max: cityData.main.temp_max,
            temp_min: cityData.main.temp_min,
            wind: cityData.wind.speed,


        });
    };

    kelvinToCelsius = (k) => {
        return Math.round((k - 273.15));
    };


    render() {
        return (
            <div>
                <div className="dashboard">


                    <div className="data-container">
                        <div className="square">
                            <p>City</p>
                            <p className="data">{this.state.name}</p>
                        </div>
                        <div className="square">
                            <p>Country</p>
                            <p className="data">{this.state.country}</p>
                        </div>
                        <div className="square">
                            <p>Weather</p>
                            <p className="data">{this.state.weatherDesc}</p>
                        </div>
                        <div className="square">
                            <p>Wind speed </p>
                            <p className="data">Wind speed {this.state.wind} m/s </p>
                        </div>
                    </div>

                    <h2>Current Conditions</h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Condition</p>
                            <p className="data">Pressure  {this.state.pressure} mpa </p>
                        </div>

                    </div>


                    <h2> Other Conditions </h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Temp max</p>
                            <p className="data">Temp max {this.kelvinToCelsius(this.state.temp_max)} В°C</p>

                        </div>
                        <div className="square">
                            <p>Temp now (Celcius)</p>
                            <p className="data">{this.kelvinToCelsius(this.state.temp)} В°C</p>
                        </div>
                        <div className="square">
                            <p>Temp min</p>
                            <p className="data">Temp min {this.kelvinToCelsius(this.state.temp_min)} В°C</p>
                        </div>
                        <div className="square">
                            <p>Humidity</p>
                            <p className="data">Humidity {this.state.humidity} %</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}


export default WeatherPage
