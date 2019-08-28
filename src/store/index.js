import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers/index";

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducers,  middleware);




export default store;
