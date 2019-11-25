import React, { Component } from 'react';
import Products from './custom/products';
import FreeQuoteBanner from "./custom/freeQuoteBanner";

// Styling
import '../style/components/work.scss';
import '../style/components/modal.css'


// Images
import INSPECT from '../resources/images/ourWork/img_1inspect.png';
import DIAGNOSE from '../resources/images/ourWork/img_2diagnose.png';
import PRESCRIBE from '../resources/images/ourWork/img_3prescribe.png';
import OPERATE from '../resources/images/ourWork/img_4operate.png';

import BANNER from "../resources/images/misc/background_banner.png";
import BANNER_ICON_UP from '../resources/images/misc/plus_icon_up.png';
import BANNER_ICON_DOWN from "../resources/images/misc/plus_icon_down.png";


const gafLink = 'https://www.gaf.com/en-us/for-professionals/installation-video-collection';
const certainTeedLink = 'https://www.certainteed.com/siding/vinyl-siding-polymer-shakes-installation-videos/';
const guttersLink = 'https://www.thisoldhouse.com/how-to/how-to-install-rain-gutters';


const STEPS = [
    { name: 'Inspect', icon: INSPECT, info: 'ROOFER will perform a FREE inspection of your roof, siding, and gutters to find evidence of wind, hail, or other damage.'},
    { name: 'Diagnose', icon: DIAGNOSE, info: 'ROOFER and your Roof Doc will properly assess all findings to determine whether your exterior systems are storm-damaged, old, or perfectly fine.'},
    { name: 'Prescribe', icon: PRESCRIBE, info: 'Your Roof Doc will provide you with an honest recommendation based on their findings. If damage is found, ROOFER may suggest filing an insurance claim.'},
    { name: 'Operate', icon: OPERATE, info: 'If your roof, siding, or gutters are found to have an ailment, the last step is to review project details with your Roof Doc and let ROOFER\'s install team take care of the rest. '},

];

class OurWork extends Component {


