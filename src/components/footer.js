
import React, { Component } from 'react';


// Styling
import '../style/components/footer.scss';

import BANNER_ICON_DOWN from "../resources/images/misc/plus_icon_down.png";
// import FOOTER_LOGO from '../resources/images/logos/logo_footer.png';
import FOOTER_LOGO from '../resources/images/logos/logo_footer_alt.png';
import PHONE_ICON from "../resources/images/social/icon_sm_phone_ko.png";
import EMAIL_ICON from "../resources/images/social/icon_sm_email_ko.png";
import MAP_ICON from "../resources/images/social/icon_sm_address_ko.png";
import GAF from '../resources/images/footer/gafCertified.png';
import HomeAdvisiorIcon from '../resources/images/footer/home-advisor.png';
import FACEBOOK from '../resources/images/social/icon_sm_fb_inactive@2x.png'
import LINKEDIN from '../resources/images/social/icon_sm_li_inactive@2x.png'

const EMAIL = 'mailto:info@theroofdocs.com';
const EMAIL_ADDRESS = 'info@theroofdocs.com';
const PHONE = 'tel:7032393739';
const PHONE_TEXT = '703-239-3738';
const MAP = 'https://www.google.com/maps?cid=16180371932207541581&hl=en';
const ADDRESS = ['2106 Gallows Rd Ste D', <br key="1"/> ,'Tysons, VA 22182'];



    // 'https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=85269159&key=8ada7f0ec568d330d285a447aaa81f61';
const roofERHomeAdvisorLink = 'https://www.homeadvisor.com/rated.RoofER.85269159.html';
const LINKEDIN_LINK = 'https://www.linkedin.com/company/the-roof-docs-llc/';
const FACEBOOK_LINK = 'https://www.facebook.com/theroofdocs/';




class Footer extends Component {


    constructor(props) {
        super(props);

        this.state = { year: new Date().getFullYear() }
    }


    render() {

        const year = new Date().getFullYear()

        return (
            <div className="footer">
                <div className="footer-banner">
                    <div className="footer-content">
                        <div className="footer-contact">
                            <img className="footer-logo-image" src={FOOTER_LOGO} alt="Footer Logo"/>
                            <FooterContactIcon type="phone" link={PHONE} icon={PHONE_ICON} text={PHONE_TEXT}/>
                            <FooterContactIcon type="email" link={EMAIL} icon={EMAIL_ICON} text={EMAIL_ADDRESS}/>
                            <FooterContactIcon type="map" link={MAP} icon={MAP_ICON} text={ADDRESS}/>

                        </div>
                        <div className="footer-services">
                            <h3> Our Services </h3>
                            <a href="/work"><p><span className="service-icon"> + </span> Roofing </p></a>
                            <a href="/work"><p><span className="service-icon"> + </span> Siding </p></a>
                            <a href="/work"><p><span className="service-icon"> + </span> Gutters </p></a>
                            <a href="/inspection"><p><span className="service-icon"> + </span> Inspections </p></a>
                            <a href="/faqs"><p><span className="service-icon"> + </span> FAQs </p></a>
                            <a href="https://portal.theroofdocs.com/" rel="noopener noreferrer" target="_blank"><p><span className="service-icon"> + </span> Sign In </p></a>
                        </div>
                        <div className="footer-social">
                            <div className="social-links">
                                <a href={FACEBOOK_LINK} rel="noopener noreferrer" target="_blank"><img src={FACEBOOK} alt="Facebook"/></a>
                                <a href={LINKEDIN_LINK} rel="noopener noreferrer" target="_blank"><img src={LINKEDIN} alt="LinkedIn"/></a>
                            </div>

                            <div className="certs">
                                <img src={GAF} alt="GAF"/>
                                <a href={roofERHomeAdvisorLink} rel="noopener noreferrer" target="_blank">
                                    <img src={HomeAdvisiorIcon} alt="HomeAdvisor"/>
                                </a>
                            </div>
                        </div>

                    </div>
                    <img className="banner-icon" src={BANNER_ICON_DOWN} alt="Banner Icon"/>
                </div>
                <div className="footer-copyright">
                    <p className="copyright-text"> Copyright &#169; { year } RoofER </p>
                    <p className="copyright-text"> | </p>
                    <a className="policy-text" href="/privacy"> Privacy Policy </a>
                </div>
            </div>
        );
    }
}

export default Footer;


class FooterContactIcon extends Component {

    render() {
        return (
            <div className={ "footer-contact-icon " + this.props.type} >
                <a href={this.props.link} rel="noopener noreferrer">
                    <img src={this.props.icon} alt={this.props.type}/>
                    <label> { this.props.text }</label>
                </a>
            </div>
        );
    }
}