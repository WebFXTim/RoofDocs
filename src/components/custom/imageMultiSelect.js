import React, { Component } from 'react';
import Checkbox from '../checkbox';


// STYLING
import '../../style/components/custom/imageMultiSelect.scss';
import Inspect from "../../resources/images/inputIcons/icon_sm_inspect_gry.png";


class ImageMultiSelect extends Component {

    render() {

        if(this.props.type === 'inspection') {

            return (
                <div className="image-multi-select-container">
                    <div className="image-multi-select-info">
                        <img src={Inspect} alt="Multi Select"/>
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

        } else {

            return (
                <div className="image-multi-select-container">
                    <div className="image-multi-select-info">
                        <img src={Inspect} alt="Multi Select"/>
                        <p> What type of storm hit your area?  </p>
                    </div>
                    <div className="image-multi-select-selection">
                        <Checkbox ref="hail" name="HAIL"/>
                        <Checkbox ref="wind" name="HIGH WINDS"/>
                        <Checkbox ref="rain" name="SEVERE RAIN"/>
                        <Checkbox ref="other" name="OTHER"/>
                    </div>

                </div>

            );

        }


    }


}

export default ImageMultiSelect;