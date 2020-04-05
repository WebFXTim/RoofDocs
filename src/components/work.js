import React, { Component } from 'react';
import FreeQuoteBanner from "./custom/freeQuoteBanner";

// Styling
import '../style/components/work.scss';
import '../style/components/modal.css'


// Images
import INSPECT from '../resources/images/ourWork/img_1inspect.png';
import DIAGNOSE from '../resources/images/ourWork/img_2diagnose.png';
import PRESCRIBE from '../resources/images/ourWork/img_3prescribe.png';
import OPERATE from '../resources/images/ourWork/img_4operate.png';

import BANNER_ICON_UP from '../resources/images/misc/plus_icon_up.png';
import BANNER_ICON_DOWN from "../resources/images/misc/plus_icon_down.png";

import Roofing1 from '../resources/images/marketing/DSC_2143.JPG';
import Roofing2 from '../resources/images/marketing/DSC_2190.jpg';
import Roofing3 from '../resources/images/marketing/fullsizeoutput_8b.jpeg';
import Roofing4 from '../resources/images/marketing/fullsizeoutput_8c.jpeg';
import Roofing5 from '../resources/images/marketing/fullsizeoutput_8d.jpeg';
import Roofing6 from '../resources/images/marketing/fullsizeoutput_8e.jpeg';

import Roofing7 from '../resources/images/marketing/fullsizeoutput_8f.jpeg';
import Roofing8 from '../resources/images/marketing/fullsizeoutput_88.jpeg';
import Roofing9 from '../resources/images/marketing/fullsizeoutput_89.jpeg';
import Roofing10 from '../resources/images/marketing/fullsizeoutput_90.jpeg';
import Roofing11 from '../resources/images/marketing/DSC_2143.JPG';
import Roofing12 from '../resources/images/marketing/IMG_3051.jpg';
import Roofing13 from '../resources/images/marketing/IMG_3399.jpg';
import Roofing14 from '../resources/images/marketing/IMG_3401.jpg';
import Roofing15 from '../resources/images/marketing/IMG_3402.jpg';
import Roofing16 from '../resources/images/marketing/IMG_3403.jpg'
import Roofing17 from '../resources/images/marketing/IMG_3404.jpg';
import Roofing18 from '../resources/images/marketing/IMG_3406.jpg';
import Roofing19 from '../resources/images/marketing/IMG_3409.jpg';
import Roofing20 from '../resources/images/marketing/DSC_2191.jpg';
import Roofing21 from '../resources/images/marketing/DSC_2193.jpg';
import Roofing22 from '../resources/images/marketing/DSC_2193.jpg';
import Roofing23 from '../resources/images/marketing/DSC_2189.JPG';
import Roofing24 from '../resources/images/marketing/DSC_2543.JPG';
import Roofing25 from '../resources/images/marketing/DSC_2546.JPG';
import Roofing26 from '../resources/images/marketing/DSC_2549.JPG';

import COLLAPSE_ICON from "../resources/images/misc/icon_closered.png";
import WorkStepItem from "./custom/workStepItem";

const MARKETING_IMAGES = [
    { title: 'Roofing1', src: Roofing1 },
    { title: 'Roofing24', src: Roofing24 },
    { title: 'Roofing2', src: Roofing2 },
    { title: 'Roofing3', src: Roofing3 },
    { title: 'Roofing4', src: Roofing4 },
    { title: 'Roofing26', src: Roofing26 },
    { title: 'Roofing5', src: Roofing5 },
    { title: 'Roofing6', src: Roofing6 },
    { title: 'Roofing20', src: Roofing20 },
    { title: 'Roofing7', src: Roofing7 },
    { title: 'Roofing8', src: Roofing8 },
    { title: 'Roofing9', src: Roofing9 },
    { title: 'Roofing10', src: Roofing10 },
    { title: 'Roofing25', src: Roofing25 },
    { title: 'Roofing11', src: Roofing11 },
    { title: 'Roofing21', src: Roofing21 },
    { title: 'Roofing13', src: Roofing13 },
    { title: 'Roofing14', src: Roofing14 },
    { title: 'Roofing22', src: Roofing22 },
    { title: 'Roofing15', src: Roofing15 },
    { title: 'Roofing16', src: Roofing16 },
    { title: 'Roofing17', src: Roofing17 },
    { title: 'Roofing12', src: Roofing12 },
    { title: 'Roofing18', src: Roofing18 },
    { title: 'Roofing19', src: Roofing19 },
    { title: 'Roofing21', src: Roofing21 },
    { title: 'Roofing23', src: Roofing23 }
];

