import React, { Component } from 'react';
import Checkbox from '../checkbox';


// STYLING
import '../../style/components/custom/imageMultiSelect.scss';
import Inspect from "../../resources/images/inputIcons/icon_sm_inspect_gry.png";


class ImageMultiSelect extends Component {


    constructor(props){
        super(props);

        this.state = { }
    }




    render() {

        return (
            <div className="image-multi-select-container">
                <div className="image-multi-select-info">
                    <img src={Inspect}/>
                    <p> Select the areas that require inspection  </p>
                </div>
                <div className="image-multi-select-selection">
                    <Checkbox ref="roof" name="ROOF"/>
                    <Checkbox ref="siding" name="SIDING"/>
                    <Checkbox ref="gutters" name="GUTTERS"/>
                    <Checkbox ref="damage" name="STORM DAMAGE"/>
                </div>

            </div>

        );
    }


}

export default ImageMultiSelect;