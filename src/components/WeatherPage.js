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
            weather: cityData.weather[0].main,
            weatherDesc: cityData.weather[0].description,
            temp: cityData.main.temp
            //TODO: and so on..
        });
    };

    kelvinToCelsius = (k) => {
        return Math.round((k - 273.15));
    };


    render() {
        return (
            <div>
                <div className="dashboard">

                    <h2><i className="fas fa-chart-bar"></i> Dashboard </h2>
                    <h2><i className="far fa-compass"></i> Location</h2>
                    <div className="data-container">
                        <div className="square">
                            <p>City</p>
                            <p className="data">{this.state.name}</p>
                        </div>
                        <div className="square">
                            <p>Country</p>
                            <p className="data">{this.state.id}</p>
                        </div>
                        <div className="square">
                            <p>Time Zone Id</p>
                            <p className="data">{this.state.weather}</p>
                        </div>
                        <div className="square">
                            <p>Local Time</p>
                            <p className="data">Local Time</p>
                        </div>
                    </div>

                    <h2><i className="fas fa-tint"></i> Current Conditions</h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Condition</p>
                            <p className="data">Condition</p>
                        </div>

                    </div>


                    <h2><i className="fas fa-thermometer-quarter"></i> Other Conditions </h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Clouds</p>
                            <p className="data">Clouds %</p>

                        </div>
                        <div className="square">
                            <p>Feels like (Celcius)</p>
                            <p className="data">{this.kelvinToCelsius(this.state.temp)} В°C</p>
                        </div>
                        <div className="square">
                            <p>Feels like (Fahrenheit)</p>
                            <p className="data">Feels like (Fahrenheit) В°F</p>
                        </div>
                        <div className="square">
                            <p>Humidity</p>
                            <p className="data">Humidity %</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}


export default WeatherPage
