import React, {Component} from 'react'
import WeatherItem from "./WeatherItem"
import {getCityById, getCityData} from "../actions/fetch_api_data";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


const CITIES_LS_KEY = "cities";


class ConnectedHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityInput: "London",
            items: []
        };
    }


    componentWillMount() {
        let array = localStorage.getItem(CITIES_LS_KEY);
        if (array) {
            array.split(",").forEach(cityId => {
                getCityById(cityId, this.recoverItem);
                //TODO: put cityData to redux
            });
        }
    }

    recoverItem = (cityData) => {
        let cities = this.state.items;
        cities.push(cityData);
        this.setState({items: cities});
    };

    changeCityInput = (e) => {
        let value = e.target.value;
        this.setState({
            cityInput: value
        });
    };

    addNew = () => {
        this.props.GetCityData(this.state.cityInput, this.processAddNew);
    };

    processAddNew = (cityData) => {
        let array = this.state.items;
        array.push(cityData);
        localStorage.setItem(CITIES_LS_KEY, array.map(item => item.id));
        console.log(array);
        this.setState({items: array});
    };


    updateItem = (cityData) => {
        let cities = this.state.items;
        let foundIndex = cities.findIndex(x => x.id === cityData.id);
        cities[foundIndex] = cityData;
        this.setState({items: cities});
    };

    deleteCityCard = (id) => {
        let cities = this.state.items.filter(i => i.id !== id);
        console.log(id);
        localStorage.setItem(CITIES_LS_KEY, cities.map(item => item.id));
        this.setState({items: cities});
    };

    updateCityCard = (id) => {
        getCityById(id, this.updateItem);
    };


    render() {
        const items = this.state.items;
        const cityInput = this.state.cityInput;
        return (
            <div>
                <div className="form">
                    <input name="city" value={cityInput} onChange={this.changeCityInput}/>
                    <button onClick={this.addNew}><i className="fas fa-search">Add city</i></button>
                </div>

                <div>
                    {items.map((item) => (
                        <WeatherItem key={item.id} cityData={item} deleteCityCard={this.deleteCityCard}
                                     updateData={this.updateCityCard}/>
                    ))}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        apiResponse: state.getCityDataReducer.weatherData,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({GetCityData: getCityData}, dispatch);
}

const HomePage = connect(mapStateToProps, matchDispatchToProps)(ConnectedHomePage);
export default HomePage;
