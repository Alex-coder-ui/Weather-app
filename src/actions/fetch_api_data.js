import axios from "axios";

const API_KEY = '4e843e9cbc605cba9dbf5319e380a2c7';

export function getCityByName(city, onSuccess) {

    axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appid: API_KEY
        }
    }).then(resp => {
        console.log(resp);
        onSuccess(resp.data);
    }).catch(err => {
        console.log(err)
    });
}

export function getCityById(id, onSuccess) {
    axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            id: id,
            appid: API_KEY
        }
    }).then(resp => {
        console.log(resp);
        onSuccess(resp.data);

    }).catch(err => {
        console.log(err)
    });

}