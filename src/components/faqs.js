import React, { Component } from 'react';


// Styling
import '../style/components/faqs.scss';

// Banner
import BANNER_ICON_UP from '../resources/images/misc/plus_icon_up.png';
import EXPAND_ICON from "../resources/images/misc/icon_plusred.png";
import COLLAPSE_ICON from "../resources/images/misc/icon_closered.png";
import FAQMap from "../resources/images/FAQMap.JPG";


const insurancePay = "1. Insurance companies include coverage for hail and wind damage because they are events out of your control, also known as Acts of God. Property damage resulting from a " +
    "storm is not an act of negligence or directly attributable to someone that can be held accountable. If homeowner's insurance didn't cover these events, why have it at all? 2. When your roof is " +
    "damaged by a hail or wind event, it is in the best interest of the insurance company to pay to replace it before more significant issues arise such as water-saturated insulation and/or drywall repairs";



class FAQQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = { collapsed: true };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
    }

    updateWindowDimensions() {
        if(window.innerWidth < 620) {
            this.setState({ collapsed: false });
        }
    }


    render() {
        if(this.props.src) {
            return (
                <div className="question-container">
                    <div className="question-text-container">
                        <p className="question-text"> { this.props.questionText } </p>
                        <img alt="Expand" onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="faq-action-icon-image" src={ this.state.collapsed ? EXPAND_ICON : COLLAPSE_ICON } />
                    </div>
                    <div className={'question-answer-container' + (this.state.collapsed ? '' : ' expanded')}>
                        <p className="question-answer-text"> { this.props.questionAnswer } </p>
                        <img src={this.props.src} alt="" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="question-container">
                    <div className="question-text-container">
                        <p className="question-text"> { this.props.questionText } </p>
                        <img alt="Expand" onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="faq-action-icon-image" src={ this.state.collapsed ? EXPAND_ICON : COLLAPSE_ICON } />
                    </div>
                    <div className={'question-answer-container' + (this.state.collapsed ? '' : ' expanded')}>
                        <p className="question-answer-text"> { this.props.questionAnswer } </p>
                    </div>
                </div>
            );
        }


    }
}

class FAQs extends Component {

    constructor(props){
        super(props);

        this.state = { activeIndex: 0 };

    }


    render() {
        return (

            <div className="faq-container">
                <div className="faq-banner">
                    <div className="faq-banner-text-container">
                        <p className="banner-text-small"> Get the Basics, Then give us a call </p>
                        <p className="banner-text-large"> Frequently Asked Questions </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} alt="Banner Icon Up" />
                </div>

                <div className="faq-questions-content" key="test">

                    <FAQQuestion key="1"
                                 questionText={["Why should I work with ROOF", <span className="black-text" key="3">ER</span>, "?"]}
                                 questionAnswer={["When a storm affects your neighborhood, you should seek help from an experienced, honest, fair, and local contractor who will assess your damages and assist you through the storm restoration process. At ROOF", <span className="logo-text" key="3">ER</span>, ', we have experience handling hundreds of storm restoration projects each year and maintain an uncompromising commitment to serving every customer with integrity, quality, and simplicity']}
                    />

                    <FAQQuestion key="2"
                        questionText="Does it really hail in Virginia?"
                        questionAnswer="The map below shows the swath of hail storms over the last three years. All of Northern Virginia has been affected by at least one storm over that span. This does not guarantee that your home has storm damage; however, it does indicate the possibility that your property has been affected"
                        src={FAQMap}
                    />

                    <FAQQuestion key="3"
                        questionText="I haven't had any issues, why should I worry about it now?"
                        questionAnswer="Potential leaks due to roof damage can remain latent for quite some time. If left unattended, the exposed layer of asphalt will begin deteriorating
                         due to UV exposure and thermal shock. Eventually, the asphalt layer will crack, allowing water to find a way into the home and leading to more costly repairs"
                    />

                    <FAQQuestion key="4"
                        questionText="Why would insurance pay for my roof and/or siding?"
                        questionAnswer={insurancePay}
                    />

                    <FAQQuestion key="5"
                        questionText="Will my premium go up for an insurance claim?"
                        questionAnswer='It is illegal for insurance companies to raise premiums due to natural disasters. However, insurance companies have to assess risk somehow, and
                         when severe storms do affect an area, typically that entire zip code will see an increase in its property insurance rates. As a result, it is in your
                         best interest to file a claim anytime there has been a significant storm and your property has been properly assessed for damage'
                    />

                    <FAQQuestion key="6"
                        questionText="How much will I have to pay?"
                        questionAnswer="If your claim is approved for a roof or siding replacement, your only out-of-pocket expense is your deductible. Additional expenses are only
                         incurred if you elect to pay for upgrades or would like additional work done not included in the original scope of repairs"
                    />

                    <FAQQuestion key="7"
                        questionText="Why shouldn't I get multiple estimates?"
                        questionAnswer="Many insurance companies will encourage policyholders to get multiple estimates after a severe weather event. While there are instances when
                         insurance companies write a fair and proper estimate, it remains rare that the initial estimate provided is not low-balled in some way. Encouraging
                         policyholders to get multiple estimates is often times an attempt to lower the insurance company's payout for the claim, as they are only required to
                         pay the lowest bid for the work to be done. However, chances are, the lowest bid will not be the highest quality work"
                    />



                </div>
            </div>
        );
    }
}

export default FAQs;