import React, { Component } from 'react';


// Styling
import '../style/components/faqs.scss';

// Image
import map from '../resources/images/FAQMap.JPG';


class FAQs extends Component {

    constructor(props){
        super(props);

        this.state = { activeIndex: 0 };

    }


    render() {
        return (

            <div className="faq-container">
                <p className="sectionTitle"> Frequently Asked Questions</p>

                {/* Does it Really Hail in Virginia */}
                <FAQItem parent={this}
                         index='1'
                         activeIndex={this.state.activeIndex}
                         image={map}
                         title="Does it really hail in Virginia?"
                         answer="The map below shows the swath of hail storms over the last three years. All of Northern Virginia has been effected by at least one storm
                         over that span. This does not guarantee that your home has storm damage; however, it does indicate the possibility that your property has been effected"
                />

                {/* I haven't had any issues */}
                <FAQItem parent={this}
                         index='2'
                         activeIndex={this.state.activeIndex}
                         title="I haven't had any issues, why should I worry about it now"
                         answer="Potential leaks due to roof damage can remain latent for quite some time. If left unattended, the exposed layer of asphalt will begin deteriorating
                         ue to UV exposure and thermal shock. Eventually, the asphalt layer will crack, allowing water to find a way into the home and leading to more costly repairs"
                />

                {/* Why would insurance pay */}
                <FAQItem parent={this}
                         index='3'
                         activeIndex={this.state.activeIndex}
                         title="Why would insurance pay for my roof and/or siding?"
                         answer='The map below shows the swath of hail storms over the last three years. All of Northern Virginia has been effected by at least one storm
                         over that span. This does not guarantee that your home has storm damage; however, it does indicate the possibility that your property has been effected'
                />

                {/* Will my premiums go up */}
                <FAQItem parent={this}
                         index='4'
                         activeIndex={this.state.activeIndex}
                         title="Will my premium go up for an insurance claim?"
                         answer="It is illegal for insurance companies to raise premiums due to natural disasters. However, insurance companies have to assess risk somehow, and
                         when severe storms do affect an area, typically that entire zip code will see an increase in their property insurance rates. As a result, it is in your
                         best interest to file a claim anytime there has been a significant storm and your property has been properly assessed for damage"
                />

                {/* How much will I have to pay */}
                <FAQItem parent={this}
                         index='5'
                         activeIndex={this.state.activeIndex}
                         title="How much will I have to pay?"
                         answer="If your claim is approved for a roof or siding replacement, your only out-of-pocket expense is your deductible. Additional expenses are only
                         incurred if you elect to pay for upgrades or would like additional work done not included in the original scope of repairs"
                />

                {/* Multiple Estimates */}
                <FAQItem parent={this}
                         index='6'
                         activeIndex={this.state.activeIndex}
                         title="Why shouldn't I get multiple estimates?"
                         answer="Many insurance companies will encourage policyholders to get multiple estimates after a severe weather event. While there are instances when
                         insurance companies write a fair and proper estimate, it remains rare that the initial estimate provided is not low-balled in some way. Encouraging
                         policyholders to get multiple estimates is often times an attempt to lower the insurance company's payout for the claim, as they are only required to
                         pay the lowest bid for the work to be done. However, chances are, the lowest bid will not be the highest quality work"
                />

                {/* ROOFER */}
                <FAQItem parent={this}
                         index='7'
                         activeIndex={this.state.activeIndex}
                         title="Why should I work with ROOFER?"
                         answer="When a storm affects your neighborhood, you should seek help from an experienced, honest, fair, and local contractor who will assess your
                         damages and assist you through the storm restoration process. At ROOFER, we have experience handling hundreds of storm restoration projects each
                         year and maintain an uncompromising commitment to serving every customer with integrity, quality, and simplicity"
                />

            </div>
        );
    }
}


class FAQItem extends Component {

    render() {


        if(this.props.image) {
            return (
                <div className="faq-question-header">
                    <p className="faq-question-title" style={(parseInt(this.props.index) !== this.props.activeIndex) ?
                        { borderBottomLeftRadius: '10px',  borderBottomRightRadius: '10px'} :
                        {borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}
                       onClick={this.setActive}> {this.props.title} </p>
                    <div
                        className={"faq-question-answer-container " + (parseInt(this.props.index) === this.props.activeIndex ? 'active' : '')}>
                        <p>{this.props.answer}</p>
                        <img className="faq-image" src={this.props.image} alt="Damage Map" />
                    </div>

                </div>
            );
        } else {
            return (
                <div className="faq-question-header">
                    <p className="faq-question-title" style={(parseInt(this.props.index) !== this.props.activeIndex) ? {
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px'
                    } : {borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}
                       onClick={this.setActive}> {this.props.title} </p>
                    <div
                        className={"faq-question-answer-container " + (parseInt(this.props.index) === this.props.activeIndex ? 'active' : '')}>
                        <p>{this.props.answer}</p>
                    </div>

                </div>
            );
        }
    }

    setActive = e => {
        e.preventDefault();

        const index = parseInt(this.props.index);
        this.props.parent.setState ({ activeIndex: index });
    }
}

export default FAQs;