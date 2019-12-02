import React, { Component } from 'react';

// import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import axios from 'axios';

import ImageInput from '../components/custom/imageInput';

// Styling
import '../style/components/inspection.scss';
import '../style/components/freeEstimate.css';
import '../style/components/modal.css'

import BANNER from "../resources/images/misc/background_banner.png";
import BANNER_ICON_UP from "../resources/images/misc/plus_icon_up.png";
import SUBMIT_ICON from '../resources/images/misc/btn_icon_arrow_rd.png';
import ImageTextArea from "./custom/imageTextArea";
import ImageMultiSelect from "./custom/imageMultiSelect";




// class Modal extends Component {
//
//     constructor(props){
//         super(props);
//
//         this.state = { hidden: true };
//
//     }
//
//     show() {
//         this.setState({ hidden: false });
//     }
//
//
//     closeModal() {
//
//         this.setState({hidden: true});
//     }
//
//
//     render() {
//         return (
//             <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : '')} onClick={this.closeModal.bind(this)}>
//                 <div className="modalContent">
//
//                     <p className="modalHeader">Please correct errors on the following fields and submit again</p>
//
//                     { this.props.errors.map(err => (
//                         <p key={err} className="errorItem"> {err} </p>
//                     ))}
//
//
//                     <button className="errorOkButton">Got It!</button>
//
//                 </div>
//
//             </div>
//         );
//     }
// }


// function FieldGroup({ id, label, help, ...props }) {
//     return (
//         <FormGroup className="formGroupText" controlId={id}>
//             <ControlLabel className="estimateControlLabel">{label}</ControlLabel>
//             <FormControl className="formGroupInput" {...props} />
//         </FormGroup>
//     );
// }

class FreeEstimate extends Component {

     constructor(props){
         super(props);

         this.state = { formSubmitted: false, errors: [], stormReportSubmitted: false, stormReportErrors: []};
         this.submitForm = this.submitForm.bind(this)
         this.submitFormStormReport = this.submitFormStormReport.bind(this)
     }

     submitForm( e ) {

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

                 }).catch(function (error) {
                     console.log(error);
                 });
         } else {

             this.setState({ errors: errors });
             this.refs.errorModal.show();
         }



     }

     submitFormStormReport( e ) {

        e.preventDefault();

        // Create Body for API Call
        const body = {
            name: e.target.elements[0].value,
            email: e.target.elements[1].value,
            phoneNumber: e.target.elements[2].value,
            address: e.target.elements[3].value,
            requestType: 'stormReport'
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

        if(body.address.length === 0) {
            errors.push("Address");
        }

        if(errors.length === 0) {

            const self = this;

            axios.post('https://api.theroofdocs.com/v1/inquiry', body)
                .then(function (response) {

                    self.setState({ stormReportSubmitted: true });

                    // TODO: Clear Text Fields

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {

            this.setState({ stormReportErrors: errors});
            this.refs.stormErrorModal.show();
        }



    }

    render() {
        return (
            <div className="inspection-page-container">
                <div className="inspection-banner">
                    <img className="inspection-banner-img" src={BANNER} alt="Banner" />
                    <div className="inspection-banner-text-container">
                        <p className="banner-text-small"> SIMPLICITY </p>
                        <p className="banner-text-large"> Free Inspections for Full Peace of Mind </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} alt="Banner Up Icon"/>
                </div>

                <div className="inspection-report-container">

                    <div className="inspection-container">
                        <p className="header-text">1. Free Inspection </p>
                        <p className="header-info-text">Fill out the short form below to set up a FREE inspection by one of our Roof Docs today!</p>
                        <ImageInput type="name" />
                        <ImageInput type="address" />
                        <ImageInput type="email" />
                        <ImageInput type="phone" />
                        <ImageMultiSelect />
                        <ImageTextArea />
                        <button className="report-submit-button">Submit Free Inspection Form<span><img className="submit-button-image" src={SUBMIT_ICON} alt="Submit"/></span></button>
                    </div>

                    <div className="report-container">
                        <p className="header-text">2. Storm Report </p>
                        <p className="header-info-text">Use the form below to get a FREE storm report to see if your property has been affected by storm damage!</p>
                        <ImageInput type="name" />
                        <ImageInput type="address" />
                        <ImageInput type="email" />
                        <ImageInput type="phone" />
                        <button className="report-submit-button">Submit Storm Report Form<span><img className="submit-button-image" src={SUBMIT_ICON} alt="Submit"/></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FreeEstimate;