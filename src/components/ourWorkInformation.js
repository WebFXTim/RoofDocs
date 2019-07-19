import React, { Component } from 'react';

import Tabs from './tabbing/tabContainer';


// Styling
import '../style/components/tabbing.css';
import '../style/components/ourWorkInformation.css';


class OurWorkInformation extends Component {

    constructor(props) {
        super(props);

        this.state = { selectedItem: '' }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({selectedItem: nextProps.selected});
    }

    render() {
        if(this.state.selectedItem === '') {
            return (
                <div />
            );
        } else {
            return (
                <div className="workItemDescription">
                    <p id="workSelectedItem"> { this.state.selectedItem }</p>
                    <Tabs>
                        <div label="COMPARISON">
                            <Comparison selected={ this.state.selectedItem }/>
                        </div>

                        <div label="DIAGNOSIS">
                            <Diagnosis selected={ this.state.selectedItem }/>
                        </div>
                        <div label="PRESCRIPTION">
                            <Prescription selected={ this.state.selectedItem }/>
                        </div>
                    </Tabs>
                </div>
            );
        }
    }
}

export default OurWorkInformation;