import React, { Component } from 'react';


// Styling
import '../style/components/mobileApps.css';


class DevMobileApps extends Component {

    constructor(props) {
        super(props);

        this.state = { authenticated: false, currentPassword: 'TheRoofDocs19!'}

    }


    render() {
        if(this.state.authenticated) {
            return (
                <div className="mobileAppsContainer">
                    <p className="pageHeader"> The Roof Docs Contractor Mobile Apps - DEV </p>
                    <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/dev/Contractors.plist"><p className="appTitle">Download Contractor App</p></a>
                </div>
            );
        } else {
            return (
                <div className="mobileAppsContainer">
                    <p className="pageHeader"> Mobile Apps - DEV </p>
                    <p className="sectionText"> Please Enter Password to View Apps </p>
                    <form>
                        <input ref="passwordInput" type="password" className="apps-password-input" />
                        <button onClick={this.validate} className="apps-submit-button"> Submit</button>
                    </form>
                </div>
            );
        }
    }


    validate = e => {

        e.preventDefault();
        if(this.refs.passwordInput.value === this.state.currentPassword) {
            this.setState({ authenticated: true })
        } else {
            alert('Wrong Password, please try again!')
        }
    }
}

export default DevMobileApps;