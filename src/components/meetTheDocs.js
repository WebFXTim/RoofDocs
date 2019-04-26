import React, { Component } from 'react';


// Styling
import '../style/components/meetTheDocs.css';

// Images
import Mike from '../resources/images/MikeHeadshot.png';
import Alex from '../resources/images/AlexHeadshot.png';
import Oliver from '../resources/images/OliverHeadshot.png';
import Lee from '../resources/images/LeeZiegler.png';


class MeetTheDocs extends Component {


    render() {
        return (

            <div className="meetTheDocs">
                <p className="pageHeader"> Meet The Docs </p>
                <div className="docsContainer">
                    {/* Michael Harvey */}
                    <div className="docsView">
                        <div className="singleDocContainer">
                            <div className="docsViewImageContainer">
                                <img src={Mike} alt="Michael Harvey"/>
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
                    {/* Oliver Brown */}
                    <div className="docsView">
                        <div className="singleDocContainer">
                            <div className="docsViewImageContainer">
                                <img className="docsViewImage" src={Oliver} alt="Oliver Brown"/>
                            </div>
                            <p className="docName"> Oliver Brown </p>
                            <div className="docBio">
                                <p>Oliver once spent a summer loading shingles onto roofs and is very happy to have moved up the ladder in the
                                    roofing industry. Since that summer, he has earned his B.S. in Business Marketing & MBA from Mount St. Mary’s University in
                                    2013 & 2015, respectively. Oliver is a passionate sports fan, dog owner, and food connoisseur who believes anything is
                                    possible with a gritty, positive mindset.
                                    <br/><br/>

                                    (Oliver is a less "washed-up” college basketball player than Michael and would love to prove that in anyone's driveway.)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Alex Ortega */}
                    <div className="docsView">
                        <div className="singleDocContainer">
                            <div className="docsViewImageContainer">
                                <img src={Alex} alt="Alex Ortega"/>
                            </div>
                            <p className="docName"> Alex Ortega </p>
                            <div className="docBio">
                                <p>Alex was in the software development industry before switching over to roofing. He studied computer science
                                    at Boston University and played lacrosse as a Terrier. Alex loves dogs and long walks on the beach. His
                                    secret passion is cooking up a storm. Give him family recipes and you’ll make his day.
                                </p>
                                <br/><br/>
                            </div>

                        </div>
                    </div>

                    {/* Lee Gordon */}
                    <div className="docsView">
                        <div className="singleDocContainer">
                            <div className="docsViewImageContainer">
                                <img className="docsViewImage" src={Lee} alt="Lee Gordon"/>
                            </div>
                            <p className="docName"> Lee Gordon</p>
                            <div className="docBio">
                                <p>Lee is a lifelong roof climber and our resident quality control doc.  He went to Philadelphia University
                                    where he studied business law, and is an avid golfer.  He goes by "OCLee" for his attention to detail and spent
                                    time in college restoring stained glass in centuries old churches.
                                    <br/><br/>

                                    (Please don't bring up golf with Lee, he has a job to attend to, but he'll be happy to tee it up on the weekend.)
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