import React, { Component } from 'react';

// Resources
import gaf from '../../resources/images/gafWork.png';
import CertainTeed from '../../resources/images/certainTeed.jpeg';

// Styling
const style = {
    'width': '80%',
    'height': 'auto',
    'margin': '0 10%'
};

class Prescription extends Component {

    render() {
        switch (this.props.selected) {
            case 'Roofing':
                return (
                    <div className="roofingPrescriptionContainer">
                        <p> When our Roof Docs find the symptoms of an ineffective roofing system, ROOF-ER
                            prescribes a standard solution: a GAF Lifetime roofing system.
                        </p>
                        <img style={style} src={gaf} alt="GAF" />
                    </div>
                );
            case 'Gutters':
                return (
                    <p> If a Roof Doc notices any of the symptoms described in the diagnosis during your free check-up,
                        ROOF-ER will prescribe an appropriate treatment.  If a full gutter replacement is necessary,
                        our Roof Docs will document all required information for a custom-fitting gutter system.
                    </p>
                );
            case 'Doors & Windows':
                return (
                    <p> Today's homes require custom fitting doors and windows to operate at optimal efficiency.  Our
                        Roof Docs will perform a thorough assessment of your windows & doors to determine the proper treatment.
                    </p>
                );
            case 'Siding':
                return (
                    <div className="roofingPrescriptionContainer">
                        <p> If your Roof Doc finds any ailments with your current siding material, your home may
                            need a ROOF-ER siding prescription: a CertainTeed premium vinyl siding replacement.
                        </p>
                        <img style={style} src={CertainTeed} alt="CertainTeed" />
                    </div>
                );
            default:
                return ( <div /> );
        }

    }
}

export default Prescription;