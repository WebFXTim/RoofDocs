import React, { Component } from 'react';

import FreeQuote from "./custom/freeQuoteBanner";

// Styling
import '../style/components/meetTheDocs.scss';

// Images
import Mike from '../resources/images/employees/MikeHarvey.png';
import ChrisDavis from '../resources/images/employees/ChrisDavis.png';
import Oliver from '../resources/images/employees/OliverBrown.png';
import Matt from '../resources/images/employees/MattFoster.png';
import Rees from '../resources/images/employees/ReesNalley.png';
import GregCampbell from '../resources/images/employees/GregCampbell.png';
import DaveGolladay from '../resources/images/employees/DaveGolladay.png';

import BANNER_ICON_UP from "../resources/images/misc/plus_icon_up.png";
import EXPAND_ICON from "../resources/images/misc/icon_plusred.png";
import COLLAPSE_ICON from "../resources/images/misc/icon_closered.png";

const MIKE_BIO = 'Michael’s very first job was roofing at age 15. From there, he went on to receive a B.A. in International Affairs and an MBA in finance, only to end up right back ' +
    'where it all started. He’s had almost enough schooling to be an M.D., but opted for his R.D. (Roof Doctorate) instead. Michael believes if you approach every endeavor with integrity, ' +
    'are uncompromising on quality, and remain committed to simplicity, success will abound. (Michael is also a washed-up former college athlete. If you have a basketball hoop, he’ll be ' +
    'glad to show you)';
const OLIVER_BIO = 'Oliver once spent a summer loading shingles onto roofs and is very happy to have moved up the ladder in the roofing industry. Since that summer, he has earned his B.S. in ' +
    'Business Marketing & MBA from Mount St. Mary’s University in2013 & 2015, respectively. Oliver is a passionate sports fan, dog owner, and food connoisseur who believes anything is ' +
    'possible with a gritty, positive mindset. (Oliver is a less "washed-up” college basketball player than Michael and would love to prove that in anyone\'s driveway.)';
const MATT_BIO = 'Matt has over 5 years of experience in the Roofing/Home Remodeling industry.  Before that he attended West Virginia University in which he achieved majors in ' +
    'Communication Studies, History, and Criminology.  Matt’s previous jobs were in logistics with the Department of Defense, freight brokering, and medical device sales. He enjoys spending ' +
    'time near the water, his Goldendoodle Willis, and friends and family.  Matt finds his  gratitude through helping homeowners and improving the look of our neighborhoods. He is convinced ' +
    'he holds the title of Mr. Basketball in the office.';
const REES_BIO = 'Rees was introduced to the home remodeling industry just out of college when he worked as a site supervisor for a family member’s construction company. While there, he ' +
    'discovered a deep satisfaction for improving the quality of people’s homes and decided to make it his career. Before his work there, Rees graduated from Mount St. Mary’s University ' +
    'where he achieved a B.A. in History and played four years of rugby as a Mountaineer. When Rees isn’t on the job he’s in the gym, on a boat, or on the rugby pitch.';
const CHRIS_BIO = 'Chris is not the ideal candidate to inspect a roof, which is why he\'s kept behind a desk.  Chris has a bachelor\'s degree in Computer Science, and is in charge of software development with The Roof ' +
    'Docs.  He enjoys streamlining business processes through software, which helps the Docs when they\'re out in the field.  He\'s slowly learning the industry, who knows, maybe one day he\'ll be qualified enough ' +
    'to help with your inspection';
const GREG_BIO = 'Greg went to Shepherd University before moving to California in 1994 where he entered the roofing industry by delivering material to roof tops all over the SoCal area. Greg came back to ' +
    'the DMV area, played Semi-Pro football, and has worked for roofing suppliers and installers for the past 20+ years. As our production manager Greg has a strong belief that the customer should receive ' +
    'comprehensive service on each and every job. Greg and his wife Jenn have 2 boys in elementary school and enjoy watching them play sports.';
