import React, { Component } from 'react';


import GoogleReviews from "./custom/googleReviews";
import Process from './custom/process';
import Products from './custom/products';


import FieldGroup from './custom/fieldGroup';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Checkbox from './checkbox';
import axios from 'axios';

// Styling
import '../style/components/home.scss';

// IMAGES
import ROOFING from '../resources/images/home/img_hp_roofing.jpg';
import SIDING from '../resources/images/home/img_hp_siding.jpg';
import GUTTERS from '../resources/images/home/img_hp_gutters.jpg';
import ARROW_ICON from '../resources/images/misc/btn_icon_arrow_rd.png';
import WorkBanner from "./custom/workBanner";


// How We Do It
// import inspect from '../resources/images/inspect.png'
// import assist from '../resources/images/assist.png'
// import install from '../resources/images/install.png'
// import roofERIcon from '../resources/images/logoSolo.png';

class Modal extends Component {

    constructor(props){
        super(props);

        this.state = { hidden: true };

    }

    show() {
        this.setState({ hidden: false });
    }


    closeModal() {

        this.setState({hidden: true});
    }


    render() {
        return (
            <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : '')} onClick={this.closeModal.bind(this)}>
                <div className="modalContent">

                    <p className="modalHeader">Please correct errors on the following fields and submit again</p>

                    { this.props.errors.map(err => (
                        <p key={err} className="errorItem"> {err} </p>
                    ))}


                    <button className="errorOkButton">Got It!</button>

                </div>

            </div>
        );
    }
}


class Home extends Component {


    constructor(props) {
        super(props);

        this.state = { formSubmitted: false, errors: [ ], phoneNumber: ''};
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
                <div className="intro">
                    <div className="intro-basics">
                        <p className="intro-header"> The RoofDocs Difference </p>
                        <p className="intro-description"> A FREE, HONEST roof inspection. Every time. </p>
                        <a href="inspection">
                            <div className="free-inspection-button-container">
                                <p className="home-inspection-label"> Sign Up For A Free Inspection </p>
                                <img className="home-inspection-img" src={ARROW_ICON} />
                            </div>
                        </a>

                    </div>
                </div>

                <div className="whatWeDo" >
                    <div className="content">
                        <p className="smallText"> ROOF-ER SERVICES </p>
                        <p className="largeText"> What we do. </p>
                        <div className="services-container">
                            <div className="single-service-container">
                                <img src={ROOFING}/>
                                <p className="service-header"> Roofing </p>
                                <p className="service-description"> Our roofers are fully trained and certified to remedy any roofing issue your home may face. We are The Roof Docs for a reason.</p>
                                <a href="/work#roofing"><p className="learn-more-link"> Learn More </p></a>
                            </div>
                            <div className="single-service-container">
                                <img src={SIDING}/>
                                <p className="service-header"> Siding </p>
                                <p className="service-description"> While not in the name, our siding team treats your home like you'd expect to be treated during surgery - with great care and precision. </p>
                                <a href="/work#siding"><p className="learn-more-link"> Learn More </p></a>
                            </div>
                            <div className="single-service-container">
                                <img src={GUTTERS}/>
                                <p className="service-header"> Gutters </p>
                                <p className="service-description"> Your gutters mean a great deal to the health of your home. That's why our team ensures each install follows local best practices. </p>
                                <a href="/work#gutters"><p className="learn-more-link"> Learn More </p></a>
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