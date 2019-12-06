import React, { Component } from 'react';
import axios from 'axios';

import ImageInput from '../components/custom/imageInput';

// Styling
import '../style/components/inspection.scss';
import '../style/components/freeEstimate.css';
import '../style/components/modal.css'

import BANNER_ICON_UP from "../resources/images/misc/plus_icon_up.png";
import SUBMIT_ICON from '../resources/images/misc/btn_icon_arrow_ko.png';
import ImageTextArea from "./custom/imageTextArea";
import ImageMultiSelect from "./custom/imageMultiSelect";

import Products from "./custom/products";
import GoogleReviews from "./custom/googleReviews";
import WorkBanner from "./custom/workBanner";
import FreeQuoteBanner from "./custom/freeQuoteBanner";


class FreeEstimate extends Component {

     constructor(props){
         super(props);

         this.state = { formSubmitted: false, errors: [], stormReportSubmitted: false, stormReportErrors: []}
     }

    render() {
        return (
            <div className="inspection-page-container">
                <div className="inspection-banner">
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
                        <ImageInput ref="inspectionName" type="name" />
                        <ImageInput ref="inspectionAddress" type="address" />
                        <ImageInput ref="inspectionEmail" type="email" />
                        <ImageInput ref="inspectionPhone" type="phone" />
                        <ImageMultiSelect ref="inspectionSelect" type="inspection" />
                        <ImageTextArea ref="inspectionDetails" />
                        <div className="report-submit-button" onClick={this.submitInspection} >
                            <p className="report-submit-label"> Submit Free Inspection Form </p>
                            <img className="report-submit-img" src={SUBMIT_ICON} alt="Submit" />
                        </div>
                    </div>

                    <div className="report-container">
                        <p className="header-text">2. Storm Report </p>
                        <p className="header-info-text">Use the form below to get a FREE storm report to see if your property has been affected by storm damage!</p>
                        <ImageInput ref="reportName" type="name" />
                        <ImageInput ref="reportAddress" type="address" />
                        <ImageInput ref="reportEmail" type="email" />
                        <ImageInput ref="reportPhone" type="phone" />
                        <ImageMultiSelect ref="reportSelect" type="report"/>
                        <ImageTextArea ref="reportDetails" />
                        <div className="report-submit-button" onClick={this.submitReport} >
                            <p className="report-submit-label"> Submit Storm Report Form </p>
                            <img className="report-submit-img" src={SUBMIT_ICON} alt="Submit" />
                        </div>
                    </div>
                </div>
                <WorkBanner />
                <GoogleReviews />
                <Products />
                <FreeQuoteBanner />
                <ErrorModal errors={this.state.errors} ref="errorModal" />
                <SuccessModal ref="successModal"/>
            </div>
        );
    }

    submitInspection = () => {

         const name = this.refs.inspectionName.state.value;
         const address = this.refs.inspectionAddress.state.value;
         const email = this.refs.inspectionEmail.state.value;
         const phone = this.refs.inspectionPhone.state.value;
         const details = this.refs.inspectionDetails.state.value;
         const roof = this.refs.inspectionSelect.refs.roof.state.checked;
         const siding = this.refs.inspectionSelect.refs.siding.state.checked;
         const gutters = this.refs.inspectionSelect.refs.gutters.state.checked;
         const damage = this.refs.inspectionSelect.refs.damage.state.checked;

        // Create Body for API Call
        const inspectionBody = {
            name: name,
            email: email,
            phoneNumber: phone,
            address: address,
            stormDamage: damage,
            roof: roof,
            siding: siding,
            gutters: gutters,
            details: details,
            requestType: 'inspection'
        };

        let errors = [];

        // NAME
        if(inspectionBody.name.length === 0) {
            errors.push("Name");
        }

        // ADDRESS
        if(inspectionBody.address.length === 0) {
            errors.push("Address");
        }

        // EMAIL
        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(inspectionBody.email.toLowerCase())){
            errors.push("Invalid Email");
        }

