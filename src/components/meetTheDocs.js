import React, { Component } from 'react';


// Styling
import '../style/components/meetTheDocs.css';

// Images
import Mike from '../resources/images/MikeHeadshot.png';
import Oliver from '../resources/images/OliverHeadshot.jpg';


class MeetTheDocs extends Component {


    render() {
        return (

            <div className="meetTheDocs">
                <p className="pageHeader"> Meet The Docs </p>
                <div className="docsContainer">
                    <div className="docsView">
                        <div className="singleDocContainer">
                            <div className="docsViewImageContainer">
                                <img src={Mike} alt="Mike Harvey"/>
                            </div>
                            <p className="docName"> Michael Harvey </p>
                            <div className="docBio">
                                <p>Michael’s very first job was roofing at age 15. From there, he went on to receive a B.A. in International Affairs
                                    and an MBA in finance, only to end up right back where it all started. He’s had almost enough schooling to be an M.D.,
                                    but opted for his R.D. (Roof Doctorate) instead. Michael believes if you approach every endeavor with integrity, are
                                    uncompromising on quality, and remain committed to simplicity, success will abound.
                                    <br/><br/>

                                    (Michael is also a washed-up former college athlete. If you have a basketball hoop, he’ll be glad to show you)
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="docsView">
                        <div className="singleDocContainer">
                            <div className="docsViewImageContainer">
                                <img className="docsViewImage" src={Oliver} alt="Oliver Brown"/>
                            </div>
                            <p className="docName"> Oliver Brown </p>
                            <div className="docBio">
                                <p>Oliver once spent a summer loading shingles onto roofs and is very happy to have moved up the ladder in the
                                    roofing industry. Since that summer, he has earned his B.S. in Business Marketing & MBA from Mount St. Mary’s University in
                                    2013 & 2015, respectively. Oliver is a passionate sports fan, dog owner and food connoisseur who believes anything is
                                    possible with a gritty, positive mindset.
                                    <br/><br/>

                                    (Oliver is a “less washed-up” college basketball player than Michael and would love to prove that in anyones driveway.)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="docsFooter">
                    <p className="docsFooterMainText"> INTEGRITY. </p>
                    <p className="docsFooterSmallText" >
                        OUR ROOF DOCS AREN'T TRAINED TO DO THE RIGHT THING - WE JUST DON'T HIRE ANYONE UNLESS
                        WE KNOW THEY'LL <span className="docsImportant">NEVER</span> DO THE WRONG THING
                    </p>
                </div>
            </div>

        );
    }
}

export default MeetTheDocs;