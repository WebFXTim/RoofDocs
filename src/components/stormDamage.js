import React, { Component } from 'react';


// Styling
import '../style/components/stormDamage.css';

import StormDamageImage from '../resources/images/damage.png';


class StormDamage extends Component {


    render() {
        return (

            <div className="stormDamage">
                <p className="pageHeader">Storm Damage</p>

                <div className="stormDamageContent">
                    <div className="stormDamageInfo">
                        <img src={StormDamageImage} alt="Storm Damage" />
                        <p id="stormDamageDescription"> The rise in the number of severe storms effecting
                            the DMV area has resulted in hundreds of millions of dollars worth of property
                            damage in just the last few years.  When a hail and/or wind storm tears through
                            your neighborhood, the exterior of your home can take a beating.  At ROOF+ER, we
                            specialize in restoring your storm-damage roof, siding, gutters, along with other
                            exterior elements of your home.  Call us today to schedule a <span className="stormDamageImportant">FREE</span> storm-damage
                            inspection with one of our Roof Docs.
                        </p>

                    </div>
                    <div className="stormReport">
                        <a href="/estimate">
                            <button className="estimateButton"> Get Your Estimate Now</button>
                        </a>
                    </div>
                </div>
                <div className="stormDamageFooter">
                    <p className="stormDamageFooterText"> INTEGRITY. QUALITY. SIMPLICITY.</p>
                </div>
            </div>




        );
    }
}

export default StormDamage;