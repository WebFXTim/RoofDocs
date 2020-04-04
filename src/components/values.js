import React, { Component } from 'react';

// Styling
import '../style/components/values.scss';
import '../style/components/work.scss';
import BANNER_ICON_UP from "../resources/images/misc/plus_icon_up.png";

import INTEGRITY from '../resources/images/integrity.png';
import SIMPLICITY from '../resources/images/simplicity.png';
import QUALITY from '../resources/images/quality.png';



class OurValues extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }



    render() {
        return (
            <div className="values-container">
                <div className="values-banner">
                    <div className="values-banner-text-container">
                        <p className="banner-text-small"> Our Values </p>
                        <p className="banner-text-large"> Integrity. Quality. Simplicity  </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} alt="Banner Icon Up" />
                </div>
                <div className="work-process-container">

                    <div className="work-process-content">
                        {/* INTEGRITY */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={ INTEGRITY } alt="Integrity" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 1. INTEGRITY  </p>
                                <p className="step-info"> Great businesses are built on trust: trust in the people, the process, and the product.
                                    ROOF<span className="roofDocsRed">ER</span>'s commitment to integrity starts with our training methods and continues through
                                    our final quality inspection.  Customers know what to expect from us and as a result, are confident in referring us to their friends
                                    and family.  ROOF<span className="roofDocsRed">ER</span> is proud to stay 90% of our new customers are referrals.
                                </p>
                            </div>
                        </div>

                        {/* QUALITY */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={ QUALITY } alt="Integrity" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 2. QUALITY  </p>
                                <p className="step-info"> Sustainability doesn't come through shortcuts.  By focusing on quality from start-to-finish,
                                    ROOF<span className="roofDocsRed">ER</span> is quickly becoming the premier roofing contractor in Northern Virginia for those customers
                                    looking for a restoration project done right.  Whether it is our detailed inspections or our quality assurance protocol, we focus on
                                    every last detail to ensure our customers know they've received the best service available.
                                </p>
                            </div>
                        </div>

                        {/* SIMPLICITY */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={ SIMPLICITY } alt="Integrity" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 3. SIMPLICITY  </p>
                                <p className="step-info"> Complexity = chaos.  After a storm, this equation has the potential to become even work.
                                    ROOF<span className="roofDocsRed">ER</span> understands what homeowners want most after a storm: peace of mind and a straightforward
                                    process to restoring their home.  Leveraging technology and emphasizing simplicity allows ROOF<span className="roofDocsRed">ER</span>
                                    to offer an unrivaled value proposition: an expert restoration project with minimal headaches.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default OurValues;