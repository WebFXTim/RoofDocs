import React, { Component } from 'react';


// STYLING
import '../../style/components/custom/workBanner.scss';

// IMAGES
import WHO_WE_ARE from '../../resources/images/custom/workBanner/Who_we_are.png';
import HOW_WE_DO_IT from '../../resources/images/custom/workBanner/How_we_do_it.png';
import ArrowButton from "./arrowButton";


class WorkBanner extends Component {


    render() {
        return (
            <div className="work-banner-container">
                <div className="who-we-are">
                    <img className="banner-image" src={WHO_WE_ARE} />
                    <div className="work-info-container">
                        <p className="small-header"> Who We Are </p>
                        <p className="large-header"> Our Hippocratic Oath </p>
                        <p className="work-banner-description"> We are setting the new standard for roofing contractors. Our team is trained and held accountable to prioritize your best interest. </p>
                        <ArrowButton link="docs" text="Meet the Docs" />
                    </div>
                </div>
                <div className="how-we-do-it">
                    <img className="banner-image" src={HOW_WE_DO_IT} />
                    <div className="work-info-container">
                        <p className="small-header"> How We Do It </p>
                        <p className="large-header">Integrity. Quality. Simplicity. </p>
                        <p className="work-banner-description"> By staying committed to our core values, we offer a service to our customers that they can't wait to tell their friends and family about. </p>
                        <ArrowButton link="work" text="View Our Work" />
                    </div>
                </div>

            </div>
        );
    }
}

export default WorkBanner;