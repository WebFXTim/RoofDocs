import React, { Component } from 'react';


// STYLING
import '../../style/components/custom/freeQuoteBanner.scss';

class FreeQuoteBanner extends Component {


    render() {
        return (
            <div className="free-quote-container">

                <p className="free-quote-text"> CONTACT US NOW </p>
                <a href="/inspection"><button className="free-quote-button"> Give Me A Free Inspection </button></a>

            </div>
        );
    }
}

export default FreeQuoteBanner;