        // PHONE NUMBER
        if(inspectionBody.phoneNumber.length < 10) {
            errors.push("Phone Number")
        }

        if(errors.length === 0) {

            const self = this;
            axios.post('https://devapi.theroofdocs.com/v1/inquiry', inspectionBody)
                .then(function (response) {

                    // Show Modal
                    self.refs.successModal.show();

                    // Clear Text Fields
                    self.clearInspectionFields();

                }).catch(function (error) {
                    console.log(error);
                });
        } else {

            this.setState({ errors: errors });
            this.refs.errorModal.show();
        }


    };

    submitReport = () => {

        const reportName = this.refs.reportName.state.value;
        const reportAddress = this.refs.reportAddress.state.value;
        const reportEmail = this.refs.reportEmail.state.value;
        const reportPhone = this.refs.reportPhone.state.value;
        const details = this.refs.reportDetails.state.value;
        const hail = this.refs.reportSelect.refs.hail.state.checked;
        const wind = this.refs.reportSelect.refs.wind.state.checked;
        const rain = this.refs.reportSelect.refs.rain.state.checked;
        const other = this.refs.reportSelect.refs.other.state.checked;

        // Create Body for API Call
        const reportBody = {
            name: reportName,
            email: reportEmail,
            phoneNumber: reportPhone,
            address: reportAddress,
            hail: hail,
            wind: wind,
            rain: rain,
            other: other,
            details: details,
            requestType: 'stormReport'

        };

        let errors = [];

        // NAME
        if(reportBody.name.length === 0) {
            errors.push("Name");
        }

        // EMAIL
        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(reportBody.email.toLowerCase())){
            errors.push("Invalid Email");
        }

        if(reportBody.address.length === 0) {
            errors.push("Address");
        }


        if(errors.length === 0) {

            const self = this;
            axios.post('https://devapi.theroofdocs.com/v1/inquiry', reportBody)
                .then(function (response) {

                    // Show Modal
                    self.refs.successModal.show();

                    // Clear Text Fields
                    self.clearReportFields();

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {

            this.setState({ errors: errors});
            this.refs.errorModal.show();
        }

    };

    clearInspectionFields() {

        this.refs.inspectionName.setState({ value: '' });
        this.refs.inspectionAddress.setState({ value: '' });
        this.refs.inspectionEmail.setState({ value: '' });
        this.refs.inspectionPhone.setState({ value: '' });
        this.refs.inspectionDetails.setState({ value: '' });
        this.refs.inspectionSelect.refs.roof.setState({ checked: false });
        this.refs.inspectionSelect.refs.siding.setState({ checked: false });
        this.refs.inspectionSelect.refs.gutters.setState({ checked: false });
        this.refs.inspectionSelect.refs.damage.setState({ checked: false });
    }

    clearReportFields() {

        this.refs.reportName.setState({ value: '' });
        this.refs.reportAddress.setState({ value: '' });
        this.refs.reportEmail.setState({ value: '' });
        this.refs.reportPhone.setState({ value: '' });
        this.refs.reportDetails.setState({ value: '' });
        this.refs.reportSelect.refs.hail.setState({ checked: false });
        this.refs.reportSelect.refs.wind.setState({ checked: false });
        this.refs.reportSelect.refs.rain.setState({ checked: false });
        this.refs.reportSelect.refs.other.setState({ checked: false });
    }
}

export default FreeEstimate;


class ErrorModal extends Component {

    constructor(props){
        super(props);

        this.state = { hidden: true, errors: [] };

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

class SuccessModal extends Component {

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
            <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : ' animatedModal')} onClick={this.closeModal.bind(this)}>
                <div className="modalContent">
                    <p className="modalHeader">Your request has been submitted, we will reach out to you within 1-2 business days.  Thanks!</p>
                    <button className="errorOkButton"> Close </button>
                </div>
            </div>
        );
    }
}