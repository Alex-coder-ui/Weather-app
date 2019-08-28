import actionTypes from "../constants/action-types.js";
const { ADD_CITY, REMOVE_CITY,UPDATE_CITY } = actionTypes;

const addCity = cityData => ({ type: ADD_CITY, payload: cityData });
const updateCity = cityData => ({ type: UPDATE_CITY, payload: cityData });
const removeCity = cityData => ({ type: REMOVE_CITY, payload: cityData });

export  { addCity, removeCity,updateCity };
