import logger from "redux-logger";
import thunk from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import reducers from "../reducers/index";
import {save, load} from "redux-localstorage-simple";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(logger, thunk, save());

const store = createStore(reducers, load(), composeEnhancers(middleware));


export default store;
