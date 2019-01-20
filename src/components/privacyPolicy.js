import React, { Component } from 'react';


// Styling
import '../style/components/privacyPolicy.css';


class PrivacyPolicy extends Component {


    render() {
        return (

            <div className="privacyPolicyContainer">
                <p className="pageHeader"> Privacy Policy </p>
                <div className="privacyPolicy">
                    <p> THIS IS WHERE THE POLICY GOES </p>
                </div>
            </div>
        );
    }
}

export default PrivacyPolicy;