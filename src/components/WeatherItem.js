import React, {Component} from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import {NavLink as DLink} from "react-router-dom"

class WeatherItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.cityData.id,
            name: this.props.cityData.name,
            weather: this.props.cityData.weather[0].main,
            weatherDesc: this.props.cityData.weather[0].description,
            temp: this.props.cityData.main.temp,
        };

    }


    updateData = () => {
        this.props.updateData(this.state.id);
    };

    kelvinToCelsius = (k) => {
        return Math.round((k - 273.15));
    };

    deleteCityCard = () => {
        this.props.deleteCityCard(this.state.id);
    };

    render() {
        return (
            <div>

                <div className="data-container">

                    <div className="square">
                        <Card>
                            <Card.Header className="square">City {this.state.name}</Card.Header>
                            <Card.Body>
                                <DLink className={"DLink"} to={{pathname: '/weatherpage/' + this.state.id}}
                                       onClick={this.updateData}>
                                    <Card.Title> {this.state.weather}</Card.Title>
                                    <Card.Text>
                                        Temp {this.kelvinToCelsius(this.state.temp)} В°C
                                    </Card.Text>
                                </DLink>
                                <Button variant="primary" onClick={this.updateData}>Fetch data</Button>
                                <Button variant="primary" onClick={this.deleteCityCard}>Delete </Button>
                            </Card.Body>
                        </Card>


                    </div>

                </div>


            </div>


        )
    }
}


export default WeatherItem;