import React, { Component } from 'react';
import _ from 'lodash';

import OurWorkInformation from './ourWorkInformation';


// Styling
import '../style/components/work.css';

import Home from '../resources/images/house.png';
import local from '../resources/images/houseHotspot.png';

// MARK: - Colors for RGB Components
const colors = [

    {
        name: 'Windows/Doors',
        r: 246,
        g: 255,
        b: 0
    },
    {
        name: 'Roofing',
        r: 0,
        g: 85,
        b: 128
    },
    {
        name: 'Siding',
        r: 255,
        g: 0,
        b: 0
    },
    {
        name: 'Gutters',
        r: 15,
        g: 125,
        b: 0
    }

];

class OurWork extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = { selectedItem: '' };

        this.windowResized = this.windowResized.bind(this)
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
                within the body.  Click on the icons to see how our Roof Docs diagnose
                problems and prescribe remedies for your current exterior systems.</p>

                <div className="workImageMap" onClick={this.imageClicked.bind(this)}>
                    <img ref="homeImage" id="homeImage" className="homeImage" src={Home} alt="home" />
                    <canvas ref="canvas" id="homeCanvas" className="homeImageHotspot" />
                </div>

                <OurWorkInformation selected={ this.state.selectedItem }/>


                <div className="workFooter">
                    <p className="workFooterMainText"> QUALITY. </p>
                    <p className="workFooterSmallText" >
                        ROOF+ER HANDLES YOUR REMOLDING PROJECT WITH CARE OF A
                        <span className="workImportant">WORLD-CLASS</span> SURGEON. PRECISION,
                         CONSISTENCY, & ACCOUNTABILITY ON EVERY JOB
                    </p>
                </div>
            </div>


        );
    }
}

export default OurWork;