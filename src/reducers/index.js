
import actionTypes from '../constants/action-types.js';
import {addCity, updateCity ,removeCity} from "../actions/index";
const { ADD_CITY, UPDATE_CITY, REMOVE_CITY} = actionTypes;

const initialState = {
    items: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return addCity(...state, action.payload);
        case UPDATE_CITY:
            return updateCity(...state, action.payload);
        case REMOVE_CITY:
            return removeCity(...state, action.payload);
        default:
            return state;
    }
};


export default reducers;