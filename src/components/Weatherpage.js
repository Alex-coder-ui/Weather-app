import React, {Component} from 'react'
import Button from "react-bootstrap/Button"
import axios from 'axios'
import Citycard  from "./Citycard"
import Citylist from './Citylist'

export default class Weatherpage extends Component {

    constructor() {
        super();
        this.state = {
            cities: [],
            cityName:"",
            formVisible: false
        }

    }

    toggleForm =()=> {

        this.setState({formVisible: !this.state.formVisible});
    };


    render() {
        return (
            <div>
                <div className="dashboard">
                    <Button variant="primary" onClick={this.toggleForm}>Add new city</Button>
                <Citylist/>

            </div>

            </div>
        )
    }
};
