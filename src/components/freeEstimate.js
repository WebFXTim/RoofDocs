import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Checkbox from './checkbox';
import axios from 'axios';



// Styling
import '../style/components/freeEstimate.css';
import '../style/components/modal.css'

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

         this.state = { estimateSubmitted: false, errors: [] };
         this.submitForm = this.submitForm.bind(this)
     }

     submitForm( e ) {

         e.preventDefault();

         // Create Body for API Call
         const body = {
             name: e.target.elements[0].value,
             email: e.target.elements[1].value,
             phoneNumber: e.target.elements[2].value,
             address: e.target.elements[3].value,
             stormDamage: e.target.elements[4].checked,
             roof: e.target.elements[5].checked,
             siding: e.target.elements[6].checked,
             gutters: e.target.elements[7].checked,
             windowsDoors: e.target.elements[8].checked,
             atticInsulation: e.target.elements[9].checked,
             details: e.target.elements[10].value,
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

                     self.setState({ estimateSubmitted: true });

                     // TODO: Clear Text Fields

                 })
                 .catch(function (error) {
                     console.log(error);
                 });
         } else {

             this.setState({errors: errors});
             this.refs.errorModal.show();
         }



     }


    render() {
        return (
            <div className="freeEstimate">
                <p className="pageHeader"> Free Estimate</p>

                <div id="estimateFormContainer">
                    <form onSubmit={this.submitForm}>
                        <FieldGroup
                            id="formControlsName"
                            type="text"
                            label="NAME"
                            placeholder="Enter Name"
                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="EMAIL"
                            placeholder="Enter Email"
                        />
                        <FieldGroup
                            id="formControlsPhone"
                            type="phone"
                            label="PHONE NUMBER"
                            placeholder="Enter Phone Number"
                        />
                        <FieldGroup
                            id="formControlsAddress"
                            type="address"
                            label="ADDRESS"
                            placeholder="Enter Address"
                        />
                        <FormGroup className="formGroupCustom">
                            <ControlLabel className="estimateControlLabel">ESTIMATE ITEMS</ControlLabel>
                            <Checkbox name="STORM DAMAGE"/>
                            <Checkbox name="ROOF"/>
                            <Checkbox name="SIDING"/>
                            <Checkbox name="GUTTERS"/>
                            <Checkbox name="DOORS & WINDOWS"/>
                            <Checkbox name="ATTIC INSULATION"/>
                        </FormGroup>

                            {/* MORE DETAILS */}
                        <FormGroup className="formGroupCustom formGroupDetails" controlId="formControlsTextarea">
                            <ControlLabel className="estimateControlLabel">More Details</ControlLabel>
                        <FormControl className="descriptionTextArea" componentClass="textarea" placeholder="Enter more information..." />
                        </FormGroup>
                        <Button className="submitButton" type="submit">Submit</Button>
                    </form>
                </div>
                <div className={"submittedEstimateContainer " + (this.state.estimateSubmitted ? 'showEstimate' : 'hideEstimate')}>
                    <p className="submittedHeader">You have my info....What's Next?</p>
                    <p className="submittedInfo">Once you have submitted your details, you will receive a call from one of our Roof
                        Docs to set up a time to visit your home.  During the visit, your Roof Doc will do a thorough inspection of
                        any issues and/or concerns you would like to have addressed and will be ready to prescribe solutions and next steps!
                        Simple right?
                    </p>

                </div>
                <div className="estimateFooter">
                    <p className="estimateFooterMainText"> SIMPLICITY. </p>
                    <p className="estimateFooterSmallText" >
                        A <span className="estimateImportant">TRANSPARENT</span>PROCESS WITH
                        <span className="estimateImportant">CONSTANT</span>COMMUNICATION. ROOF-ER MAKES
                        REMODELING PROJECTS EASIER THAN GOING IN FOR A ROUTINE CHECK-UP.
                    </p>
                </div>
                <Modal errors={this.state.errors} ref="errorModal" />

            </div>
        );
    }
}

export default FreeEstimate;