import React, { Component } from 'react';


// Styling

class Diagnosis extends Component {

    render() {
        switch (this.props.selected) {
            case 'Roofing':
                return (
                    <p> Our Roof Docs are trained how to properly diagnose potential issues with your
                        roof.  Symptoms they look for include hail & wind damage, granule loss,
                        streaking, blistering, and more.  Call us today to set up your free home
                        check-up
                    </p>
                );
            case 'Gutters':
                return (
                    <p> Your gutter system faces a number of potential ailments including clogging, being improperly
                        secured, ineffective draining from the downspouts, leaks, etc. Call a Roof Doc today to schedule
                        a free check-up to ensure your gutter system is functioning properly.
                    </p>
                );
            case 'Windows/Doors':
                return (

                    <p> Whether it's seal failure, draftiness, or cracked/warped framing, our Roof Docs are able to detect
                        the cause of your home's symptoms and prescribe an effective solution.  Call today to have a Roof
                        Doc give your windows & doors a free check-up
                    </p>

                );
            case 'Siding':
                return (
                    <p> Our Roof Docs are able to perform check-ups on all forms of siding including vinyl, wood,
                        aluminum, steel, stucco and more.  Call us today to set up your free home check-up.
                    </p>
                );
            default:
                return ( <div /> );
        }

    }
}

export default Diagnosis;