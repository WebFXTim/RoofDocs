import React, { Component } from 'react';
import ARROW_ICON from "../../resources/images/misc/btn_icon_arrow_rd.png";


import '../../style/components/custom/arrowButton.scss';

class ArrowButton extends Component {


    render() {
        return (
            <a href={this.props.link}>
                <div className="arrow-button-container">
                    <p className="arrow-button-label"> { this.props.text } </p>
                    <img className="arrow-button-img" src={ARROW_ICON} alt="Arrow"/>
                </div>
            </a>
        );
    }
}

export default ArrowButton;