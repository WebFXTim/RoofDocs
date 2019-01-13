import React, { Component } from 'react';
import {Button, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


// Stylingnpm
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


    render() {
        return (
            <div className="freeEstimate">
                <p className="pageHeader"> Free Estimate</p>

                <div id="estimateFormContainer">
                    <form>
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
                            <ControlLabel className="estimateControlLabel">AREAS OF INTEREST</ControlLabel>
                            <Checkbox >STORM DAMAGE</Checkbox>
                            <Checkbox >ROOF</Checkbox>
                            <Checkbox >SIDING</Checkbox>
                            <Checkbox >GUTTERS</Checkbox>
                            <Checkbox >WINDOWS & DOORS</Checkbox>
                            <Checkbox >ATTIC INSULATION</Checkbox>
                        </FormGroup>

                            {/* MORE DETAILS */}
                        <FormGroup className="formGroupCustom formGroupDetails" controlId="formControlsTextarea">
                            <ControlLabel className="estimateControlLabel">More Details</ControlLabel>
                        <FormControl className="descriptionTextArea" componentClass="textarea" placeholder="Enter more information..." />
                        </FormGroup>
                        <Button className="submitButton" type="submit">Submit</Button>
                    </form>
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