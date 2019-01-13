import React, { Component } from 'react';


// Styling

class Prescription extends Component {

    render() {
        switch (this.props.selected) {
            case 'Roofing':
                return (
                    <p> When our Roof Docs find the symptoms of an ineffective roofing system, ROOF-ER
                        prescribes a standard solution: a GAF Lifetime roofing system
                    </p>
                );
            case 'Gutters':
                return (
                    <p> If a Roof Doc notices any of the symptoms described in the diagnosis during your free check-up,
                        ROOF-ER will prescribe an appropriate treatment.  If a full gutter replacement is necessary,
                        our Roof Docs will document all required information for a custom fitting gutter system
                    </p>
                );
            case 'Windows/Doors':
                return (
                    <p> Today's homes require custom fitting doors and windows to operate at optimal efficiency.  Our
                        Roof Docs will perform a thorough assessment of your windows & doors to determine the proper treatment
                    </p>
                );
            case 'Siding':
                return (
                    <p> If your Roof Doc sees any of the symptoms shown in the siding diagnosis, your home may
                        need a ROOF+ER siding prescription: a CertainTeed premium vinyl siding replacement.
                    </p>
                );
            default:
                return ( <div /> );
        }

    }
}

export default Prescription;