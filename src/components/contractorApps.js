import React, { Component } from 'react';


// Styling
import '../style/components/mobileApps.css';


class MobileApps extends Component {


    render() {
        return (
            <div className="mobileAppsContainer">
                <p className="pageHeader"> The Roof Docs Contractor Mobile Apps </p>
                <a href="itms-services://?action=download-manifest&url=https://s3.amazonaws.com/theroofdocs.ios/Contractors.plist"><p className="appTitle">Download Contractor App</p></a>
            </div>

        );
    }
}

export default MobileApps;