import {combineReducers} from "redux";

import getCityData from "./getWeather";
import getCityDataById from "./getWeatherById";
import deleteCardData from "./DeleteCardData";


const reducers = combineReducers({
    getCityDataReducer: getCityData,
    getCityDataByIdReducer: getCityDataById,
    deleteCardDataReducer: deleteCardData,
});


export default reducers;