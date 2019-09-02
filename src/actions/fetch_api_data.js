import axios from "axios";

const API_KEY = '4e843e9cbc605cba9dbf5319e380a2c7';

export function getCityData(city, onSuccess) {
    return function (dispatch) {

        axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                appid: API_KEY
            }
        }).then(resp => {
            let arr = [];
            for (let key in resp.data) {
                arr.push(resp.data[key]);
            }
            dispatch({type: "GET_WEATHER", payload: arr});
            console.log(resp);
            onSuccess(resp.data);
        }).catch(err => {
            console.log(err)
        });

    }
}

export function getCityDataById(id, onSuccess) {
    return function (dispatch) {
        axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                id: id,
                appid: API_KEY
            }
        }).then(resp => {
            let arr = [];
            for (let key in resp.data) {
                arr.push(resp.data[key]);
            }
            dispatch({type: "GET_WEATHER_BY_ID", payload: arr});
            console.log(resp);
            onSuccess(resp.data);
        }).catch(err => {
            console.log(err)
        });
    }
}