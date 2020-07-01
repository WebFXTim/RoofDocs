import React, { Component } from 'react';


import '../style/components/navigation.scss';
import logo from '../resources/images/logos/logo_main.png';
import { NavLink } from "react-router-dom";
import LINKEDIN_ICON from '../resources/images/social/icon_sm_li_inactive.png';
import FACEBOOK_ICON from '../resources/images/social/icon_sm_fb_inactive.png';
import EMAIL_ICON from '../resources/images/social/icon_sm_email.png';
import PHONE_ICON from '../resources/images/social/icon_sm_phone.png';
import SLASH from '../resources/images/misc/nav_divline.png';


const PORTAL = 'https://portal.theroofdocs.com';
const LINKEDIN = 'https://www.linkedin.com/company/the-roof-docs-llc/';
const FACEBOOK = 'https://www.facebook.com/theroofdocs/';
const EMAIL = 'mailto:info@theroofdocs.com';
const EMAIL_ADDRESS = 'info@theroofdocs.com';
const PHONE = 'tel:7032393739';
const PHONE_TEXT = '703-239-3738';


class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = { collapsed: false, showSubnav: false };
    }

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
                        <NavLink onClick={this.navLinkClicked} className="nav-tag" exact to="/">
                            <div className="navigationItem navigationLogo">
                                <img alt="logo" src={logo} />
                            </div>
                        </NavLink>
                    </div>

                    <div className="navigation-items-container">
                        <i className="fa fa-bars"  aria-hidden="true"  onClick={ () => this.setState({ collapsed: !this.state.collapsed })} />
                        <div className={`navigation-links-container ${this.state.collapsed ? "is-expanded" : ""}`}>
                            <NavLink onClick={this.navLinkClicked} className="nav-tag-mobile-only" id="mission" to='/mission'>
                                <div className="subNavigationItem"> Our Mission</div>
                            </NavLink>
                            <NavLink onClick={this.navLinkClicked} className="nav-tag-mobile-only" id="values" to='/values'>
                                <div className="subNavigationItem"> Our Values</div>
                            </NavLink>
                            <NavLink onClick={this.navLinkClicked} className="nav-tag-mobile-only" id="docs" to='/docs'>
                                <div className="subNavigationItem"> Our Team</div>
                            </NavLink>
                            <div className="nav-tag" id="aboutTag" >
                                <div onClick={this.navLinkClicked} id="about" className="navigationItem">
                                    About Us
                                </div>
                                <div className={`about-expanded ${this.state.showSubnav ? ' showSub' : ''}`}>
                                    <NavLink onClick={this.navLinkClicked} className="nav-tag" id="mission" to='/mission'>
                                        <div className="subNavigationItem"> Our Mission</div>
                                    </NavLink>
                                    <NavLink onClick={this.navLinkClicked} className="nav-tag" id="values" to='/values'>
                                        <div className="subNavigationItem"> Our Values</div>
                                    </NavLink>
                                    <NavLink onClick={this.navLinkClicked} className="nav-tag" id="docs" to='/docs'>
                                        <div className="subNavigationItem"> Our Team</div>
                                    </NavLink>
                                </div>
                                <img src={SLASH} alt="Separator"/>
                            </div>
                            <NavLink onClick={this.navLinkClicked} className="nav-tag" to='/work'>
                                <div className="navigationItem">
                                    Our Work
                                </div>
                                <img src={SLASH} alt="Separator"/>
                            </NavLink>
                            <NavLink onClick={this.navLinkClicked} className="nav-tag" to='/inspection'>
                                <div className="navigationItem">
                                    Inspection
                                </div>
                                <img src={SLASH} alt="Separator"/>
                            </NavLink>
                            <NavLink onClick={this.navLinkClicked} className="nav-tag" to='/faqs'>
                                <div className="navigationItem">
                                    FAQs
                                </div>
                                <img src={SLASH} alt="Separator"/>
                            </NavLink>
                            <a href={PORTAL} target="_blank" rel="noopener noreferrer" >
                                <div className="navigationItem">
                                    Sign In
                                </div>
                            </a>
                        </div>
                        <a href="/inspection"><button className="navigation-free-inspection-button"> Get a Free Inspection </button></a>
                    </div>
                    <div className="navigation-items-container-mobile">

                    </div>
                </div>
            </div>
        );
    }


    navLinkClicked = e => {


        // Toggle Subnav
        if(e.target.id === 'about'){
            this.setState({ showSubnav: !this.state.showSubnav });
        } else {
            this.setState({ showSubnav: false });
        }

        this.setState ({ collapsed: false });

    }
}

class SocialMediaIcon extends Component {

    render() {
        return (
            <div className={`sm-icon ${this.props.type}-icon`}>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.icon} alt={this.props.type}/>
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
                    <img src={this.props.icon} alt="Contact"/>
                    <label> { this.props.text }</label>
                </a>
            </div>
        );
    }

}

export default Navigation;