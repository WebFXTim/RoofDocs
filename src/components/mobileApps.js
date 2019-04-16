import React, { Component } from 'react';


// Styling
import '../style/components/mobileApps.css';


class MobileApps extends Component {


    render() {
        return (
            <div className="mobileAppsContainer">
                <p className="pageHeader"> Mobile Apps </p>
                <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/theroofdocs.plist"><p className="appTitle">Download Sales App</p></a>
                <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/ProjectMeeting.plist"><p className="appTitle">Download Project Meeting App</p></a>
                <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/AdjusterMeeting.plist"><p className="appTitle">Download Adjuster Meeting App</p></a>
                <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/WrapUp.plist"><p className="appTitle">Download Project Wrap Up App</p></a>
            </div>

        );
    }
}

export default MobileApps;