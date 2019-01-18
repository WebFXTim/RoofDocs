import React, { Component } from 'react';

// Styling
import '../style/components/home.css';

class Home extends Component {


    render() {
        return (
            <div className="home">
                <div className="homeImageContainer">
                    <p className="homeInfo"> Our mission at Roof+ER is to apply a surgical approach to restoring the health of your home's
                        exterior.  Whether your roof, siding, gutters, windows, or doors are showing symptoms of damage, old
                        age, or simply need a face-lift, our Roof Docs are trained to offer the proper prescription for your
                        home's ailments.  Sign up for your <a className="homeTag" href="/estimate">FREE</a> check-up today, meet our Roof Docs, or view
                        our services to learn more aboutu Roof+ER.  We look forward to servicing your home's health with
                        integrity, quality, and simplicity
                    </p>
                </div>
                <div className="homeFooter">
                    <p className="homeFooterText"> INTEGRITY. QUALITY. SIMPLICITY.</p>
                </div>
            </div>
        );
    }
}

export default Home;