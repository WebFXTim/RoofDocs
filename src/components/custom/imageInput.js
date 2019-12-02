import React, { Component } from 'react';


// STYLING
import '../../style/components/custom/imageInput.scss';

// IMAGES
import Address from '../../resources/images/inputIcons/icon_sm_address_gry.png';
import Name from '../../resources/images/inputIcons/icon_sm_name_gry.png';
import Email from '../../resources/images/inputIcons/icon_sm_email_gry.png';
import Phone from '../../resources/images/inputIcons/icon_sm_phone_gry.png';

const Placeholders = {
    address: 'Enter your address',
    name: 'Enter your name',
    email: 'Enter your email',
    phone: 'Enter your phone number'

};


class ImageInput extends Component {


    constructor(props){
        super(props)

        this.state = { value: '' }
    }




    render() {

        let src = null;
        switch(this.props.type) {
            case 'address':
                src = Address;
                break;
            case 'name':
                src = Name;
                break;
            case 'email':
                src = Email;
                break;
            case 'phone':
                src = Phone;
                break;
            default: break;
        }

        return (
            <div className="image-input-container">
                <img className={this.props.type} src={src} alt="Input Icon"/>
                <input onChange={this.valueChanged} value={ this.state.value } placeholder={Placeholders[this.props.type]}/>
            </div>

        );
    }

    valueChanged = e => {

        this.setState({ value: e.target.value });
    }
}

export default ImageInput;