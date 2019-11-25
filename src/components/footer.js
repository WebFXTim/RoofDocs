
import React, { Component } from 'react';


// Styling
import '../style/components/footer.scss';

// import footerLogo from '../resources/images/footer/roof-er-slogin.png';
//
// import googleReviews from '../resources/images/footer/googleReviews.png';
// import roofERIcon from "../resources/images/logoSolo.png";

import FOOTER_BANNER from "../resources/images/misc/footer_banner.png";
import BANNER_ICON_DOWN from "../resources/images/misc/plus_icon_down.png";
import FOOTER_LOGO from '../resources/images/logos/logo_footer.png';
import PHONE_ICON from "../resources/images/social/icon_sm_phone_ko.png";
import EMAIL_ICON from "../resources/images/social/icon_sm_email_ko.png";
import MAP_ICON from "../resources/images/social/icon_sm_address_ko.png";
import GAF from '../resources/images/footer/gafCertified.png';
import FACEBOOK from '../resources/images/social/icon_sm_fb_inactive@2x.png'
import LINKEDIN from '../resources/images/social/icon_sm_li_inactive@2x.png'

const EMAIL = 'mailto:info@theroofdocs.com';
const EMAIL_ADDRESS = 'info@theroofdocs.com';
const PHONE = 'tel:7032393739';
const PHONE_TEXT = '703-239-3738';
const MAP = 'https://goo.gl/maps/Wgkc5zBYAESWUWPS8';
const ADDRESS = '3100 Clarendon Blvd. '//Ste. 200\n Arlington, VA 22201';


const HomeAdvisiorIcon = 'https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=85269159&key=8ada7f0ec568d330d285a447aaa81f61';
// const roofERHomeAdvisorLink = 'https://www.homeadvisor.com/rated.RoofER.85269159.html';
// const portalLink = 'https://portal.theroofdocs.com';
// const googleReviewsLink = 'https://www.google.com/search?client=safari&hl=en-us&output=search&q=ROOF-ER&ludocid=16180371932207541581&kgs=f6e05b70eaef79b0&shndl=-1&source=sh/x/kp/local&entrypoint=sh/x/kp/local&npsic=0&rflfq=1&rlha=0&rllag=38881417,-77293204,18387&tbm=lcl&rldimm=16180371932207541581&ved=2ahUKEwiiuZ6wtpnkAhVCiFkKHUwpCnkQvS4wAHoECAoQCA&rldoc=1&tbs=lrf:!3sIAE,lf:1,lf_ui:14&rlst=f#lrd=0x89b64b2fcb5573a1:0xe08c3a8b88ee6d4d,1,,,&rldoc=1'
//



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
                    <img src={FOOTER_BANNER} alt="Banner" />
                    <div className="footer-content">
                        <div className="footer-contact">
                            <img className="footer-logo-image" src={FOOTER_LOGO} />
                            <FooterContactIcon type="phone" link={PHONE} icon={PHONE_ICON} text={PHONE_TEXT}/>
                            <FooterContactIcon type="email" link={EMAIL} icon={EMAIL_ICON} text={EMAIL_ADDRESS}/>
                            <FooterContactIcon type="map" link={MAP} icon={MAP_ICON} text={ADDRESS}/>

                        </div>
                        <div className="footer-services">
                            <h3> Our Services </h3>
                            <p> Roofing </p>
                            <p> Siding </p>
                            <p> Gutters </p>
                            <p> Inspections </p>
                            <p> FAQs </p>
                            <p> Sign In </p>
                        </div>
                        <div className="footer-social">
                            <div className="social-links">
                                <img src={FACEBOOK} />
                                <img src={LINKEDIN} />
                            </div>

                            <div className="certs">
                                <img src={GAF} />
                                <img src={HomeAdvisiorIcon} />
                            </div>
                        </div>

                    </div>
                    <img className="banner-icon" src={BANNER_ICON_DOWN} />
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
                    <img src={this.props.icon} />
                    <label> { this.props.text }</label>
                </a>
            </div>
        );
    }
}