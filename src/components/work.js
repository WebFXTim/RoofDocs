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

import BANNER from "../resources/images/misc/background_banner.png";
import BANNER_ICON_UP from '../resources/images/misc/plus_icon_up.png';
import BANNER_ICON_DOWN from "../resources/images/misc/plus_icon_down.png";

import Roofing1 from '../resources/images/marketing/DSC_2143.JPG';
import Roofing2 from '../resources/images/marketing/fullsizeoutput_8a.jpeg';
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
import Roofing20 from '../resources/images/marketing/IMG_3410.jpg';
import Roofing21 from '../resources/images/marketing/IMG_3415.jpg';
import COLLAPSE_ICON from "../resources/images/misc/icon_closered.png";

const MARKETING_IMAGES = [
    { title: 'Roofing1', src: Roofing1 },
    { title: 'Roofing2', src: Roofing2 },
    { title: 'Roofing3', src: Roofing3 },
    { title: 'Roofing4', src: Roofing4 },
    { title: 'Roofing5', src: Roofing5 },
    { title: 'Roofing6', src: Roofing6 },
    { title: 'Roofing7', src: Roofing7 },
    { title: 'Roofing8', src: Roofing8 },
    { title: 'Roofing9', src: Roofing9 },
    { title: 'Roofing10', src: Roofing10 },
    { title: 'Roofing11', src: Roofing11 },
    { title: 'Roofing12', src: Roofing12 },
    { title: 'Roofing13', src: Roofing13 },
    { title: 'Roofing14', src: Roofing14 },
    { title: 'Roofing15', src: Roofing15 },
    { title: 'Roofing16', src: Roofing16 },
    { title: 'Roofing17', src: Roofing17 },
    { title: 'Roofing18', src: Roofing18 },
    { title: 'Roofing19', src: Roofing19 },
    { title: 'Roofing20', src: Roofing20 },
    { title: 'Roofing21', src: Roofing21 }
];

const STEPS = [
    { name: 'Inspect', icon: INSPECT, info: ['ROOF', <span className="logo-text">ER</span>, ' will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.']},
    { name: 'Diagnose', icon: DIAGNOSE, info: ['ROOF', <span className="logo-text">ER</span>, ' and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.']},
    { name: 'Prescribe', icon: PRESCRIBE, info: ['Your Roof Doc will provide you with an honest recommendation based on their findings. If damage is found, ROOF', <span className="logo-text">ER</span>,  ' may suggest filing an insurance claim.']},
    { name: 'Operate', icon: OPERATE, info: ['If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOF',  <span className="logo-text">ER</span>, '\'s install team take care of the rest. ']},

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
                    <img src={BANNER} alt="Banner" />
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

                        { STEPS.map( (step, index) => (
                            <div key={index} className="work-item-container">
                                <div className="work-item-icon-container">
                                    <img src={step.icon} alt="Step" />
                                </div>
                                <div className="work-item-info-container">
                                    <p className="step-header"> { index + 1}. { step.name } </p>
                                    <p className="step-info"> { step.info } </p>
                                </div>
                            </div>
                        ))}
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