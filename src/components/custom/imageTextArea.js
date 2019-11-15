import React, { Component } from 'react';


// STYLING
import '../../style/components/custom/imageTextArea.scss';

// IMAGES
import Search from '../../resources/images/inputIcons/icon_sm_details_gry.png';


class ImageTextArea extends Component {


    constructor(props){
        super(props)

        this.state = { value: '' }
    }




    render() {


        return (
            <div className="image-text-area-container">
                <img src={Search}/>
                <textarea onChange={this.valueChanged} value={ this.state.value } placeholder='Enter any additional details'/>
            </div>

        );
    }

    valueChanged = e => {

        this.setState({ value: e.target.value });
    }
}

export default ImageTextArea;