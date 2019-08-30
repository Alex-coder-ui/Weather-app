import {combineReducers} from "redux";

import getCityData from "./getWeather";


const reducers = combineReducers({
    getCityDataReducer: getCityData
});


export default reducers;