const DAVE_BIO = 'David is no stranger to the DC Metropolitan area, as he has spent his entire life here and even attended Bowie State University where ' +
    'he graduated with a Bachelor of Arts in Communications. David also played basketball at Bowie State University and won a Conference Championship in ' +
    '2013.  Prior to working with RoofER, David worked in the financial field, educating families on how best to build and maintain wealth. Now David uses ' +
    'these skills to help clients maintain their home. Always a competitor, David is eager to offer the very best deals for his clients. David brings an ' +
    'in depth knowledge of residential properties, as he doubles as a Realtor in Maryland and Washington, D.C.';


const DOCS = [
    { name: 'Michael Harvey', position: 'President / Job Lead', photo: Mike, bio: MIKE_BIO },
    { name: 'Oliver Brown', position: 'Manager', photo: Oliver, bio: OLIVER_BIO },
    { name: 'Chris Davis', position: 'Manager', photo: ChrisDavis, bio: CHRIS_BIO },
    { name: 'Matt Foster', position: 'Team Leader', photo: Matt, bio: MATT_BIO },
    { name: 'Rees Nalley', position: 'President / Job Lead', photo: Rees, bio: REES_BIO },
    { name: 'Greg Campbell', position: 'Team Leader', photo: GregCampbell, bio: GREG_BIO },
    { name: 'Dave Golladay', position: 'Team Leader', photo: DaveGolladay, bio: DAVE_BIO },
];

class MeetTheDocs extends Component {


    render() {
        return (

            <div className="meet-the-docs-container">

                <div className="docs-banner">
                    <div className="docs-banner-text-container">
                        <p className="banner-text-small"> INTEGRITY </p>
                        <p className="banner-text-large"> Honesty First. And Second. And Third... </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} alt="Banner Icon" />
                </div>

                <p className="docs-oath"> Our Hippocratic Oath: to hold a fiduciary responsibility to each and every one of our customers through a commitment to our core values of integrity, quality, and simplicity </p>

                <div className="docs-list-container">
                    { DOCS.map( (doc,index) => (
                        <DocDisplay key={doc.name} parent={this} doc={doc} index={index} />
                    ))}
                </div>

                <div className="gray-banner" />
                <FreeQuote />

                <ViewDocModal ref="viewDoc"/>
            </div>
        );
    }

    showDoc(index) {

        // TODO: Set Doc
        this.refs.viewDoc.setState({ doc: DOCS[index]});
        this.refs.viewDoc.show();
    }
}

class DocDisplay extends Component {

    showDocBio = e => {

        e.preventDefault();
        this.props.parent.showDoc( this.props.index);
    };

    render()  {

        return (
            <div className="doc-container">
                <div className="doc-image-container">
                    <img src={this.props.doc.photo} alt={this.props.doc.name}/>
                </div>
                <div className="doc-icon-container">
                    <img className="doc-expand-icon" onClick={this.showDocBio} src={ EXPAND_ICON } alt="Doc Bio"/>
                </div>
                {/*<p className="doc-position"> {this.props.doc.position }</p>*/}
                <p className="doc-name"> {this.props.doc.name }</p>
            </div>
        )
    }
}


export default MeetTheDocs;

class ViewDocModal extends Component {

    constructor(props){
        super(props);

        this.state = { hidden: true, doc: null };

    }

    show() {
        this.setState({ hidden: false });
    }


    closeModal() {

        this.setState({hidden: true});
    }


    render() {
        if(this.state.doc) {
            return (
                <div className= {"modalContainer" + (this.state.hidden ? ' hiddenModal' : '')} onClick={this.closeModal.bind(this)}>
                    <div className="view-doc-modal-content">

                        <div className="doc-container-modal">
                            <div className="doc-image-container-modal">
                                <img src={this.state.doc.photo} alt={this.state.doc.name}/>
                            </div>
                            <div className="doc-icon-container-modal">
                                <img className="doc-expand-icon" onClick={this.closeBio} src={ COLLAPSE_ICON } alt="Collapse Bio"/>
                            </div>
                            {/*<p className="doc-position"> {this.state.doc.position }</p>*/}
                            <p className="doc-name"> {this.state.doc.name }</p>
                            <div className="doc-bio-modal-content">
                                <p> { this.state.doc.bio }</p>
                            </div>
                        </div>

                    </div>
                </div>
            );
        } else {
            return ( <div /> )
        }

    }

    closeBio = e => {
        e.preventDefault();
        this.setState ({ doc: null, hidden: true });
    }
}
