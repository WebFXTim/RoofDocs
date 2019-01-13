import React, { Component } from 'react';

// Styling
import '../style/components/home.css';

import logo from '../resources/images/homeLogo.jpg';

class Home extends Component {


    render() {
        return (
            <div className="home">
                <div className="homeImageContainer">
                    <img src={logo} alt="home" className="homeLogo"/>
                </div>
                <div className="homeFooter">
                    <p className="homeFooterText"> INTEGRITY. QUALITY. SIMPLICITY.</p>
                </div>
            </div>
        );
    }
}

export default Home;