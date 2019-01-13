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
                        <img src={Mike} alt="Mike Harvey"/>
                        <p className="docName"> Mike Harvey </p>
                        <div className="docBio">

                        </div>
                    </div>
                    <div className="docsView">
                        <img src={Oliver} alt="Oliver Brown"/>
                        <p className="docName"> Oliver Brown </p>
                        <div className="docBio">

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