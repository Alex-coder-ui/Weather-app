import React, {Component} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink as DLink} from "react-router-dom"


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top"/>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <span>Alex-coder Weather App</span>
                    <Nav className="mr-auto">
                        <Navbar.Toggle aria-controls="responsive-nav"/>
                        <DLink className={"DLink"} to="/">HomePage</DLink>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}