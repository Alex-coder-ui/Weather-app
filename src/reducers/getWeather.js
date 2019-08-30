import actionTypes from '../constants/action-types.js';

const {GET_WEATHER} = actionTypes;

const getCityData = (
    state = {
        weatherData: []
    },
    action) => {
    if (action.type === GET_WEATHER) {
        state = {...state, weatherData: action.payload}
    }
    return state;
};
export default getCityData;

