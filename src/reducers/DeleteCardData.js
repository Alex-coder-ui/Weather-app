import actionTypes from '../constants/action-types.js';

const {DELETE_CARD_DATA} = actionTypes;

const deleteCardData = (
    state,
    action) => {
    if (action.type === DELETE_CARD_DATA) {
        Object.assign({}, state, {
            weatherData: [...state.weatherData.filter(weatherData => weatherData.id !== action.id)],
        });
    }
    return state || [];
};
export default deleteCardData;