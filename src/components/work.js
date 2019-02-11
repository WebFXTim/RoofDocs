import React, { Component } from 'react';
import _ from 'lodash';

import OurWorkInformation from './ourWorkInformation';


// Styling
import '../style/components/work.css';
import '../style/components/modal.css'

import Home from '../resources/images/house.png';
import HomeGutters from '../resources/images/guttersHome.png';
import HomeSiding from '../resources/images/sidingHome.png';
import HomeWindowsDoors from '../resources/images/doorsWindowsHome.png';
import HomeRoofing from '../resources/images/roofingHome.png';
import local from '../resources/images/houseHotspot.png';
import icon from '../resources/images/homeClickIcon.png'

import roofing from '../resources/images/roofing.png';
import siding from '../resources/images/siding.png';
import gutters from '../resources/images/gutters.png';
import doors from '../resources/images/doors.png';



// MARK: - Colors for RGB Components
const colors = [

    {
        name: 'Doors & Windows',
        r: 255,
        g: 238,
        b: 0
    },
    {
        name: 'Roofing',
        r: 255,
        g: 2,
        b: 2
    },
    {
        name: 'Siding',
        r: 18,
        g: 0,
        b: 255
    },
    {
        name: 'Gutters',
        r: 4,
        g: 114,
        b: 9
    }

];



class MobileWorkModal extends Component {

    constructor(props){
        super(props);

        this.state = { hidden: true, name: '', img: null, prescription: '', diagnosis: '' };

    }

    show() {
        this.setState({ hidden: false });
    }


    setSelected( item ) {

        this.setState({selectedItem: item});

        // Logic
        let diagnosis = '';
        let prescription = '';
        let name = '';
        let img = '';
        switch (item){
            case 'roofing':

                name = 'Roofing';
                img = roofing;
                prescription = 'When our Roof Docs find the symptoms of an ineffective roofing system, ' +
                    'ROOF-ER prescribes a standard solution: a GAF Lifetime roofing system';
                diagnosis = 'Our Roof Docs are trained how to properly diagnose potential issues with your roof.  ' +
                    'Symptoms they look for include hail & wind damage, granule loss, streaking, blistering, and more.  ' +
                    'Call us today to set up your free home check-up!';

                break;
            case 'siding':

                name = 'Siding';
                img = siding;
                prescription = 'If your Roof Doc finds any ailments with your current siding material, your home may need a ' +
                    'ROOF-ER siding prescription: a CertainTeed premium vinyl siding replacement.';
                diagnosis = 'ur Roof Docs are able to perform check-ups on all forms of siding including vinyl, wood, aluminum, ' +
                    'steel, stucco and more. Call us today to set up your free home check-up!';

                break;
            case 'windows':

                name = 'Doors & Windows';
                img = doors;
                prescription = 'Today\'s homes require custom fitting doors and windows to operate at optimal efficiency. ' +
                    'Our Roof Docs will perform a thorough assessment of your windows & doors to determine the proper treatment.';
                diagnosis = 'Whether it\'s seal failure, draftiness, or cracked/warped framing, our Roof Docs are able ' +
                    'to detect the cause of your home\'s symptoms and prescribe an effective solution. Call today to have a Roof ' +
                    'Doc give your windows & doors a free check-up!';
                break;
            case 'gutters':

                name = 'Gutters';
                img = gutters;
                prescription = 'If a Roof Doc notices any of the symptoms described in the diagnosis during your free check-up, ' +
                    'ROOF-ER will prescribe an appropriate treatment.  If a full gutter replacement is necessary, our Roof Docs ' +
                    'will document all required information for a custom-fitting gutter system.';
                diagnosis = 'Your gutter system faces a number of potential ailments including clogging, being improperly secured, ' +
                    'ineffective draining from the downspouts, leaks, etc. Call a Roof Doc today to schedule a free check-up to ' +
                    'ensure your gutter system is functioning properly!';
                break;
            default: break;
        }

        // Update State
        this.setState({name, img, prescription, diagnosis});

    }


