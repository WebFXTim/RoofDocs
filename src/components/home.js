import React, { Component } from 'react';
import FieldGroup from './custom/fieldGroup';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Checkbox from './checkbox';
import axios from 'axios';

// Styling
import '../style/components/home.scss';

// Images
import home from '../resources/images/homeImage.jpg';
import integrity from '../resources/images/integrity.png';
import simplicity from '../resources/images/simplicity.png'
import quality from '../resources/images/quality.png';
import roofingIcon from '../resources/images/roofIcon.png';
import roofingWhatWeDo from '../resources/images/Roofing.jpg';
import sidingWhatWeDo from '../resources/images/HardiePlankSiding.jpg';
import sidingIcon from '../resources/images/sidingIcon.png';
import guttersIcon from '../resources/images/guttersIcon.png';
import guttersWhatWeDo from '../resources/images/SeamlessGutter.jpg';

// Brands
import gaf from '../resources/images/brands/gaf.png';
import iko from '../resources/images/brands/iko.png';
import certainTeed from '../resources/images/brands/certainTeed.png';
import jamesHardie from '../resources/images/brands/jamesHardie.png';
import plyGem from '../resources/images/brands/plyGem.png';
import leafSentry from '../resources/images/brands/leafSentry.png';

// How We Do It
import inspect from '../resources/images/inspect.png'
import assist from '../resources/images/assist.png'
import install from '../resources/images/install.png'
import roofERIcon from '../resources/images/logoSolo.png';

class Modal extends Component {

    constructor(props){
        super(props);

        this.state = { hidden: true };

    }

    show() {
        this.setState({ hidden: false });
    }


    closeModal() {

        this.setState({hidden: true});
    }


    render() {
        return (
            <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : '')} onClick={this.closeModal.bind(this)}>
                <div className="modalContent">

                    <p className="modalHeader">Please correct errors on the following fields and submit again</p>

                    { this.props.errors.map(err => (
                        <p key={err} className="errorItem"> {err} </p>
                    ))}


                    <button className="errorOkButton">Got It!</button>

                </div>

            </div>
        );
    }
}


class Home extends Component {


    constructor(props) {
        super(props);

        this.state = { formSubmitted: false, errors: [ ], phoneNumber: ''};
    }

    phoneChanged = e => {


        let phone = '';

        const cleaned = ('' + e.target.value).replace(/\D/g, '');
        const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            phone = ['(', match[2], ') ', match[3], '-', match[4]].join('')
        } else {
            phone = e.target.value;
        }

