import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/Homepage'
import Weatherpage from './components/Weatherpage'
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"




class App extends Component {

    render() {
        return (
                <div>
                    <Header className="App-header"/>

                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/Weatherpage/" component={Weatherpage}/>
                    </Switch>
                </div>

        );
    }
}

export default App;
