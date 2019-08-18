import axios from "axios";


export function fetchAPIResponse(city) {
    return function (dispatch) {
        const API_KEY = '2f2fbec008af1434e8930d1988aa310f';
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},& appid=${API_KEY}`).then(response => {

            let arr = [];
            for (let key in response.data.location) {
                arr.push(response.data.location[key]);
            }
            dispatch({type: "FETCH_LOCATION", payload: arr});

            let arr2 = [];
            for (let key2 in response.data.current) {
                arr2.push(response.data.current[key2]);

            }

            console.log(arr2);
            arr2.splice(5, 1);
            dispatch({type: "FETCH_WEATHER", payload: arr2});

            let arr3 = [];
            for (let key3 in response.data.current.condition) {
                arr3.push(response.data.current.condition[key3]);
            }

            dispatch({type: "FETCH_CONDITIONS", payload: arr3});

            console.log(response);


        }).catch(err => {
            console.log(err)
        });
    }
}