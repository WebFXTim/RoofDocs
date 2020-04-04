import React, { Component } from 'react';

import '../../style/components/custom/workStepItem.scss';

import ICON from '../../resources/images/logos/logoIcon.png';

class WorkStepItem extends Component {

    render()
    {
        return (
            <div className="work-step-item-container">
                <img alt="icon" src={ICON} />
                <p> {this.props.text} </p>
            </div>
        )
    }
}

export default WorkStepItem;