        this.setState({ phoneNumber: phone })

    };

    submitForm = e => {

        e.preventDefault();

        // Create Body for API Call
        const body = {
            name: e.target.elements[0].value,
            email: e.target.elements[1].value,
            phoneNumber: e.target.elements[2].value,
            address: e.target.elements[3].value,
            stormDamage: this.refs.damage.state.checked,
            roof: this.refs.roof.state.checked,
            siding: this.refs.siding.state.checked,
            gutters: this.refs.gutters.state.checked,
            details: e.target.elements[8].value,
            requestType: 'inspection'
        };

        let errors = [];

        // NAME
        if(body.name.length === 0) {
            errors.push("Name");
        }

        // EMAIL
        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(body.email.toLowerCase())){
            errors.push("Email");
        }

        // PHONE NUMBER
        if(body.phoneNumber.length < 10) {
            errors.push("Phone Number")
        }

        if(errors.length === 0) {

            const self = this;
            axios.post('https://api.theroofdocs.com/v1/inquiry', body)
                .then(function (response) {

                    self.setState({ formSubmitted: true });

                    // TODO: Clear Text Fields

                })
                .catch(function (error) {
                    console.log(error);
                    alert('Error submitting request, please try again or call The Roof Docs directly at 703-239-3738')
                });


        } else {


            this.setState({ errors });
            this.refs.errorModal.show();
        }
    };


    render() {
        return (

            <div className="home">
                <div className="main">
                    <section id="who">
                        <div className="home-container">

                            <div className="free-inspection" style={ this.state.formSubmitted ? {display: 'none'} : { display: 'inline-block'}}>
                                <p className="sectionTitle noBottomMargin"> Free Inspection </p>
                                <p className="sectionSubheader"> Please use the form below to set up a <span className="nameEnding">FREE</span> inspection by one of our Roof Docs today! </p>
                                <form onSubmit={this.submitForm}>
                                    <FieldGroup
                                        id="formControlsName"
                                        type="text"
                                        label="NAME"
                                        placeholder="Enter Name"
                                    />
                                    <FieldGroup
                                        id="formControlsEmail"
                                        type="email"
                                        label="EMAIL"
                                        placeholder="Enter Email"
                                    />
                                    <FieldGroup
                                        id="formControlsPhone"
                                        type="phone"
                                        label="PHONE NUMBER"
                                        value={this.state.phoneNumber}
                                        onChange={this.phoneChanged}
                                        placeholder="Enter Phone Number"
                                    />
                                    <FieldGroup
                                        id="formControlsAddress"
                                        type="address"
                                        label="ADDRESS"
                                        placeholder="Enter Address"
                                    />
                                    <FormGroup className="formGroupCustom">
                                        <ControlLabel className="estimateControlLabel">INSPECTION ITEMS</ControlLabel>
                                        <Checkbox ref="roof" name="ROOF"/>
                                        <Checkbox ref="siding" name="SIDING"/>
                                        <Checkbox ref="gutters" name="GUTTERS"/>
                                        <Checkbox ref="damage" name="STORM DAMAGE"/>
                                    </FormGroup>

                                    {/* MORE DETAILS */}
                                    <FormGroup className="formGroupCustom formGroupDetails" controlId="formControlsTextarea">
                                        <ControlLabel className="estimateControlLabel">More Details</ControlLabel>
                                        <FormControl className="descriptionTextArea" componentClass="textarea" placeholder="Enter more information..." />
                                    </FormGroup>
                                    <Button className="submitButton" type="submit">Submit</Button>
                                </form>
                                <Modal errors={this.state.errors} ref="errorModal" />
                            </div>
                            <div className="free-inspection" style={ !this.state.formSubmitted ? {display: 'none'} : { display: 'inline-block'}}>
                                <p className="sectionTitle noBottomMargin"> Free Inspection </p>
                                <p className="sectionText"> Thank you for submitting your information! You will be contacted by one of our
                                    Roof Docs within one business day. To learn more about our process, <a href="/inspection#process">click here</a>
                                </p>
                            </div>
                            <div className="who-we-are">
                                <p className="sectionTitle"> Who we are </p>
                                <p className="sectionText">ROOF<span className="nameEnding">ER</span> is a team of dedicated professionals
                                    specializing in storm restoration projects in Northern Virginia and Maryland.  We are aware of the poor reputation
                                    attributed to roofing contractors and have made it our mission to stamp out that stigma by providing
                                    personalized, unparalleled service to our customers.  Our Roof Docs are trained to handle every project with
                                    the care and integrity a patient would expect to receive from their own doctor.  With a commitment to integrity, quality,
                                    and simplicity, ROOF<span className="nameEnding">ER</span> has become the most trusted name in the storm
                                    restoration industry.  Call ROOF<span className="nameEnding">ER</span> at <a href="tel:7032393738"> (703) 239-3738 </a>
                                    or use the inspection tool to the right to have our Roof Docs provide you with the proper prescription for
                                    your home's ailments.
                                </p>
                            </div>
                            <img src={home} className="homeImage" alt="Home"/>

                        </div>

                    </section>

                    <section id="values">
                        <p className="sectionTitle independent"> What we value </p>
                        <div className="values-container">
                            <div className="value-item">
                                <div className="value-item-container integrity">
                                    <img src={integrity} alt="Integrity" className="value-item-icon" />
                                    <p className="value-item-label">Integrity</p>
                                </div>
                                <div className="value-item-content">
                                    <p className="sectionText">
                                        Great businesses are built on trust: trust in the people, the process, and the product.
                                        ROOF<span className="nameEnding">ER</span>'s commitment to integrity starts with our training methods
                                        and continues through our final quality inspection.  Customers know what to expect from us and as a result,
                                        are confident in referring us to their friends and family.  ROOF<span className="nameEnding">ER</span> is
                                        proud to say 90% of our new customers are referrals.
                                    </p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-item-container quality">
                                    <img src={quality} alt="Quality" className="value-item-icon" />
                                    <p className="value-item-label">Quality</p>
                                </div>
                                <div className="value-item-content">
                                    <p className="sectionText">
                                        Sustainability doesn't come through shortcuts.  By focusing on quality from start-to-finish,
                                        ROOF<span className="nameEnding">ER</span> is quickly becoming the premier roofing contractor in
                                        Northern Virginia and Maryland for those customers looking for a restoration project done right.  Whether it is our
                                        detailed inspections or our quality assurance protocol, we focus on every last detail to ensure our
                                        customers know they've received the best service available.
                                    </p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-item-container simplicity">
                                    <img src={simplicity} alt="Simplicity" className="value-item-icon" />
                                    <p className="value-item-label">Simplicity</p>
                                </div>
                                <div className="value-item-content">
                                    <p className="sectionText">
                                        Complexity = chaos.  After a storm, this equation has the potential to become even worse.
                                        ROOF<span className="nameEnding">ER</span> understands what homeowners want most after a storm: peace
                                        of mind and a straightforward process to restoring their home.  Leveraging technology and emphasizing
                                        simplicity allows ROOF<span className="nameEnding">ER</span> to offer an unrivaled value proposition: an
                                        expert restoration project with minimal headaches.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section id="what">
                        <p className="sectionTitle independent"> What we do </p>
                        <div className="what-we-do-container">
                            <div className="what-we-do-item">
                                <div className="what-we-do-item-container">
                                    <img src={roofingIcon} alt="Roofing" className="what-we-do-item-icon" />
                                    <p className="what-we-do-item-label">Roofing</p>
                                </div>


                                <div className="what-we-do-image-container">
                                    <img src={roofingWhatWeDo} className="what-we-do-image" alt="What we do - Roofing"/>
                                        <a href="/work#roofing">
                                            <div className="what-we-do-image-overlay">
                                                <div className="what-we-do-image-text">Learn More</div>
                                            </div>
                                        </a>
                                </div>

                                <div className="brands-container">
                                    <div className="image-left-container">
                                        <img src={gaf} className="brands-left-image" id="gaf-logo" alt="GAF"/>
                                    </div>
                                    <div className="image-right-container">
                                        <img src={iko} className="brands-right-image" id="iko-logo" alt="IKO" />
                                    </div>
                                </div>
                            </div>
                            <div className="what-we-do-item">
                                <div className="what-we-do-item-container">
                                    <img src={sidingIcon} alt="Siding" className="what-we-do-item-icon" />
                                    <p className="what-we-do-item-label">Siding</p>
                                </div>

                                <div className="what-we-do-image-container">
                                    <img src={sidingWhatWeDo} className="what-we-do-image" alt="What we do - Siding"/>
                                    <a href="/work#siding">
                                        <div className="what-we-do-image-overlay">
                                            <div className="what-we-do-image-text">Learn More</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="brands-container">
                                    <div className="image-left-container">
                                        <img src={certainTeed} className="brands-left-image" id="certainTeed-logo" alt="Certain Teed" />
                                    </div>
                                    <div className="image-right-container">
                                        <img src={jamesHardie} className="brands-right-image" alt="James Hardie" />
                                    </div>
                                </div>
                            </div>
                            <div className="what-we-do-item">
                                <div className="what-we-do-item-container">
                                    <img src={guttersIcon} alt="Gutters" className="what-we-do-item-icon"  />
                                    <p className="what-we-do-item-label">Gutters</p>
                                </div>
                                <div className="what-we-do-image-container">
                                    <img src={guttersWhatWeDo} className="what-we-do-image" alt="What we do - Gutters"/>
                                    <a href="/work#gutters">
                                        <div className="what-we-do-image-overlay">
                                            <div className="what-we-do-image-text">Learn More</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="brands-container">
                                    <div className="image-left-container">
                                        <img src={plyGem} className="brands-left-image" alt="Ply Gem" />
                                    </div>
                                    <div className="image-right-container">
                                        <img src={leafSentry} className="brands-right-image" alt="Leaf Sentry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How We Do It */}
                    <section id="how">
                        <p className="sectionTitle independent"> How we do it </p>
                        <div className="values-container">
                            <div className="value-item">
                                <div className="value-item-container how-we-do-it-item">
                                    <img src={inspect} alt="Inspect" className="value-item-icon" />
                                    <p className="value-item-label">Inspect</p>
                                </div>
                                <div className="value-item-content">
                                    <p className="sectionText">
                                        ROOF<span className="nameEnding">ER</span>'s Roof Docs will perform a full storm-damage inspection for your property
                                        to find evidence of wind and/or hail damage.  Your Roof Docs will review the findings with you and determine whether or not
                                        a claim through your homeowner's insurance is warranted.
                                    </p>
                                    <div className="learn-more-container">
                                        <img src={roofERIcon} alt="RoofER" className="learn-more-icon" />
                                        <a href="/inspection"><p className="learn-more-label">LEARN MORE</p></a>
                                    </div>
                                </div>

                            </div>
                            <div className="value-item">
                                <div className="value-item-container how-we-do-it-item">
                                    <img src={assist} alt="Assist" className="value-item-icon" />
                                    <p className="value-item-label">Assist</p>
                                </div>
                                <div className="value-item-content">
                                    <p className="sectionText">
                                        Homeowner's claims can have a lot of moving parts, resulting in a lot of confusion.
                                        ROOF<span className="nameEnding">ER</span> guides you through the process in a streamlined fashion while acting within
                                        the boundaries of the law.  Beware of contractors practicing unlawful Public Adjusting.
                                    </p>
                                    <div className="learn-more-container">
                                        <img src={roofERIcon} alt="RoofER" className="learn-more-icon" />
                                        <a href="/inspection"><p className="learn-more-label">LEARN MORE</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-item-container how-we-do-it-item">
                                    <img src={install} alt="Install" className="value-item-icon" />
                                    <p className="value-item-label">Install</p>
                                </div>
                                <div className="value-item-content">
                                    <p className="sectionText">
                                        Once your claim has been approved and finalized with insurance, ROOF<span className="nameEnding">ER</span> will review
                                        the scope of work with you, discuss installation details, and schedule an installation date.
                                        ROOF<span className="nameEnding">ER</span>'s on-site project manager will oversee the job and perform a full quality
                                        inspection upon completion.
                                    </p>
                                    <div className="learn-more-container">
                                        <img src={roofERIcon} alt="RoofER" className="learn-more-icon" />
                                        <a href="/inspection"><p className="learn-more-label">LEARN MORE</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <ul id="pagination" >
                    <li> <a className="pagination-link" href="#navigation"> </a></li>
                    <li> <a className="pagination-link" href="#values"> </a></li>
                    <li> <a className="pagination-link" href="#what"> </a></li>
                    <li> <a className="pagination-link" href="#how"> </a></li>
                </ul>
            </div>


        );
    }
}

export default Home;