import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Checkbox from './checkbox';
// import axios from 'axios';



// Styling
import '../style/components/freeEstimate.css';


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

         this.state = { estimatedSubmitted: false };
         this.submitForm = this.submitForm.bind(this)
     }

     submitForm( e ) {

         e.preventDefault();

         this.setState({ estimateSubmitted: true});

         // TODO: Finish This
         const body = {
             name: e.target.elements[0].value,
             email: e.target.elements[1].value,
             phoneNumber: e.target.elements[2].value,
             address: e.target.elements[3].value,
             stormDamage: e.target.elements[4].checked,
             roof: e.target.elements[5].checked,
             siding: e.target.elements[6].checked,
             gutters: e.target.elements[7].checked,
             windows: e.target.elements[8].checked,
             atticInsulation: e.target.elements[9].checked,
             details: e.target.elements[10].value,
         };

         // PERFORM VALIDATION


         console.log(body);

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
                            placeholder="Enter Phone Number"
                        />
                        <FormGroup className="formGroupCustom">
                            <ControlLabel className="estimateControlLabel">ESTIMATE ITEMS</ControlLabel>
                            <Checkbox name="STORM DAMAGE"/>
                            <Checkbox name="ROOF"/>
                            <Checkbox name="SIDING"/>
                            <Checkbox name="GUTTERS"/>
                            <Checkbox name="WINDOWS & DOORS"/>
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
                        <span className="estimateImportant">CONSTANT</span>COMMUNICATION. ROOF+ER MAKES
                        REMODELING PROJECTS EASIER THAN GOING IN FOR A ROUTINE CHECK-UP.
                    </p>
                </div>
            </div>



        );
    }
}

export default FreeEstimate;