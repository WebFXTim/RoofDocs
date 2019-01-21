import React, { Component } from 'react';
import _ from 'lodash';

import OurWorkInformation from './ourWorkInformation';


// Styling
import '../style/components/work.css';

import Home from '../resources/images/house.png';
import HomeGutters from '../resources/images/guttersHome.png';
import HomeSiding from '../resources/images/sidingHome.png';
import HomeWindowsDoors from '../resources/images/doorsWindowsHome.png';
import HomeRoofing from '../resources/images/roofingHome.png';
import local from '../resources/images/houseHotspot.png';
import icon from '../resources/images/homeClickIcon.png'



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

class OurWork extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = { selectedItem: '', displayImage: Home};

        this.windowResized = this.windowResized.bind(this)
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
            </div>


        );
    }
}

export default OurWork;