const STEPS = [
    { name: 'Inspect', icon: INSPECT, info: ['ROOF', <span className="logo-text" key="1">ER</span>,
            ' will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.']},
    { name: 'Diagnose', icon: DIAGNOSE, info: ['ROOF', <span className="logo-text" key="2">ER</span>, ' and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.']},
    { name: 'Prescribe', icon: PRESCRIBE, info: ['Your Roof Doc will provide you with an honest recommendation based on their findings.']},
    { name: 'Operate', icon: OPERATE, info: ['If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOF',  <span className="logo-text" key="4">ER</span>, '\'s install team take care of the rest. ']}
];

const INSPECT_STEPS = [
    'You will be notified once we arrive (no direct contact required)',
    'We will take all necessary safety precautions prior to performing the inspection',
    'Next, we\'ll complete our free inspection using our custom Field - App to determine the condition of your exterior systems'
];

const DIAGNOSE_STEPS = [

    'Our Field-app goes through a step-by-step checklist to ensure we gather all the information needed to properly assess your roof, siding, & gutter systems ',
    'The items we look for include wind and hail damage, weathering effects, faulty installation methods, etc.',
    'Upon synthesizing our findings, we will determine our recommended course of action: a repair or replacement, an insurance claim for storm damage, or a simple sign off that your exterior is in good shape for a few more years!'
];

const PRESCRIBE_STEPS = [
    ['Property insurance claim: if ROOF', <span className="logo-text" key="2">ER</span>, ' finds storm-related damage to your roof, siding, or gutters, we may recommend filing a claim with your insurance company. You can learn more about this process by visiting our ', <a href="/faqs"><span className="roofDocsRed">FAQs page</span> </a>],
    'Repair/replacement: often times, homeowners ask us to inspect their property because they\'re aware of an issue already. In these cases, our Roof Docs are experts at deciding exactly what needs done to ensure those problems are addressed',
    'Good/great condition: even if your roof/siding/gutters were installed quite a few years ago, there\'s a chance they have maintained their useful life and will remain serviceable for a few more years. We pride ourselves on providing honest recommendations to our homeowners - we won\'t sell you what you don\'t need!'
];

const OPERATE_STEPS = [
    'If work is required, we will do our best to educate you on all of your options, focusing on how to provide you with the most value',
    'Our Roof Docs can recommend colors & products based on your style of home and your preferences. The best part? Our pricing is 100% haggle-free',
    'Once the project details have been completed, our production team takes over and our factory-certified installers deliver a professional remodeling project!'
];

class GalleryImageContainer extends Component {

    render() {

        if(this.props.showMorePhotos) {
            return (
                <div className="gallery-images-container">
                    { MARKETING_IMAGES.map( (img,index) => (
                        <WorkDisplayImage key={index} index={index} parent={this} image={img} />
                    ))}
                </div>
            )
        } else {
            const images = MARKETING_IMAGES.slice(0, 12);
            return (
                <div className="gallery-images-container">
                    { images.map( (img,index) => (
                        <WorkDisplayImage key={index} index={index} parent={this} image={img} />
                    ))}
                </div>

            )
        }
    }
}

class OurWork extends Component {

    constructor(props) {
        super(props);

        this.state = { showMorePhotos: false}
    }

    showPhotosClicked = () => {

        this.setState({ showMorePhotos: !this.state.showMorePhotos })

    };


