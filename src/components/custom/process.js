import React, { Component } from 'react';

// STYLING
import '../../style/components/custom/process.scss';

// Testing Images
import ROOFING from '../../resources/images/home/img_hp_roofing.jpg';
import SIDING from '../../resources/images/home/img_hp_siding.jpg';
import GUTTERS from '../../resources/images/home/img_hp_gutters.jpg';

import SLIDE1_SELECTED from '../../resources/images/custom/process/btn_num1_active.png';
import SLIDE1_NOT_SELECTED from '../../resources/images/custom/process/btn_num1_inactive.png';
import SLIDE2_SELECTED from '../../resources/images/custom/process/btn_num2_active.png';
import SLIDE2_NOT_SELECTED from '../../resources/images/custom/process/btn_num2_inactive.png';
import SLIDE3_SELECTED from '../../resources/images/custom/process/btn_num3_active.png';
import SLIDE3_NOT_SELECTED from '../../resources/images/custom/process/btn_num3_inactive.png';
import SLIDE4_SELECTED from '../../resources/images/custom/process/btn_num4_active.png';
import SLIDE4_NOT_SELECTED from '../../resources/images/custom/process/btn_num4_inactive.png';


const SLIDES = [
    {  slide: 1, selected: SLIDE1_SELECTED, notSelected: SLIDE1_NOT_SELECTED },
    {  slide: 2, selected: SLIDE2_SELECTED, notSelected: SLIDE2_NOT_SELECTED },
    {  slide: 3, selected: SLIDE3_SELECTED, notSelected: SLIDE3_NOT_SELECTED },
    {  slide: 4, selected: SLIDE4_SELECTED, notSelected: SLIDE4_NOT_SELECTED },
];

const PROCESS_STEPS = [
    { image: ROOFING, name: 'Inspect', description: 'ROOFER will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.'},
    { image: SIDING, name: 'Diagnose', description: 'ROOFER and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.'},
    { image: GUTTERS, name: 'Prescribe', description: 'Your Roof Doc will provide you with an honest recommendation based on their findings. If damage is found, ROOFER may suggest filing an insurance claim.'},
    { image: ROOFING, name: 'Operate', description: 'If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOFER\'s install team take care of the rest.'}
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
                <div className="process-image-container">
                    <img src={step.image} />
                </div>
                <div className="process-info-container">
                    <p className="process-header"> The Roofer Process </p>
                    <p className="process-step-name"> {this.state.processIndex + 1}. { step.name } </p>
                    <p className="process-description"> { step.description } </p>
                    <div className="process-slides-container">
                        { SLIDES.map ( (slide, index) => (
                            <img id={index} onClick={this.slideClicked} key={index} src={index === this.state.processIndex ? slide.selected : slide.notSelected} />
                        ))}
                    </div>
                </div>
            </div>

        );
    }

    slideClicked = e => {
        this.setState ({  processIndex: parseInt(e.target.id) })
    }

}

export default Process;