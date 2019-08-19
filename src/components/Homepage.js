import React, {Component} from 'react'
import WeatherItem from "./WeatherItem"
import {getCityById, getCityByName} from "../actions/fetch_api_data";


const CITIES_LS_KEY = "cities";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityInput: "London",
            items: []
        };
        this.changeCityInput = this.changeCityInput.bind(this);
        this.addNew = this.addNew.bind(this);
        this.processAddNew = this.processAddNew.bind(this);
        this.deleteCityCard = this.deleteCityCard.bind(this);
        this.updateCityCard = this.updateCityCard.bind(this);
        this.recoverItem = this.recoverItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount() {
        let array = localStorage.getItem(CITIES_LS_KEY);
        if (array) {
            array.split(",").forEach(cityId => {
                getCityById(cityId, this.recoverItem);
                //TODO: put cityData to redux
            });
        }
    }

    changeCityInput = (e) => {
        let value = e.target.value;
        this.setState({
            cityInput: value
        });
    };

    addNew = () => {
        getCityByName(this.state.cityInput, this.processAddNew);
    };

    processAddNew = (cityData) => {
        let array = this.state.items;
        array.push(cityData);
        localStorage.setItem(CITIES_LS_KEY, array.map(item => item.id));
        console.log(array);
        this.setState({items: array});
    };

    recoverItem = (cityData) => {
        let cities = this.state.items;
        cities.push(cityData);
        this.setState({items: cities});
    };

    updateItem = (cityData) => {
        let cities = this.state.items;
        let foundIndex = cities.findIndex(x => x.id === cityData.id);
        cities[foundIndex] = cityData;
        this.setState({items: cities});
    };

    deleteCityCard = (id) => {
        let items = this.state.items.filter(i => i.id !== id);
        let array = localStorage.getItem(CITIES_LS_KEY).split(",");
        localStorage.setItem(CITIES_LS_KEY, array.filter(id => id !== id));
        this.setState({items: items})
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
                    {items.map((item, index) => (
                        <WeatherItem key={index} cityData={item} deleteCityCard={this.deleteCityCard}
                                     updateData={this.updateCityCard}/>
                    ))}
                </div>

            </div>
        )
    }
};