    closeModal() {

        this.setState({hidden: true});
    }


    render() {
        return (
            <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : '')} onClick={this.closeModal.bind(this)}>
                <div className="modalContentWorkMobile">

                    <p className="workHeaderDisplay">
                        {this.state.name}
                    </p>

                    <img className="workMobileImage" src={this.state.img} alt={this.state.name} />

                    <p className="workItemHeader">DIAGNOSIS</p>
                    <p className="workItemModalDescription">{this.state.diagnosis}</p>

                    <p className="workItemHeader">PRESCRIPTION</p>
                    <p className="workItemModalDescription">{this.state.prescription}</p>


                    <button className="workMobileCloseButton">Close</button>

                </div>

            </div>
        );
    }
}

class OurWork extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = { selectedItem: '', displayImage: Home};

        this.windowResized = this.windowResized.bind(this)
        this.serviceItemClicked.bind(this);

    }


    // Mouse moves inside home container
    // Determine if user is over a spot
    // And update information
    onMouseMove(e) {

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const home = this.refs.homeImage;

        // Query
        const imageData = ctx.getImageData(e.nativeEvent.offsetX, e.nativeEvent.offsetY, home.width, home.height);
        const red = imageData.data[0];
        const green = imageData.data[1];
        const blue = imageData.data[2];//

        const obj = _.find(colors, function (c) {
            return c.r === red && c.g === green && c.b === blue;
        });

        if(obj) {
            switch (obj.name) {
                case 'Doors & Windows':
                    this.setState({displayImage: HomeWindowsDoors});
                    break;
                case 'Roofing':
                    this.setState({displayImage: HomeRoofing});
                    break;
                case 'Gutters':
                    this.setState({displayImage: HomeGutters});
                    break;
                case 'Siding':
                    this.setState({displayImage: HomeSiding});
                    break;
                default:
                    this.setState({displayImage: Home});
                    break;
            }
        } else {
            switch (this.state.selectedItem) {
                case 'Doors & Windows':
                    this.setState({displayImage: HomeWindowsDoors});
                    break;
                case 'Roofing':
                    this.setState({displayImage: HomeRoofing});
                    break;
                case 'Gutters':
                    this.setState({displayImage: HomeGutters});
                    break;
                case 'Siding':
                    this.setState({displayImage: HomeSiding});
                    break;
                default:
                    this.setState({displayImage: Home})
                    break;
            }
        }
    }


    // Handle Window Resizing
    windowResized(){

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const home = this.refs.homeImage;

        // Draw Canvas Image
        let img = new Image();
        img.src = local;

        img.onload = () => {
            canvas.width = home.width;
            canvas.height = home.height;
            ctx.drawImage(img, 0, 0, home.width, home.height);
        };

    }

    serviceItemClicked = e => {


        // e.target.id
        this.refs.mobileWorkModal.setSelected(e.target.id);
        this.refs.mobileWorkModal.show();

        // roofing, siding, windows, doors
    };

    // Draw image to canvas when component mounts
    componentDidMount(){

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const home = this.refs.homeImage;

        // Draw Canvas Image
        let img = new Image();
        img.src = local;

        img.onload = () => {
            canvas.width = home.width;
            canvas.height = home.height;
            ctx.drawImage(img, 0, 0, home.width, home.height);
        };

        window.addEventListener("resize", this.windowResized, false);
    }

    // Remove event listener from window
    componentWillUnmount(){
        window.removeEventListener("resize", this.windowResized, false);
    }

    // Mouse moves inside home container
    // Determine if user is over a spot
    // And update information
    imageClicked(e) {

        // TODO: Catch Undefined for Canvas
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const home = this.refs.homeImage;

        // Query
        const imageData = ctx.getImageData(e.nativeEvent.offsetX, e.nativeEvent.offsetY, home.width, home.height);
        const red = imageData.data[0];
        const green = imageData.data[1];
        const blue = imageData.data[2];//

        const obj = _.find(colors, function (c) {
            return c.r === red && c.g === green && c.b === blue;
        });

        if(obj) {
            this.setState({selectedItem: obj.name});
        }
    }

    // Standard render function
    render() {
        return (
            <div className="ourWork">
                <p className="pageHeader"> Our Work </p>

                <p className="workIntro"> The exterior of your home functions similarly to various systems
                within the body.  Click on the various <img className="clickIcon" src={icon} alt="icon"/> icons to see how our Roof Docs diagnose
                problems and prescribe remedies for your current exterior systems.</p>

                <div className="workImageMap" onMouseMove={this.onMouseMove.bind(this)} onClick={this.imageClicked.bind(this)}>
                    <img ref="homeImage" id="homeImage" className="homeImage" src={this.state.displayImage} alt="home" />
                    <canvas ref="canvas" id="homeCanvas" className="homeImageHotspot" />
                </div>

                <OurWorkInformation selected={ this.state.selectedItem }/>


                <div className="workFooter">
                    <p className="workFooterMainText"> QUALITY. </p>
                    <p className="workFooterSmallText" >
                        ROOF-ER HANDLES YOUR REMODELING PROJECT WITH THE CARE OF A
                        <span className="workImportant">WORLD-CLASS</span> SURGEON. PRECISION,
                         CONSISTENCY, & ACCOUNTABILITY ON EVERY JOB
                    </p>
                </div>

                <div className="ourServices" id="ourServices">
                    <div className="servicesContainer">
                        <ul>
                            <li className="servicesItemLinked">
                                <div className="servicesItem">
                                    {/*<img src={roofing} alt="roofing" />*/}
                                    <p onClick={this.serviceItemClicked} id="roofing" className="servicesItemHeader">ROOFING</p>
                                    {/*<p className="description">*/}
                                        {/*ROOF-ER uses premium GAF roofing materials and GAF factory certified installers*/}
                                        {/*to ensure your new roof functions as a holistic roofing system, guaranteeing quality and longevity*/}
                                    {/*</p>*/}
                                </div>
                            </li>
                            <li className="servicesItemLinked">
                                <div className="servicesItem">
                                    {/*<img src={siding} alt="siding" />*/}
                                    <p onClick={this.serviceItemClicked} id="siding" className="servicesItemHeader">SIDING</p>
                                    {/*<p className="description">*/}
                                        {/*We offer CertainTeed siding products and a 10-year labor warranty to ensure your new*/}
                                        {/*siding replacement provides beauty, efficiency, and durability for years to come*/}
                                    {/*</p>*/}
                                </div>
                            </li>
                            <li className="servicesItemLinked">
                                <div className="servicesItem">
                                    {/*<img src={siding} alt="siding" />*/}
                                    <p  onClick={this.serviceItemClicked} id="windows" className="servicesItemHeader">WINDOWS & DOORS</p>
                                    {/*<p className="description">*/}
                                    {/*We offer CertainTeed siding products and a 10-year labor warranty to ensure your new*/}
                                    {/*siding replacement provides beauty, efficiency, and durability for years to come*/}
                                    {/*</p>*/}
                                </div>
                            </li>
                            <li className="servicesItemLinked noBottomBorder">
                                <div className="servicesItem">
                                    {/*<img src={gutters} alt="gutters" />*/}
                                    <p onClick={this.serviceItemClicked} id="gutters" className="servicesItemHeader">GUTTERS</p>
                                    {/*<p className="description">*/}
                                        {/*Our gutter systems use high quality aluminum and custom fitting to properly divert*/}
                                        {/*and drain excess water during heavy rain storms*/}
                                    {/*</p>*/}
                                </div>
                            </li>
                        </ul>

                        <MobileWorkModal ref="mobileWorkModal"/>
                    </div>
                </div>

            </div>


        );
    }
}

export default OurWork;