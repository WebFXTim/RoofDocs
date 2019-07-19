import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup className="formGroupText" controlId={id}>
            <ControlLabel className="estimateControlLabel">{label}</ControlLabel>
            <FormControl className="formGroupInput" {...props} />
        </FormGroup>
    );
}

export default FieldGroup