    render() {

        return (
            <div className="our-work-container">
                <div className="work-banner">
                    <img src={BANNER} alt="Banner" />
                    <div className="work-banner-text-container">
                        <p className="banner-text-small"> QUALITY </p>
                        <p className="banner-text-large"> Shortcuts Aren't In Our Vocabulary </p>
                    </div>
                    <img className="banner-icon" src={BANNER_ICON_UP} />
                </div>

                <div className="gallery-container" >
                    <p className="main-text"> Our Gallery </p>
                    <p className="small-text"> Sort below and click for more details about each project </p>
                </div>

                <div className="work-process-container">
                    <div className="work-process-banner">
                        <img className="banner-icon" src={BANNER_ICON_DOWN} />
                        <p className="main-text"> OUR FOUR STEP PROCESS </p>
                        <p className="small-text"> A standard approach to every job ensures a quality restoration </p>
                    </div>
                    <div className="work-process-content">

                        { STEPS.map( (step, index) => (
                            <div className="work-item-container">
                                <div className="work-item-icon-container">
                                    <img src={step.icon} />
                                </div>
                                <div className="work-item-info-container">
                                    <p className="step-header"> { index + 1}. { step.name } </p>
                                    <p className="step-info"> { step.info } </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <Products />
                <FreeQuoteBanner />

            </div>
        );

        // if(isFirefox) {
        //
        //     return (
        //         <div className="ourWork">
        //             <img src={workRoofing} className="work-roofing-image" alt="Roofing" />
        //             {/* Roofing Section */}
        //             <div className="firefox-work-section" id="roofing">
        //                 <div className="work-heading-container" >
        //                     <img src={roofingIcon} className="work-section-icon" alt="Roofing" />
        //                     <p className="work-section-label"> Roofing </p>
        //                 </div>
        //                 <div className="work-content-container">
        //                     <p className="work-content-background"> Today's roofing products are designed to be installed as a system to ensure your home has a water tight seal for your to come.
        //                         ROOF<span className="nameEnding">ER</span>'s installation team is a group of GAF factory-certified installers who follow the same
        //                         approved methods on every job.  The core components of a roofing job done right are:
        //                     </p>
        //
        //                     <div className="work-description-container">
        //                         <div className="description-info-container">
        //
        //                             {/*Roof Decking */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Flat, sturdy roof decking  </p>
        //                             </div>
        //                             {/* Drip Edge */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Drip edge  </p>
        //                             </div>
        //                             {/* Leak Barrier */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Leak Barrier  </p>
        //                             </div>
        //                             {/* Starter Strip */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Starter Strip  </p>
        //                             </div>
        //                             {/* Underlayment */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Underlayment  </p>
        //                             </div>
        //                             {/* Ventilation */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Ventilation  </p>
        //                             </div>
        //                             {/* Lifetime Shingles */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Lifetime Shingles  </p>
        //                             </div>
        //                             {/* Hip & Ridge */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Hip & Ridge cap shingles  </p>
        //                             </div>
        //                             {/* Flashing Replacement */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Flashing replacement  </p>
        //                             </div>
        //                         </div>
        //                         <div className="description-image-container">
        //                             <img src={roofingSystem} alt="Roofing System" />
        //                         </div>
        //
        //
        //
        //                     </div>
        //
        //                     <p className="oswaldText"><a className="nameEnding" href={gafLink}> Learn more</a> about installation techniques by visiting GAF's video library</p>
        //
        //                 </div>
        //
        //             </div>
        //
        //             {/* Siding Section */}
        //             <img src={workSiding} className="work-roofing-image" alt="Siding" />
        //             <div className="firefox-work-section" id="siding">
        //
        //                 <div className="work-heading-container">
        //                     <img src={sidingIcon} className="work-section-icon" alt="Siding" />
        //                     <p className="work-section-label"> Siding </p>
        //                 </div>
        //                 <div className="work-content-container">
        //                     <p className="work-content-background"> Just like your roof, a proper siding replacement should be treated as a system. ROOF<span className="nameEnding">ER</span>'s
        //                         team of installers perform hundreds of siding replacements each year, ensuring each replacement is installed with all necessary components:
        //                     </p>
        //
        //                     <div className="work-description-container">
        //                         <div className="description-info-container">
        //
        //                             {/* Sheathing */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Flat, sturdy sheathing  </p>
        //                             </div>
        //                             {/* House Wrap */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> House wrap barrier  </p>
        //                             </div>
        //                             {/* Flashing */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Flashing where necessary  </p>
        //                             </div>
        //                             {/* J-channels */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Proper trim & corner pieces  </p>
        //                             </div>
        //                             {/* Lifetime siding */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Lifetime siding planks </p>
        //                             </div>
        //
        //
        //                         </div>
        //                         <div className="description-image-container">
        //                             <img className="siding-system-image" src={sidingSystem} alt="Siding System" />
        //                         </div>
        //                     </div>
        //                     <p className="oswaldText"><a className="nameEnding" href={certainTeedLink}> Learn more</a> about installation techniques by visiting CertainTeeds's video library</p>
        //                 </div>
        //             </div>
        //
        //             {/* Gutters Section */}
        //             <img src={workGutters} className="work-roofing-image" alt="Gutters" />
        //             <div className="firefox-work-section" id="gutters">
        //
        //                 <div className="work-heading-container">
        //                     <img src={guttersIcon} className="work-section-icon" alt="Gutters" />
        //                     <p className="work-section-label"> Gutters </p>
        //                 </div>
        //                 <div className="work-content-container">
        //                     <p className="work-content-background"> Gutters work in conjunction with your downspouts to move heavy rain runoff from the roof safely
        //                         away from your home.  If any part of this system is not operating at 100% capacity, your home's foundation is at greater risk of water damage.
        //                         A well functioning gutter system includes the following:
        //                     </p>
        //
        //                     <div className="work-description-container">
        //                         <div className="description-info-container">
        //
        //                             {/* Pitch */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Proper pitch towards downspouts  </p>
        //                             </div>
        //                             {/* Removal */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Removal of debris as necessary  </p>
        //                             </div>
        //                             {/* Match */}
        //                             <div className="logo-line-item">
        //                                 <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                 <p className="line-item-text"> Proper match between gutter & downspout sizes  </p>
        //                             </div>
        //
        //                         </div>
        //                         <div className="description-image-container">
        //                             <img style={ {maxWidth: '100%'}} src={guttersSystem} alt="Gutters System" />
        //                         </div>
        //                     </div>
        //
        //                     <p className="oswaldText"><a className="nameEnding" href={guttersLink}> Learn more</a> about installation techniques by visiting This Old House's gutter page</p>
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div className="wrapper">
        //             <section className="section parallax bg1">
        //             </section>
        //             <section className="section static">
        //                 <div className="work-section" id="roofing">
        //                     <div className="work-parallax-container">
        //                         <div className="work-heading-container" >
        //                             <img src={roofingIcon} className="work-section-icon" alt="Roofing" />
        //                             <p className="work-section-label"> Roofing </p>
        //                         </div>
        //                         <div className="work-content-container">
        //                             <p className="work-content-background"> Today's roofing products are designed to be installed as a system to ensure your home has a water tight seal for years to come.
        //                                 ROOF<span className="nameEnding">ER</span>'s installation team is a group of GAF factory-certified installers who follow the same
        //                                 approved methods on every job.  The core components of a roofing job done right are:
        //                             </p>
        //                             <div className="work-description-container">
        //                                 <div className="description-info-container">
        //
        //                                     {/* Roof Decking */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Flat, sturdy roof decking  </p>
        //                                     </div>
        //                                     {/* Drip Edge */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Drip edge  </p>
        //                                     </div>
        //                                     {/* Leak Barrier */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Leak Barrier  </p>
        //                                     </div>
        //                                     {/* Starter Strip */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Starter Strip  </p>
        //                                     </div>
        //                                     {/* Underlayment */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Underlayment  </p>
        //                                     </div>
        //                                     {/* Ventilation */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Ventilation  </p>
        //                                     </div>
        //                                     {/* Lifetime Shingles */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Lifetime Shingles  </p>
        //                                     </div>
        //                                     {/* Hip & Ridge */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Hip & Ridge cap shingles  </p>
        //                                     </div>
        //                                     {/* Flashing Replacement */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Flashing replacement  </p>
        //                                     </div>
        //                                 </div>
        //                                 <div className="description-image-container">
        //                                     <img src={roofingSystem} alt="Roofing System" />
        //                                 </div>
        //                             </div>
        //                             <p className="oswaldText blackText"><a className="nameEnding" href={gafLink}  target="_blank" rel="noopener noreferrer"> Learn more</a> about installation techniques by visiting GAF's video library</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //
        //             </section>
        //             <section className="section parallax bg2"> </section>
        //             <section className="section static">
        //                 <div className="work-section" id="siding">
        //                     <div className="work-parallax-container">
        //                         <div className="work-heading-container">
        //                             <img src={sidingIcon} className="work-section-icon" alt="Siding" />
        //                             <p className="work-section-label"> Siding </p>
        //                         </div>
        //                         <div className="work-content-container">
        //                             <p className="work-content-background"> Just like your roof, a proper siding replacement should be treated as a system. ROOF<span className="nameEnding">ER</span>'s
        //                             team of installers perform hundreds of siding replacements each year, ensuring each replacement is installed with all necessary components:
        //                             </p>
        //
        //                             <div className="work-description-container">
        //                                 <div className="description-info-container">
        //
        //                                     {/* Sheathing */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Flat, sturdy sheathing  </p>
        //                                     </div>
        //                                     {/* House Wrap */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> House wrap barrier  </p>
        //                                     </div>
        //                                     {/* Flashing */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Flashing where necessary  </p>
        //                                     </div>
        //                                     {/* J-channels */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Proper trim & corner pieces  </p>
        //                                     </div>
        //                                     {/* Lifetime siding */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Lifetime siding planks </p>
        //                                     </div>
        //
        //
        //                                 </div>
        //                                 <div className="description-image-container">
        //                                     <img className="siding-system-image" src={sidingSystem} alt="Siding System" />
        //                                 </div>
        //                             </div>
        //                             <p className="oswaldText blackText"><a className="nameEnding" href={certainTeedLink} target="_blank" rel="noopener noreferrer"> Learn more</a> about installation techniques by visiting CertainTeeds's video library</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>
        //             <section className="section parallax bg3"> </section>
        //             <section className="section static">
        //                 <div className="work-section" id="gutters">
        //                     <div className="work-parallax-container">
        //                         <div className="work-heading-container">
        //                             <img src={guttersIcon} className="work-section-icon" alt="Gutters" />
        //                             <p className="work-section-label"> Gutters </p>
        //                         </div>
        //                         <div className="work-content-container">
        //                             <p className="work-content-background"> Gutters work in conjunction with your downspouts to move heavy rain runoff from the roof safely
        //                             away from your home.  If any part of this system is not operating at 100% capacity, your home's foundation is at greater risk of water damage.
        //                             A well functioning gutter system includes the following:
        //                             </p>
        //
        //                             <div className="work-description-container">
        //                                 <div className="description-info-container">
        //
        //                                     {/* Pitch */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Proper pitch towards downspouts  </p>
        //                                     </div>
        //                                     {/* Removal */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Removal of debris as necessary  </p>
        //                                     </div>
        //                                     {/* Match */}
        //                                     <div className="logo-line-item">
        //                                         <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
        //                                         <p className="line-item-text blackText"> Proper match between gutter & downspout sizes  </p>
        //                                     </div>
        //
        //                                 </div>
        //                                 <div className="description-image-container">
        //                                     <img src={guttersSystem} alt="Gutters System" />
        //                                 </div>
        //                             </div>
        //                             <p className="oswaldText blackText"><a className="nameEnding" href={guttersLink}  target="_blank" rel="noopener noreferrer"> Learn more</a> about installation techniques by visiting This Old House's gutter page</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>
        //         </div>
        //     );
        // }
    }
}

export default OurWork;

