import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import App from './App';

import { Provider } from "react-redux";
import storeRef from "./store/store.js";



ReactDOM.render(
    <BrowserRouter>
    <Provider store={storeRef}>
    <App />
    </Provider>
    </BrowserRouter>, document.getElementById('root'));




