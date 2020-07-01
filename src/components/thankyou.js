import React, { Component } from 'react';


// Styling
import '../style/components/inspection.scss';
import '../style/components/freeEstimate.css';
import '../style/components/modal.css'


import Products from "./custom/products";
import GoogleReviews from "./custom/googleReviews";
import WorkBanner from "./custom/workBanner";



class ThankYou extends Component {

    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        return (
            <div className="inspection-page-container">

                <p className="thankYouMessage">Thanks for scheduling your inspection with Roof-ER! Check your email for additional details and feel free to call us at 703-239-3738 with any questions you may have or to reschedule your appointment! </p>

                <WorkBanner/>
                <GoogleReviews/>
                <Products/>

            </div>
        );
    }




}

export default ThankYou;



