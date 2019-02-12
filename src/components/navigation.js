import React, { Component } from 'react';


import '../style/components/navigation.css';
import logo from '../resources/images/logo.PNG';
import { NavLink } from "react-router-dom";

const portal = 'https://portal.theroofdocs.com';


class Navigation extends Component {


    render() {
        return (
            <div className="navigation">
                <NavLink exact to="/">
                    <div className="navigationItem navigationLogo">
                        <img alt="logo" src={logo} />
                </div>
                </NavLink>
                <NavLink to='/work'>
                    <div className="navigationItem navigationLink">
                        OUR WORK
                    </div>
                </NavLink>
                <NavLink to='/docs'>
                    <div className="navigationItem navigationLink">
                        MEET THE DOCS
                    </div>
                </NavLink>
                <NavLink to='/damage'>
                    <div className="navigationItem navigationLink">
                        STORM DAMAGE
                    </div>
                </NavLink>
                <NavLink to='/estimate'>
                    <div className="navigationItem navigationLink">
                        FREE ESTIMATE
                    </div>
                </NavLink>
                <a href={portal}>
                    <div className="navigationItem navigationLink">
                        Client Portal
                    </div>
                </a>
            </div>
        );
    }
}

export default Navigation;