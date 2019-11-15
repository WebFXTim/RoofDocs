import React, { Component } from 'react';

import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

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


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup className="formGroupText" controlId={id}>
            <ControlLabel className="estimateControlLabel">{label}</ControlLabel>
            <FormControl className="formGroupInput" {...props} />
        </FormGroup>
    );
}

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
                    <img src={BANNER} alt="Banner" />
                    <div className="inspection-banner-text-container">
                        <p className="banner-text-small"> Know what you need before you pay a penny </p>
                        <p className="banner-text-large"> Free Inspections & Storm Reports </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} />
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
                        <button className="report-submit-button">Submit Free Inspection Form<span><img className="submit-button-image" src={SUBMIT_ICON} /></span></button>
                    </div>

                    <div className="report-container">
                        <p className="header-text">2. Storm Report </p>
                        <p className="header-info-text">Use the form below to get a FREE storm report to see if your property has been affected by storm damage!</p>
                        <ImageInput type="name" />
                        <ImageInput type="address" />
                        <ImageInput type="email" />
                        <ImageInput type="phone" />
                        <button className="report-submit-button">Submit Storm Report Form<span><img className="submit-button-image" src={SUBMIT_ICON} /></span></button>
                    </div>

                </div>


                {/*<div id="inspection-damage-report-container">*/}
                {/*    <div className="home-container">*/}
                {/*        /!* Storm Damage Report*!/*/}
                {/*        <div className="damage-report" style={ this.state.stormReportSubmitted ? {display: 'none'} : { display: 'inline-block'}}>*/}
                {/*            <p className="sectionTitle"> FREE STORM REPORT </p>*/}
                {/*            <p className="sectionSubheader"> Please use the form below to receive a <span className="nameEnding">FREE</span> storm report for your property to see if*/}
                {/*                your property has been affected by storm damage! </p>*/}

                {/*            <form onSubmit={this.submitFormStormReport}>*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsName"*/}
                {/*                    type="text"*/}
                {/*                    label="NAME"*/}
                {/*                    placeholder="Enter Name"*/}
                {/*                />*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsEmail"*/}
                {/*                    type="email"*/}
                {/*                    label="EMAIL"*/}
                {/*                    placeholder="Enter Email"*/}
                {/*                />*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsPhone"*/}
                {/*                    type="phone"*/}
                {/*                    label="PHONE NUMBER (OPTIONAL)"*/}
                {/*                    placeholder="Enter Phone Number"*/}
                {/*                />*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsAddress"*/}
                {/*                    type="address"*/}
                {/*                    label="ADDRESS"*/}
                {/*                    placeholder="Enter Address"*/}
                {/*                />*/}
                {/*                <Button className="submitButton" type="submit">Get Storm Report</Button>*/}
                {/*            </form>*/}
                {/*        </div>*/}
                {/*        <div className="damage-report" style={ !this.state.stormReportSubmitted ? {display: 'none'} : { display: 'inline-block'}}>*/}
                {/*            <p className="sectionTitle"> FREE STORM REPORT </p>*/}
                {/*            <p className="sectionText"> Thank you for requesting your free storm report! Our support team will email you an in-depth report*/}
                {/*                with additional details within one business day.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <Modal errors={this.state.stormReportErrors} ref="stormErrorModal" />*/}

                {/*        /!* Free EInspection *!/*/}
                {/*        <div className="inspection-info-container" style={ this.state.formSubmitted ? {display: 'none'} : { display: 'inline-block'}}>*/}
                {/*            <p className="sectionTitle noBottomMargin"> Free Inspection </p>*/}
                {/*            <p className="sectionSubheader"> Fill out the form below to set up a <span className="nameEnding">FREE</span> inspection by one of our Roof Docs today! </p>*/}

                {/*            <form onSubmit={this.submitForm}>*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsName"*/}
                {/*                    type="text"*/}
                {/*                    label="NAME"*/}
                {/*                    placeholder="Enter Name"*/}
                {/*                />*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsEmail"*/}
                {/*                    type="email"*/}
                {/*                    label="EMAIL"*/}
                {/*                    placeholder="Enter Email"*/}
                {/*                />*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsPhone"*/}
                {/*                    type="phone"*/}
                {/*                    label="PHONE NUMBER"*/}
                {/*                    placeholder="Enter Phone Number"*/}
                {/*                />*/}
                {/*                <FieldGroup*/}
                {/*                    id="formControlsAddress"*/}
                {/*                    type="address"*/}
                {/*                    label="ADDRESS"*/}
                {/*                    placeholder="Enter Address"*/}
                {/*                />*/}
                {/*                <FormGroup className="formGroupCustom">*/}
                {/*                    <ControlLabel className="estimateControlLabel">INSPECTION ITEMS</ControlLabel>*/}
                {/*                    <Checkbox ref="roof" name="ROOF"/>*/}
                {/*                    <Checkbox ref="siding" name="SIDING"/>*/}
                {/*                    <Checkbox ref="gutters" name="GUTTERS"/>*/}
                {/*                    <Checkbox ref="damage" name="STORM DAMAGE"/>*/}
                {/*                </FormGroup>*/}

                {/*                /!* MORE DETAILS *!/*/}
                {/*                <FormGroup className="formGroupCustom formGroupDetails" controlId="formControlsTextarea">*/}
                {/*                    <ControlLabel className="estimateControlLabel">More Details</ControlLabel>*/}
                {/*                    <FormControl className="descriptionTextArea" componentClass="textarea" placeholder="Enter more information..." />*/}
                {/*                </FormGroup>*/}
                {/*                <Button className="submitButton" type="submit">Submit</Button>*/}
                {/*            </form>*/}
                {/*        </div>*/}
                {/*        <div className="inspection-info-container" style={ !this.state.formSubmitted ? {display: 'none'} : { display: 'inline-block'}}>*/}
                {/*            <p className="sectionTitle noBottomMargin"> Free Inspection </p>*/}
                {/*            <p className="sectionText"> Thank you for submitting your information! You will be contacted by one of our*/}
                {/*                Roof Docs within one business day.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <img src={inspection} className="inspection-background-image" alt="Inspection"/>*/}
                {/*        <Modal errors={this.state.errors} ref="errorModal" />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="inspection-process-container">*/}

                {/*    <p className="sectionTitle" id="process"> The <span style={{color: 'black'}}>ROOF</span>ER Process </p>*/}
                {/*    /!* Diagnose *!/*/}
                {/*    <div className="work-section-inspection">*/}
                {/*        <div className="work-heading-container">*/}
                {/*            <img src={diagnoseIcon} className="work-section-icon" alt="Diagnose" />*/}
                {/*            <p className="work-section-label"> Diagnose </p>*/}
                {/*        </div>*/}
                {/*        <div className="work-content-container">*/}
                {/*            <p className="work-content-background"> Our Roof Docs are trained how to properly diagnose potential issues with your roof.  It is crucial to be able to make the distinction*/}
                {/*                between storm-related damage and damage resulting from age or weathering.  ROOF<span className="nameEnding">ER</span> uses the following methodology to determine whether*/}
                {/*                your property has been affected by storm  damage:*/}
                {/*            </p>*/}

                {/*            <div className="inspection-description-container">*/}
                {/*                <div className="inspection-desc-info-container">*/}
                {/*                    /!* Inspect *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text"> Inspect the soft metals of your home, such as gutters, downspouts, or aluminum siding, to search for evidence of hail or flying debris </p>*/}
                {/*                    </div>*/}
                {/*                    /!* Perform *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text">Perform a full roof inspection, looking for dislodged granules, fractured matting, or creased shingles</p>*/}
                {/*                    </div>*/}
                {/*                    /!* Examine *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text">Examine the findings with a holistic perspective to determine whether an insurance claim is warranted or not</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!* Prescribe *!/*/}
                {/*    <div className="work-section-inspection" style={{paddingTop: '50px'}}>*/}

                {/*        <div className="work-heading-container" >*/}
                {/*            <img src={prescribeIcon} className="work-section-icon" alt="Prescribe" />*/}
                {/*            <p className="work-section-label"> Prescribe </p>*/}
                {/*        </div>*/}
                {/*        <div className="work-content-container">*/}
                {/*            <p className="work-content-background"> If ROOF<span className="nameEnding">ER</span> determines the damage is storm-related, your Roof Doc will prescribe the following steps: </p>*/}
                {/*            <div className="inspection-description-container">*/}
                {/*                <div className="inspection-desc-info-container">*/}
                {/*                    /!* Contact *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text"> Contacting your insurance company to file the claim and report the damages </p>*/}
                {/*                    </div>*/}
                {/*                    /!* Notify *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text">Notifying your Roof Doc when the insurance company's adjuster will be inspecting the damages</p>*/}
                {/*                    </div>*/}
                {/*                    /!* Provide *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text">Providing ROOF<span className="nameEnding">ER</span> with the insurance scope of loss to ensure it includes all items that were damaged </p>*/}
                {/*                    </div>*/}
                {/*                    /!* Meeting *!/*/}
                {/*                    <div className="logo-line-item">*/}
                {/*                        <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
                {/*                        <p className="line-item-text">Meeting with your Roof Doc to discuss all project details, upgrades, and installation timeline </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default FreeEstimate;