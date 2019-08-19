import React, {Component} from 'react'

const {CITIES_LS_KEY} = "cities";

class Weatherpage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            weather: "",
            weatherDesc: "",
            temp: "",
        }
    }

    componentDidMount() {
        if (this.props) {
            console.log(this.props)


        }
    }


    render() {
        return (
            <div>
                <div className="dashboard">

                    <h2><i className="fas fa-chart-bar"></i> Dashboard </h2>
                    <h2><i className="far fa-compass"></i> Location</h2>
                    <div className="data-container">
                        <div className="square">
                            <p>City</p>
                            <p className="data">{this.props.name}</p>
                        </div>
                        <div className="square">
                            <p>Country</p>
                            <p className="data">{this.props.id}</p>
                        </div>
                        <div className="square">
                            <p>Time Zone Id</p>
                            <p className="data">{this.props.weather}</p>
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
                            <p className="data">{this.state.temp} В°C</p>
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


export default Weatherpage
