import React, { Component } from 'react';


// STYLING
import '../../style/components/custom/selectInput.scss';
import Inspect from "../../resources/images/inputIcons/icon_sm_inspect_gry.png";

const OPTIONS  = ['Referral/recommendation', 'Doorhanger', 'Mailer', 'Spoke to a Rep', 'Google', 'Facebook', 'Other Online Search', 'Other'];


class SelectInput extends Component {


    constructor(props){
        super(props);

        this.state = { value: null, referral: null }
    }




    render() {

        return (
            <div className="select-input-container">
                <div className="image-multi-select-info">
                    <img src={Inspect} alt="Multi Select"/>
                    <p> How did you hear about us? </p>
                </div>
                <select onChange={this.valueChanged}>
                    <option key={0} value={null}> { 'Select...' } </option>
                    { OPTIONS.map( (opt, index) => (
                        <option key={index} value={opt}> { opt } </option>
                    ))}
                </select>
                <input maxLength={100} style={this.state.value === 'Referral/recommendation' || this.state.value === 'Doorhanger' ? { display: 'block'} : {display: 'none'}} onChange={this.referralChanged} value={ this.state.referral ? this.state.referral : '' } placeholder='Referral /Code '/>
            </div>
        );
    }

    valueChanged = e => {

        this.setState({ value: e.target.value, referral: null });
    };

    referralChanged = e => {
        this.setState({ referral: e.target.value });
    };
}

export default SelectInput;