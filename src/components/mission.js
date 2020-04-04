import React, { Component } from 'react';
import GoogleReviews from "./custom/googleReviews";


// Styling
import '../style/components/mission.scss';
import '../style/components/work.scss';

import BANNER_ICON_UP from "../resources/images/misc/plus_icon_up.png";

class OurMission extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }



    render() {
        return (
            <div className="mission-container">
                <div className="mission-banner">
                    <div className="mission-banner-text-container">
                        <p className="banner-text-small"> Our Mission? </p>
                        <p className="banner-text-large"> To Raise the Standard for Roofing Contractors  </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} alt="Banner Icon Up" />
                </div>
                <div className="work-process-container">
                    <div className="work-process-content">

                        {/* OUR MISSION */}
                        <div className="work-item-container">
                            {/*<div className="work-item-icon-container">*/}
                            {/*    <img src={STEPS[0].icon} alt="Step" />*/}
                            {/*</div>*/}
                            <div className="work-item-info-container">
                                <p className="step-header"> The ROOF<span style={{color: 'black'}}>ER</span> Mission </p>
                                <p className="step-info"> At ROOF<span className="roofDocsRed">ER</span>, our mission is to hold a fiduciary responsibility to our customers, plain and simple. In an
                                    industry known for poor workmanship, lack of communication, and at times, outright deceit, we seek to restore the name of
                                    exterior remodeling contractors nationwide. By committing to our core values of integrity, quality, and simplicity, we promise
                                    to deliver an experience every homeowner wants when remodeling their home: a simple and straightforward quality installation
                                    for a fair and honest price.  </p>

                            </div>
                        </div>

                    </div>
                </div>
                <GoogleReviews />
            </div>
        )
    }
}

export default OurMission;