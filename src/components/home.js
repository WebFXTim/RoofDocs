import React, { Component } from 'react';

// Styling
import '../style/components/home.css';

class Home extends Component {


    render() {
        return (
            <div className="home">
                <div className="homeImageContainer">
                    <p className="homeInfo"> Our mission at Roof-ER is to apply a surgical approach to restoring the health of your home's
                        exterior.  Whether your roof, siding, gutters, windows, or doors are showing symptoms of damage, old
                        age, or simply need a face-lift, our Roof Docs are trained to offer the proper prescription for your
                        home's ailments.  Sign up for your <a className="homeTag" href="/estimate">FREE home check-up</a> today, <a className="homeTag" href="/docs">meet our Roof Docs</a>, or <a className="homeTag" href="/work">view
                            our services</a> to learn more about Roof-ER.  We look forward to restoring your home's health with
                        integrity, quality, and simplicity!
                    </p>
                </div>
                <div className="homeFooter">
                    <p className="homeFooterText">
                        <a className="damageLink" href="/docs"> INTEGRITY. </a>
                        <a className="damageLink" href="/work"> QUALITY. </a>
                        <a className="damageLink" href="/estimate"> SIMPLICITY. </a></p>
                </div>
            </div>
        );
    }
}

export default Home;