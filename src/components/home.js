import React, { Component } from 'react';


import GoogleReviews from "./custom/googleReviews";
import Process from './custom/process';
import Products from './custom/products';


import axios from 'axios';

// Styling
import '../style/components/home.scss';

// IMAGES
import ROOFING from '../resources/images/home/img_hp_roofing.jpg';
import ROOFING_MINI from '../resources/images/home/icon_sq_roofing.png';
import SIDING from '../resources/images/home/img_hp_siding.jpg';
import SIDING_MINI from '../resources/images/home/icon_sq_siding.png';
import GUTTERS from '../resources/images/home/img_hp_gutters.jpg';
import GUTTERS_MINI from '../resources/images/home/icon_sq_gutters.png';
import ARROW_ICON from '../resources/images/misc/btn_icon_arrow_rd.png';
import WorkBanner from "./custom/workBanner";


// How We Do It
// import inspect from '../resources/images/inspect.png'
// import assist from '../resources/images/assist.png'
// import install from '../resources/images/install.png'
// import roofERIcon from '../resources/images/logoSolo.png';

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = { formSubmitted: false, errors: [ ], phoneNumber: '', showCovidMessage: true };
    }

    phoneChanged = e => {


        let phone = '';

        const cleaned = ('' + e.target.value).replace(/\D/g, '');
        const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            phone = ['(', match[2], ') ', match[3], '-', match[4]].join('')
        } else {
            phone = e.target.value;
        }

        this.setState({ phoneNumber: phone })

    };

    submitForm = e => {

        e.preventDefault();

        // Create Body for API Call
        const body = {
            name: e.target.elements[0].value,
            email: e.target.elements[1].value,
            phoneNumber: e.target.elements[2].value,
            address: e.target.elements[3].value,
            stormDamage: this.refs.damage.state.checked,
            roof: this.refs.roof.state.checked,
            siding: this.refs.siding.state.checked,
            gutters: this.refs.gutters.state.checked,
            details: e.target.elements[8].value,
            requestType: 'inspection'
        };

        let errors = [];

        // NAME
        if(body.name.length === 0) {
            errors.push("Name");
        }

        // EMAIL
        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(body.email.toLowerCase())){
            errors.push("Email");
        }

        // PHONE NUMBER
        if(body.phoneNumber.length < 10) {
            errors.push("Phone Number")
        }

        if(errors.length === 0) {

            const self = this;
            axios.post('https://api.theroofdocs.com/v1/inquiry', body)
                .then(function (response) {

                    self.setState({ formSubmitted: true });

                    // TODO: Clear Text Fields

                })
                .catch(function (error) {
                    console.log(error);
                    alert('Error submitting request, please try again or call The Roof Docs directly at 703-239-3738')
                });


        } else {


            this.setState({ errors });
            this.refs.errorModal.show();
        }
    };


    render() {
        return (

            <div className="home">
                <div className="covid-19-message" style={this.state.showCovidMessage ? { display: 'block'} : { display: 'none'}}>
                    <p>Due to COVID-19 restrictions, Roof-ER is limiting our direct customer contact as much as possible. We are committed to serving our customers through
                        less traditional means as we all navigate through these unique times. Give us a call today or <a className="roofDocsRed" href="/inspection">read more</a> on how we can provide you with
                        remote service on all of your exterior remodeling needs!
                    </p>
                    <button onClick={() => { this.setState({ showCovidMessage: false })}}> X </button>
                </div>
                <div className="intro">
                    <div className="intro-basics">
                        <p className="intro-header"> The Roof-ER Difference </p>
                        <p className="intro-description"> A FREE,100% REMOTE roof inspection and consultation. No direct contact required.  </p>
                        <a href="/inspection">
                            <div className="free-inspection-button-container">
                                <p className="home-inspection-label"> Sign Up For A Free Inspection </p>
                                <img className="home-inspection-img" src={ARROW_ICON} alt="Arrow" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="whatWeDo" id="whatWeDo" >
                    <div className="content">
                        <p className="smallText"> ROOF<span className="logo-text">ER</span> SERVICES </p>
                        <p className="largeText"> What we do. </p>
                        <div className="services-container">
                            <div className="single-service-container">
                                <img className="main-service-image" src={ROOFING} alt="Roofing"/>
                                <img className="service-mini-image" src={ROOFING_MINI} alt="Roofing Icon" />
                                <p className="service-header" id="roofing" > Roofing </p>
                                <p className="service-description"> Our roofers are fully trained and certified to remedy any roofing issue your home may face. We are The Roof Docs for a reason.</p>
                                <a href="/work#roofing"><p className="learn-more-link"> Learn More > </p></a>
                            </div>
                            <div className="single-service-container">
                                <img className="main-service-image" src={SIDING} alt="Siding" id="siding"/>
                                <img className="service-mini-image" src={SIDING_MINI} alt="Siding Icon" />
                                <p className="service-header"> Siding </p>
                                <p className="service-description"> While not in the name, our siding team treats your home like you'd expect to be treated during surgery - with great care and precision. </p>
                                <a href="/work#siding"><p className="learn-more-link"> Learn More > </p></a>
                            </div>
                            <div className="single-service-container">
                                <img className="main-service-image" src={GUTTERS} alt="Gutters" id="gutters" />
                                <img className="service-mini-image" src={GUTTERS_MINI} alt="Gutters Icon" />
                                <p className="service-header"> Gutters </p>
                                <p className="service-description"> Your gutters mean a great deal to the health of your home. That's why our team ensures each install follows local best practices. </p>
                                <a href="/work#gutters"><p className="learn-more-link"> Learn More > </p></a>
                            </div>
                        </div>
                    </div>
                </div>

                <Process />
                <WorkBanner />
                <Products />
                <GoogleReviews />

            </div>
        );
    }
}

export default Home;