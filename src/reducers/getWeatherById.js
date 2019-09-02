import actionTypes from '../constants/action-types.js';

const {GET_WEATHER_BY_ID} = actionTypes;

const getCityDataById = (
    state = {
        weatherData: []
    },
    action) => {
    if (action.type === GET_WEATHER_BY_ID) {
        state = {...state, weatherData: action.payload}
    }
    return state;
};
export default getCityDataById;
