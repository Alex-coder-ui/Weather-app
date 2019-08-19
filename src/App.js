import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './components/HomePage'
import WeatherPage from './components/WeatherPage'
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"

class App extends Component {

    render() {
        return (
            <div>
                <Header className="App-header"/>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/weatherpage/:id" component={WeatherPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
