import React, { Component } from 'react';

import FreeQuote from "./custom/freeQuoteBanner";
import Products from './custom/products';

// Styling
import '../style/components/meetTheDocs.scss';

// Images
import Mike from '../resources/images/employees/MikeHeadshot.png';
import Alex from '../resources/images/employees/AlexHeadshot.png';
import Oliver from '../resources/images/employees/OliverHeadshot.png';
import Matt from '../resources/images/employees/MattFoster.png';
import Rees from '../resources/images/employees/ReesNalley.png';
import AlexJavad from '../resources/images/employees/AlexJavad.png';

import BANNER from "../resources/images/misc/background_banner.png";
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
const ALEX_BIO = 'Alex was in the software development industry before switching over to roofing. He studied computer science at Boston University and played lacrosse as a Terrier. Alex ' +
    'loves dogs and long walks on the beach. His secret passion is cooking up a storm. Give him family recipes and you’ll make his day.';
const ALEX_JAVAD_BIO = 'Alex graduated with a degree in Computer Science from the University of California at Berkeley in 2013. After spending some time consulting in technology, ' +
    'he decided he would rather do something more expansive. With an interest in people, helping out, and seeing new places, he found himself fitting in naturally here at Roof-ER';


const DOCS = [
    { name: 'Michael Harvey', position: 'President / Job Lead', photo: Mike, bio: MIKE_BIO },
    { name: 'Oliver Brown', position: 'Manager', photo: Oliver, bio: OLIVER_BIO },
    { name: 'Matt Foster', position: 'Team Leader', photo: Matt, bio: MATT_BIO },
    { name: 'Rees Nalley', position: 'President / Job Lead', photo: Rees, bio: REES_BIO },
    { name: 'Alex Ortega', position: 'Manager', photo: Alex, bio: ALEX_BIO },
    { name: 'Alex Javad', position: 'Team Leader', photo: AlexJavad, bio: ALEX_JAVAD_BIO },
];

class MeetTheDocs extends Component {


    render() {
        return (

            <div className="meet-the-docs-container">

                <div className="docs-banner">
                    <img src={BANNER} alt="Banner" />
                    <div className="docs-banner-text-container">
                        <p className="banner-text-small"> INTEGRITY </p>
                        <p className="banner-text-large"> Honesty First. And Second. And Third... </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} />
                </div>

                <div className="docs-list-container">
                    { DOCS.map( (doc,index) => (
                        <DocDisplay key={doc.name} parent={this} doc={doc} index={index} />
                    ))}
                </div>

                <Products />
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
                    <img src={this.props.doc.photo} />
                </div>
                <div className="doc-icon-container">
                    <img className="doc-expand-icon" onClick={this.showDocBio} src={ EXPAND_ICON } />
                </div>
                <p className="doc-position"> {this.props.doc.position }</p>
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
                                <img src={this.state.doc.photo} />
                            </div>
                            <div className="doc-icon-container-modal">
                                <img className="doc-expand-icon" onClick={this.closeBio} src={ COLLAPSE_ICON } />
                            </div>
                            <p className="doc-position"> {this.state.doc.position }</p>
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
