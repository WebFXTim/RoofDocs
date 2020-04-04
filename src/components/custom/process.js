import React, { Component } from 'react';

// STYLING
import '../../style/components/custom/process.scss';

// Testing Images
import INSPECT from '../../resources/images/custom/process/img_hp_1inspect.png';
import DIAGNOSE from '../../resources/images/custom/process/img_hp_2diagnose.png';
import PRESCRIBE from '../../resources/images/custom/process/img_hp_3prescribe.png';
import OPERATE from '../../resources/images/custom/process/img_hp_4operate.png';

import SLIDE1_SELECTED from '../../resources/images/custom/process/btn_num1_active.png';
import SLIDE1_NOT_SELECTED from '../../resources/images/custom/process/btn_num1_inactive.png';
import SLIDE2_SELECTED from '../../resources/images/custom/process/btn_num2_active.png';
import SLIDE2_NOT_SELECTED from '../../resources/images/custom/process/btn_num2_inactive.png';
import SLIDE3_SELECTED from '../../resources/images/custom/process/btn_num3_active.png';
import SLIDE3_NOT_SELECTED from '../../resources/images/custom/process/btn_num3_inactive.png';
import SLIDE4_SELECTED from '../../resources/images/custom/process/btn_num4_active.png';
import SLIDE4_NOT_SELECTED from '../../resources/images/custom/process/btn_num4_inactive.png';
import LEFT_ARROW from "../../resources/images/custom/googleReviews/icon_carouselarrow_left@2x.png";
import RIGHT_ARROW from "../../resources/images/custom/googleReviews/icon_carouselarrow_right@2x.png";


const SLIDES = [
    {  slide: 1, selected: SLIDE1_SELECTED, notSelected: SLIDE1_NOT_SELECTED },
    {  slide: 2, selected: SLIDE2_SELECTED, notSelected: SLIDE2_NOT_SELECTED },
    {  slide: 3, selected: SLIDE3_SELECTED, notSelected: SLIDE3_NOT_SELECTED },
    {  slide: 4, selected: SLIDE4_SELECTED, notSelected: SLIDE4_NOT_SELECTED },
];

const PROCESS_STEPS = [
    { key: 0, image: INSPECT, name: 'Inspect', description: ['ROOF', <span className="logo-text" key="1">ER</span>, ' will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.'] },
    { key: 1, image: DIAGNOSE, name: 'Diagnose', description: ['ROOF', <span className="logo-text">ER</span>, ' and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.']},
    { key: 2, image: PRESCRIBE, name: 'Prescribe', description: ['Your Roof Doc will provide you with an honest recommendation based on their findings. If damage is found, ROOF', <span className="logo-text">ER</span>, ' may suggest filing an insurance claim.']},
    { key: 3, image: OPERATE, name: 'Operate', description: ['If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc (via a video call) and let ROOF', <span className="logo-text">ER</span>, '\'s install team take care of the rest.']}
];

class Process extends Component {

    constructor(props) {
        super(props);

        this.state = { processIndex: 0 }
    }


    render() {

        const step = PROCESS_STEPS[this.state.processIndex];
        return (
            <div className="home-process">
                <div className="process-arrow-container left">
                    <img id="left" onClick={this.arrowClicked} src={LEFT_ARROW} alt="Previous"/>
                </div>
                <div className="process-image-container">
                    <img src={step.image} alt="Process Icon"/>
                </div>
                <div className="process-info-container">
                    <p className="process-header"> The Roof<span className="logo-text">er</span> Process </p>
                    <p className="process-step-name"> {this.state.processIndex + 1}. { step.name } </p>
                    <p className="process-description"> { step.description } </p>
                    <div className="process-slides-container">
                        { SLIDES.map ( (slide, index) => (
                            <img id={index} onClick={this.slideClicked} key={index} src={index === this.state.processIndex ? slide.selected : slide.notSelected} alt="Slide Icon"/>
                        ))}
                    </div>
                </div>
                <div className="process-arrow-container right">
                    <img id="right" onClick={this.arrowClicked} src={RIGHT_ARROW} alt="Next"/>
                </div>
            </div>

        );
    }

    arrowClicked = e => {

        let newIndex = this.state.processIndex;
        if(e.target.id === 'left'){
            if(newIndex === 0) {
                newIndex = 3
            } else {
                newIndex -= 1
            }

        } else {
            if(newIndex === 3) {
                newIndex = 0
            } else {
                newIndex += 1
            }
        }

        this.setState({ processIndex: newIndex });

    };

    slideClicked = e => {
        this.setState ({  processIndex: parseInt(e.target.id) })
    }

}

export default Process;