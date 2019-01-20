
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
                        <i className="fas fa-map-pin fa-3x footerIcon footerLocationIcon" />
                        <div className="footerAddress">
                            <p> 2010 Corporate Ridge <br/>
                                Suite 700 <br/>
                                McLean, VA 22102
                            </p>
                        </div>
                    </div>
                    <div className="footerItem">
                        <i className="fas fa-info-circle fa-3x footerIcon footerLocationIcon" />
                        <div className="footerAddress">
                            <a className="footerLink" href="/tos"><p className="footerLinkText"> Terms of Service </p></a>
                            <a className="footerLink" href="/privacy"><p className="footerLinkText"> Privacy Policy </p></a>
                            <a className="footerLink" href="https://portal.theroofdocs.com"><p className="footerLinkText"> Client Portal </p></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;