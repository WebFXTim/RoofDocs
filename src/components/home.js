import React, { Component } from 'react';


import GoogleReviews from "./custom/googleReviews";
import Process from './custom/process';
import Products from './custom/products';


import axios from 'axios';

// Styling
import '../style/components/home.scss';

// IMAGES
import ROOFING from '../resources/images/home/img_hp_roofing.jpg';
import ROOFING_MINI from '../resources/images/home/icon_sq_roofing.png';
import SIDING from '../resources/images/home/img_hp_siding.jpg';
import SIDING_MINI from '../resources/images/home/icon_sq_siding.png';
import GUTTERS from '../resources/images/home/img_hp_gutters.jpg';
import GUTTERS_MINI from '../resources/images/home/icon_sq_gutters.png';
import ARROW_ICON from '../resources/images/misc/btn_icon_arrow_rd.png';
import WorkBanner from "./custom/workBanner";


// How We Do It
// import inspect from '../resources/images/inspect.png'
// import assist from '../resources/images/assist.png'
// import install from '../resources/images/install.png'
// import roofERIcon from '../resources/images/logoSolo.png';

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
                <div className="intro">
                    <div className="intro-basics">
                        <p className="intro-header"> The RoofDocs Difference </p>
                        <p className="intro-description"> A FREE, HONEST roof inspection. Every time. </p>
                        <a href="inspection">
                            <div className="free-inspection-button-container">
                                <p className="home-inspection-label"> Sign Up For A Free Inspection </p>
                                <img className="home-inspection-img" src={ARROW_ICON} alt="Arrow" />
                            </div>
                        </a>

<<<<<<< HEAD
                    </div>
                </div>
=======
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
>>>>>>> 3c9300d6944b50324a05715645a8bb03935791fe

                <div className="whatWeDo" id="whatWeDo" >
                    <div className="content">
                        <p className="smallText"> ROOF-ER SERVICES </p>
                        <p className="largeText"> What we do. </p>
                        <div className="services-container">
                            <div className="single-service-container">
                                <img className="main-service-image" src={ROOFING} alt="Roofing"/>
                                <img className="service-mini-image" src={ROOFING_MINI} alt="Roofing Icon" />
                                <p className="service-header" id="roofing" > Roofing </p>
                                <p className="service-description"> Our roofers are fully trained and certified to remedy any roofing issue your home may face. We are The Roof Docs for a reason.</p>
                                <a href="/work#roofing"><p className="learn-more-link"> Learn More > </p></a>
                            </div>
                            <div className="single-service-container">
                                <img className="main-service-image" src={SIDING} alt="Siding" id="siding"/>
                                <img className="service-mini-image" src={SIDING_MINI} alt="Siding Icon" />
                                <p className="service-header"> Siding </p>
                                <p className="service-description"> While not in the name, our siding team treats your home like you'd expect to be treated during surgery - with great care and precision. </p>
                                <a href="/work#siding"><p className="learn-more-link"> Learn More > </p></a>
                            </div>
                            <div className="single-service-container">
                                <img className="main-service-image" src={GUTTERS} alt="Gutters" id="gutters" />
                                <img className="service-mini-image" src={GUTTERS_MINI} alt="Gutters Icon" />
                                <p className="service-header"> Gutters </p>
                                <p className="service-description"> Your gutters mean a great deal to the health of your home. That's why our team ensures each install follows local best practices. </p>
                                <a href="/work#gutters"><p className="learn-more-link"> Learn More > </p></a>
                            </div>
                        </div>
                    </div>
                </div>

                <Process />
                <WorkBanner />
                <Products />
                <GoogleReviews />

            </div>


        );
    }
}

export default Home;