    render() {

        const buttonText = this.state.showMorePhotos ? 'Hide' : 'Show All';

        return (
            <div className="our-work-container">
                <div className="work-banner">
                    <div className="work-banner-text-container">
                        <p className="banner-text-small"> QUALITY </p>
                        <p className="banner-text-large"> Shortcuts Aren't In Our Vocabulary </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} alt="Banner Up"/>
                </div>

                <div className="gallery-container" >
                    <p className="main-text"> Our Gallery </p>
                    <p className="small-text"> Click the images below to view the full image </p>

                    <GalleryImageContainer ref="gallery" parent={this} showMorePhotos={this.state.showMorePhotos} />
                    <button className="gallery-show-photos-button" onClick={this.showPhotosClicked}> { buttonText } </button>

                </div>

                <div className="work-process-container">
                    <div className="work-process-banner">
                        <img className="banner-icon" src={BANNER_ICON_DOWN} alt="Banner Down"/>
                        <p className="main-text"> OUR FOUR STEP PROCESS </p>
                        <p className="small-text"> A standard approach to every job ensures a quality restoration </p>
                    </div>
                    <div className="work-process-content">

                        {/* INSPECT */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={STEPS[0].icon} alt="Step" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 1. { STEPS[0].name } </p>
                                <p className="step-info"> { STEPS[0].info } </p>
                                { INSPECT_STEPS.map( (step, index) => (
                                    <WorkStepItem key={index} text={ step } />
                                ))}
                            </div>
                        </div>

                        {/* DIAGNOSE */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={STEPS[1].icon} alt="Step" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 2. { STEPS[1].name } </p>
                                <p className="step-info"> { STEPS[1].info } </p>
                                { DIAGNOSE_STEPS.map( (step, index) => (
                                    <WorkStepItem key={index} text={ step } />
                                ))}
                            </div>
                        </div>

                        {/* PRESCRIBE */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={STEPS[2].icon} alt="Step" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 3. { STEPS[2].name } </p>
                                <p className="step-info"> { STEPS[2].info } </p>
                                { PRESCRIBE_STEPS.map( (step, index) => (
                                    <WorkStepItem key={index} text={ step } />
                                ))}
                            </div>
                        </div>

                        {/* OPERATE */}
                        <div className="work-item-container">
                            <div className="work-item-icon-container">
                                <img src={STEPS[3].icon} alt="Step" />
                            </div>
                            <div className="work-item-info-container">
                                <p className="step-header"> 4. { STEPS[3].name } </p>
                                <p className="step-info"> { STEPS[3].info } </p>
                                { OPERATE_STEPS.map( (step, index) => (
                                    <WorkStepItem key={index} text={ step } />
                                ))}
                            </div>
                        </div>


                        {/* OLD CODE TO BRING BACK POSSIBLE */}
                        {/*{ STEPS.map( (step, index) => (*/}
                        {/*    <div key={index} className="work-item-container">*/}
                        {/*        <div className="work-item-icon-container">*/}
                        {/*            <img src={step.icon} alt="Step" />*/}
                        {/*        </div>*/}
                        {/*        <div className="work-item-info-container">*/}
                        {/*            <p className="step-header"> { index + 1}. { step.name } </p>*/}
                        {/*            <p className="step-info"> { step.info } </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>

                </div>

                {/*<Products />*/}
                <div className="gray-banner" />
                <FreeQuoteBanner />
                <WorkDisplayModal ref="workDisplayModal"/>
            </div>
        );
    }

    showWorkImage (index) {

        this.refs.workDisplayModal.setState({ src: MARKETING_IMAGES[index].src });
        this.refs.workDisplayModal.show();
    }
}

export default OurWork;


class WorkDisplayImage extends Component {


    render() {
        return (
            <div onClick={this.showImage} className="work-display-image-container">
                <img src={this.props.image.src} alt="Property"/>
            </div>
        )

    }

    showImage = () => {
        this.props.parent.props.parent.showWorkImage( this.props.index );
    }

}

class WorkDisplayModal extends Component {

    constructor(props){
        super(props);

        this.state = { hidden: true, src: null };

    }

    show() {
        this.setState({ hidden: false });
    }


    closeModal() {

        this.setState({hidden: true, src: null });
    }


    render() {
        if(this.state.src) {
            return (
                <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : '')} onClick={this.closeModal.bind(this)}>
                    <div className="view-work-modal-content">
                        <div className="view-work-image-container">
                            <img src={this.state.src} alt="Roofing"/>
                        </div>

                        <div className="view-work-icon-container">
                            <img className="doc-expand-icon" onClick={this.closeImage} src={ COLLAPSE_ICON } alt="Collapse Icon" />
                        </div>

                    </div>
                </div>
            );
        } else {
            return ( <div /> )
        }

    }

    closeImage = e => {
        e.preventDefault();
        this.setState ({ src: null, hidden: true });
    }
}