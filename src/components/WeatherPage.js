import React, {Component} from 'react'
import {connect} from "react-redux";


class ConnectedWeatherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ""
        };
    }

    componentDidMount() {
        console.log(this.props.Response);
    }


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
                            <p className="data">{this.props.Response[11]}</p>
                        </div>
                        <div className="square">
                            <p>Country</p>
                            <p className="data">{this.props.Response[8].country}</p>
                        </div>
                        <div className="square">
                            <p>Weather</p>
                            <p className="data">{this.props.Response[1][0].description}</p>
                        </div>
                        <div className="square">
                            <p>Wind speed </p>
                            <p className="data">Wind speed {this.props.Response[5].speed} m/s </p>
                        </div>
                    </div>

                    <h2>Current Conditions</h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Condition</p>
                            <p className="data">Pressure {this.props.Response[3].pressure} mpa </p>
                        </div>

                    </div>


                    <h2> Other Conditions </h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Temp max</p>
                            <p className="data">Temp max {this.kelvinToCelsius(this.props.Response[3].temp_max)} В°C</p>

                        </div>
                        <div className="square">
                            <p>Temp now (Celcius)</p>
                            <p className="data">{this.kelvinToCelsius(this.props.Response[3].temp)} В°C</p>
                        </div>
                        <div className="square">
                            <p>Temp min</p>
                            <p className="data">Temp min {this.kelvinToCelsius(this.props.Response[3].temp_min)} В°C</p>
                        </div>
                        <div className="square">
                            <p>Humidity</p>
                            <p className="data">Humidity {this.props.Response[3].humidity} %</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Response: state.getCityDataByIdReducer.weatherData,
    }
}


const WeatherPage = connect(mapStateToProps)(ConnectedWeatherPage);
export default WeatherPage;
