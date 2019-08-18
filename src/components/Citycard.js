import React, {Component} from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import {fetchAPIResponse} from "../actions/fetch_api_data"
import {bindActionCreators} from 'redux'
import axios from 'axios'
import Header from "./Header";
import {connect} from "react-redux";

class Citycard extends Component {

    constructor() {
        super();
        this.state = {
            cities:[],
            value: ""
        }
    }

    fetchData = () => {
        this.props.FetchAPIResponse(this.state.value);
    };

    deleteCityCard = () => {
        let arr = this.state.cities;
        arr.splice(this.city.id, 1);
        this.setState({cities:arr })
    };

    render() {
        return (
            <div>


                <div className="data-container">


                    <div className="square">
                        <Card className="bg-dark text-white" >
                            <Card.Img src="#city image" alt="Card image"/>
                            <Card.ImgOverlay>
                                <Card.Title>City</Card.Title>
                                <Card.Text>
                                    Weather report for each city
                                </Card.Text>
                                <br/>
                                <Card.Text>Last updated 1 mins ago</Card.Text>
                                <br/>
                            </Card.ImgOverlay>
                        </Card>
                        <td>
                            <Button variant="secondary" onClick={this.fetchData}>Fetch data</Button>
                        </td>
                        <td>
                            <Button variant="secondary" onClick={this.deleteCityCard}>Delete city</Button>
                        </td>
                    </div>


                </div>


            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        apiResponse: state.FetchWeatherReducer.weatherData,
        apiLocation: state.FetchWeatherLocation.location,
        apiConditions: state.FetchCurrentConditions.conditions
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({FetchAPIResponse: fetchAPIResponse}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Citycard);