import React, { Component } from 'react';


import '../style/components/navigation.scss';
import logo from '../resources/images/logos/logo_main.png';
import { NavLink } from "react-router-dom";
import LINKEDIN_ICON from '../resources/images/social/icon_sm_li_inactive.png';
import FACEBOOK_ICON from '../resources/images/social/icon_sm_fb_inactive.png';
import EMAIL_ICON from '../resources/images/social/icon_sm_email.png';
import PHONE_ICON from '../resources/images/social/icon_sm_phone.png';
import SLASH from '../resources/images/misc/nav_divline.jpg';


const PORTAL = 'https://portal.theroofdocs.com';
const LINKEDIN = 'https://www.linkedin.com/company/the-roof-docs-llc/';
const FACEBOOK = 'https://www.facebook.com/theroofdocs/';
const EMAIL = 'mailto:info@theroofdocs.com';
const EMAIL_ADDRESS = 'info@theroofdocs.com';
const PHONE = 'tel:7032393739';
const PHONE_TEXT = '703-239-3738';


class Navigation extends Component {

    render() {
        return (
            <div className="navigation" id="navigation">
                {/* Navigation Container */}
                <div className="nav-info-bar">
                    <SocialMediaIcon type="facebook" link={FACEBOOK} icon={FACEBOOK_ICON}/>
                    <SocialMediaIcon type="linked-in" link={LINKEDIN} icon={LINKEDIN_ICON}/>
                    <ContactIcon link={PHONE} icon={PHONE_ICON} text={PHONE_TEXT}/>
                    <ContactIcon link={EMAIL} icon={EMAIL_ICON} text={EMAIL_ADDRESS}/>
                </div>
                {/* Navigation Links */}
                <div className="nav-link-container">
                    <div className="navigation-logo-container">
                        <NavLink className="nav-tag" exact to="/">
                            <div className="navigationItem navigationLogo">
                                <img alt="logo" src={logo} />
                            </div>
                        </NavLink>
                    </div>
                    <div className="navigation-items-container">
                        <NavLink className="nav-tag" to='/work'>
                            <div className="navigationItem">
                                Our Work
                            </div>
                            <img src={SLASH}/>
                        </NavLink>
                        <NavLink className="nav-tag" to='/docs'>
                            <div className="navigationItem">
                                Meet the Docs
                            </div>
                            <img src={SLASH}/>
                        </NavLink>
                        <NavLink className="nav-tag" to='/inspection'>
                            <div className="navigationItem">
                                Inspection
                            </div>
                            <img src={SLASH}/>
                        </NavLink>
                        <NavLink className="nav-tag" to='/faqs'>
                            <div className="navigationItem">
                                FAQs
                            </div>
                            <img src={SLASH}/>
                        </NavLink>
                        <a href={PORTAL} target="_blank" rel="noopener noreferrer" >
                            <div className="navigationItem">
                                Sign In
                            </div>
                        </a>
                        <button className="navigation-free-inspection-button"> Get a Free Inspection </button>
                    </div>
                </div>
            </div>
        );
    }
}

class SocialMediaIcon extends Component {

    render() {
        return (
            <div className={`sm-icon ${this.props.type}-icon`}>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.icon} />
                </a>
            </div>
        );
    }

}

class ContactIcon extends  Component {
    render() {
        return (
            <div className="contact-icon">
                <a href={this.props.link} rel="noopener noreferrer">
                    <img src={this.props.icon} />
                    <label> { this.props.text }</label>
                </a>
            </div>
        );
    }

}

export default Navigation;