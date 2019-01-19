import React, { Component } from 'react';


// Styling
import '../style/components/mobileApps.css';


class MobileApps extends Component {


    render() {
        return (
            <div className="mobileAppsContainer">
                <p className="pageHeader"> Mobile Apps </p>
                <a href="invalidlink"><p className="appTitle">Download Sales App</p></a>
            </div>

        );
    }
}

export default MobileApps;