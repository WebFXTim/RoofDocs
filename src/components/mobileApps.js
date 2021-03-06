import React, { Component } from 'react';


// Styling
import '../style/components/mobileApps.css';


class MobileApps extends Component {

    constructor(props) {
        super(props);

        this.state = { authenticated: false, currentPassword: 'TRD19!'}

    }


    render() {
        if(this.state.authenticated) {
            return (
                <div className="mobileAppsContainer">
                    <p className="pageHeader"> Mobile Apps </p>
                    <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/theroofdocs.plist"><p className="appTitle">Download Sales App</p></a>
                    <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/ProjectMeeting.plist"><p className="appTitle">Download Project Meeting App</p></a>
                    <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/AdjusterMeeting.plist"><p className="appTitle">Download Adjuster Meeting App</p></a>
                    <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/FieldApp.plist"><p className="appTitle">Download Field Portal App</p></a>
                    <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/WrapUp.plist"><p className="appTitle">Download Wrap Up App</p></a>
                </div>

            );
        } else {
            return (
                <div className="mobileAppsContainer">
                    <p className="pageHeader"> Mobile Apps </p>
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

export default MobileApps;