import React, { Component } from 'react';


import '../style/components/navigation.css';
import logo from '../resources/images/logo.PNG';
import { NavLink } from "react-router-dom";

const portal = 'https://portal.theroofdocs.com';


class Navigation extends Component {


    render() {
        return (
            <div className="navigation" id="navigation">
                <NavLink exact to="/">
                    <div className="navigationItem navigationLogo">
                        <img alt="logo" src={logo} />
                </div>
                </NavLink>
                <NavLink to='/work'>
                    <div className="navigationItem navigationLink">
                        Our Work
                    </div>
                </NavLink>
                <NavLink to='/docs'>
                    <div className="navigationItem navigationLink">
                        Meet the Docs
                    </div>
                </NavLink>
                <NavLink to='/inspection'>
                    <div className="navigationItem navigationLink">
                        Inspection
                    </div>
                </NavLink>
                <NavLink to='/faqs'>
                    <div className="navigationItem navigationLink">
                        FAQs
                    </div>
                </NavLink>
                <a href={portal} target="_blank" rel="noopener noreferrer" >
                    <div className="navigationItem navigationLink">
                        Sign In
                    </div>
                </a>
            </div>
        );
    }
}

export default Navigation;