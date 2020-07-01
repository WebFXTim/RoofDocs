import React, { Component } from 'react';
import _ from 'lodash';

// STYLING
import '../../style/components/custom/selectInput.scss';
import Inspect from "../../resources/images/inputIcons/icon_sm_inspect_gry.png";

const OPTIONS  = [
    { option: 'Referral/recommendation', placeholder: 'Please type in who referred you' },
    { option: 'Doorhanger', placeholder: 'Name on doorhanger' },
    { option: 'Mailer', placeholder: ''},
    { option: 'Spoke to a Rep', placeholder: 'Rep\'s Name'},
    { option: 'Google', placeholder: ''},
    { option: 'Facebook', placeholder: ''},
    { option: 'Other Online Search', placeholder: ''},
    { option: 'Other', placeholder: ''}
    ];


class SelectInput extends Component {


    constructor(props){
        super(props);

        this.state = { value: null, referral: null, placeholder: '' }
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
                        <option key={index} value={opt.option}> { opt.option } </option>
                    ))}
                </select>
                <input maxLength={100}
                       style={this.state.value === 'Referral/recommendation' || this.state.value === 'Doorhanger'
                       || this.state.value === 'Spoke to a Rep' ? { display: 'block'} : {display: 'none'}}
                       onChange={this.referralChanged} value={this.state.referral ? this.state.referral : '' }
                       placeholder={this.state.placeholder}/>
            </div>
        );
    }

    valueChanged = e => {

        let placeholder = _.filter(OPTIONS, opt => {
            return opt.option === e.target.value
        })[0]['placeholder'];


        this.setState({ value: e.target.value, placeholder, referral: null });
    };

    referralChanged = e => {
        this.setState({ referral: e.target.value });
    };
}

export default SelectInput;