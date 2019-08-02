
import React, { Component } from 'react';


// Styling
import '../style/components/footer.scss';

import footerLogo from '../resources/images/footer/roof-er-slogin.png';
import gafCertified from '../resources/images/footer/gafCertified.png';
import googleReviews from '../resources/images/footer/googleReviews.png';
import roofERIcon from "../resources/images/logoSolo.png";

const HomeAdvisiorIcon = 'http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=85269159&key=8ada7f0ec568d330d285a447aaa81f61';
const roofERHomeAdvisorLink = 'http://www.homeadvisor.com/rated.RoofER.85269159.html';
const portalLink = 'https://portal.theroofdocs.com';


class Footer extends Component {


    constructor(props) {
        super(props)

        this.state = { year: new Date().getFullYear() }
    }


    render() {
        return (
            <footer>
                <div className="footer-about">
                    <div className="about-image">
                        <img className="footer-logo" src={footerLogo} alt="RoofER" />
                    </div>
                    <div className="about-info">
                        <p> Address: <span> 3100 Clarendon Blvd. Ste. 200, Arlington, VA 22201</span> </p>
                        <p> Phone: <a className="footer-link-tag" href="tel:7032393738"><span> 703-239-3738 </span></a></p>
                        <p> Email:  <a className="footer-link-tag" href="mailto:info@theroofdocs.com"><span> info@theroofdocs.com </span></a> </p>
                        <p> Class A License:  <span> 2705169915 </span> </p>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-links-container">
                        <a className="footer-href" href="work">
                            <div className="single-footer-link-container">
                                <img src={roofERIcon} alt="RoofER" className="footer-link-icon" />
                                <p className="footer-link-label">Our Work</p>
                            </div>
                        </a>
                        <a className="footer-href" href="docs">
                            <div className="single-footer-link-container">
                                <img src={roofERIcon} alt="RoofER" className="footer-link-icon" />
                                <p className="footer-link-label">Meet The Docs</p>
                            </div>
                        </a>
                        <a className="footer-href" href="inspection">
                            <div className="single-footer-link-container">
                                <img src={roofERIcon} alt="RoofER" className="footer-link-icon" />
                                <p className="footer-link-label">Inspection</p>
                            </div>
                        </a>
                        <a className="footer-href" href="faqs">
                            <div className="single-footer-link-container">
                                <img src={roofERIcon} alt="RoofER" className="footer-link-icon" />
                                <p className="footer-link-label">FAQs</p>
                            </div>
                        </a>
                        <a className="footer-href" href={portalLink} target="_blank" rel="noopener noreferrer" >
                            <div className="single-footer-link-container">
                                <img src={roofERIcon} alt="RoofER" className="footer-link-icon" />
                                <p className="footer-link-label">Sign-in</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer-approval">
                    <div className="approval-top-images">
                        <div className="footer-image-left-container">
                            <a href="https://g.co/kgs/5NRKBM" target="_blank" rel="noopener noreferrer" >
                                <img src={googleReviews} className="footer-brands-left-image" alt="5 Start Google Reviews" />
                            </a>
                        </div>
                        <div className="footer-image-right-container">
                            <a href={roofERHomeAdvisorLink} target="_blank" rel="noopener noreferrer" > <img src={HomeAdvisiorIcon} className="footer-brands-right-image" alt="HomeAdvisor Screened & Approved" /></a>
                        </div>

                    </div>
                    <div className="approval-bottom-images">
                        <img className="gaf-bottom-image" src={gafCertified} alt="GAF" />
                    </div>
                </div>
                <div className="footer-privacy-copyright">
                    <p className="footer-item"> Copyright &#169; {this.state.year } RoofER | </p>
                    <a href="/privacy"><p className="footer-item">  Privacy Policy </p></a>
                </div>
            </footer>
        );
    }
}

export default Footer;
