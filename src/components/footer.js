
import React, { Component } from 'react';


// Styling
import '../style/components/footer.css';


class Footer extends Component {


    render() {
        return (
            <footer>

                <div className="footerContainer">
                    <div className="footerItem">
                        {/*<i className="fas fa-phone fa-3x footerIcon" />*/}
                        {/*<p> 123-456-8890 </p>*/}
                        <i className="fas fa-phone fa-3x footerIcon footerLocationIcon" />
                        <div className="footerPhone">
                            <p> 703-239-3738 </p>
                        </div>
                    </div>
                    <div className="footerItem">
                        <i className="fas fa-map-pin fa-3x footerIcon footerLocationIcon footerIconPin" />
                        <div className="footerAddress">
                            <p> 3100 Clarendon Blvd <br/>
                                Ste 200 <br/>
                                Arlington, VA 22201
                            </p>
                        </div>
                    </div>
                    <div className="footerItem">
                        <i className="fas fa-info-circle fa-3x footerIcon footerLocationIcon" />
                        <div className="footerAddress">
                            <a className="footerLink" href="/"><p className="footerLinkText"> Home </p></a>
                            <a className="footerLink" href="/privacy"><p className="footerLinkText"> Privacy Policy </p></a>
                            <a className="footerLink" href="https://portal.theroofdocs.com"><p className="footerLinkText"> Customer Portal </p></a>
                        </div>
                    </div>
                </div>

                <div className="footerContainerMobile">
                    <div className="footerItemMobile" id="footerItemMobilePhone">
                        <i className="fas fa-phone fa-2x" />
                        <a href="tel:703-239-3738"><p id="mobilePhoneNumber">703-239-3738</p></a>

                    </div>

                    <div className="footerItemMobile" id="footerItemAddress">
                        <p id="mobileAddress">3100 Clarendon Blvd <br/> Ste 200 <br/> Arlington, VA 22201</p>
                    </div>

                    <div className="footerItemMobile noBorder" id="footerItemAddress">
                        <a className="footerLink" href="/"><p className="footerLinkTextMobile"> Home </p></a>
                        <a className="footerLink" href="/privacy"><p className="footerLinkTextMobile"> Privacy Policy </p></a>
                        <a className="footerLink" href="https://portal.theroofdocs.com"><p className="footerLinkTextMobile"> Customer Portal </p></a>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;