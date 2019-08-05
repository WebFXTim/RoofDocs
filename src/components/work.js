import React, { Component } from 'react';


// Styling
import '../style/components/work.scss';
import '../style/components/modal.css'


// Images
// Roofing
import workRoofing from '../resources/images/ourWork/WorkRoofing.jpg';
import roofingIcon from '../resources/images/roofIcon.png';
import roofingSystem from '../resources/images/ourWork/RoofingSystem.jpg';

// Siding
import workSiding from '../resources/images/ourWork/HouseSidingCropped.jpg';
import sidingIcon from '../resources/images/sidingIcon.png';
import sidingSystem from '../resources/images/ourWork/SidingSystem.jpg';

import workGutters from '../resources/images/ourWork/WorkGuttersCropped.jpg';
import guttersIcon from '../resources/images/guttersIcon.png';
import guttersSystem from '../resources/images/ourWork/GuttersSystem.jpg'
import rooferIcon from "../resources/images/logoSolo.png";


const gafLink = 'https://www.gaf.com/en-us/for-professionals/installation-video-collection';
const certainTeedLink = 'https://www.certainteed.com/siding/vinyl-siding-polymer-shakes-installation-videos/';
const guttersLink = 'https://www.thisoldhouse.com/how-to/how-to-install-rain-gutters';


class OurWork extends Component {


    // Standard render function
    render() {
        return (

            <div className="wrapper">
                <section className="section parallax bg1">
                </section>
                <section className="section static">
                    <div className="work-section" id="roofing">
                        <div className="work-parallax-container">
                            <div className="work-heading-container" >
                                <img src={roofingIcon} className="work-section-icon" alt="Roofing" />
                                <p className="work-section-label"> Roofing </p>
                            </div>
                            <div className="work-content-container">
                                <p className="work-content-background"> Today's roofing products are designed to be installed as a system to ensure your home has a water tight seal for years to come.
                                    ROOF<span className="nameEnding">ER</span>'s installation team is a group of GAF factory-certified installers who follow the same
                                    approved methods on every job.  The core components of a roofing job done right are:
                                </p>
                                <div className="work-description-container">
                                    <div className="description-info-container">

                                        {/* Roof Decking */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Flat, sturdy roof decking  </p>
                                        </div>
                                        {/* Drip Edge */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Drip edge  </p>
                                        </div>
                                        {/* Leak Barrier */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Leak Barrier  </p>
                                        </div>
                                        {/* Starter Strip */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Starter Strip  </p>
                                        </div>
                                        {/* Underlayment */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Underlayment  </p>
                                        </div>
                                        {/* Ventilation */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Ventilation  </p>
                                        </div>
                                        {/* Lifetime Shingles */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Lifetime Shingles  </p>
                                        </div>
                                        {/* Hip & Ridge */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Hip & Ridge cap shingles  </p>
                                        </div>
                                        {/* Flashing Replacement */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Flashing replacement  </p>
                                        </div>
                                    </div>
                                    <div className="description-image-container">
                                        <img src={roofingSystem} alt="Roofing System" />
                                    </div>
                                </div>
                                <p className="oswaldText blackText"><a className="nameEnding" href={gafLink}> Learn more</a> about installation techniques by visiting GAF's video library</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="section parallax bg2"> </section>
                <section className="section static">
                    <div className="work-section" id="siding">
                        <div className="work-parallax-container">
                            <div className="work-heading-container">
                                <img src={sidingIcon} className="work-section-icon" alt="Siding" />
                                <p className="work-section-label"> Siding </p>
                            </div>
                            <div className="work-content-container">
                                <p className="work-content-background"> Just like your roof, a proper siding replacement should be treated as a system. ROOF<span className="nameEnding">ER</span>'s
                                team of installers perform hundreds of siding replacements each year, ensuring each replacement is installed with all necessary components:
                                </p>

                                <div className="work-description-container">
                                    <div className="description-info-container">

                                        {/* Sheathing */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Flat, sturdy sheathing  </p>
                                        </div>
                                        {/* House Wrap */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> House wrap barrier  </p>
                                        </div>
                                        {/* Flashing */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Flashing where necessary  </p>
                                        </div>
                                        {/* J-channels */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Proper trim & corner pieces  </p>
                                        </div>
                                        {/* Lifetime siding */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Lifetime siding planks </p>
                                        </div>


                                    </div>
                                    <div className="description-image-container">
                                        <img className="siding-system-image" src={sidingSystem} alt="Siding System" />
                                    </div>
                                </div>
                                <p className="oswaldText blackText"><a className="nameEnding" href={certainTeedLink}> Learn more</a> about installation techniques by visiting CertainTeeds's video library</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section parallax bg3"> </section>
                <section className="section static">
                    <div className="work-section" id="gutters">
                        <div className="work-parallax-container">
                            <div className="work-heading-container">
                                <img src={guttersIcon} className="work-section-icon" alt="Gutters" />
                                <p className="work-section-label"> Gutters </p>
                            </div>
                            <div className="work-content-container">
                                <p className="work-content-background"> Gutters work in conjunction with your downspouts to move heavy rain runoff from the roof safely
                                away from your home.  If any part of this system is not operating at 100% capacity, your home's foundation is at greater risk of water damage.
                                A well functioning gutter system includes the following:
                                </p>

                                <div className="work-description-container">
                                    <div className="description-info-container">

                                        {/* Pitch */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Proper pitch towards downspouts  </p>
                                        </div>
                                        {/* Removal */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Removal of debris as necessary  </p>
                                        </div>
                                        {/* Match */}
                                        <div className="logo-line-item">
                                            <img src={rooferIcon} className="line-item-icon" alt="RoofER"/>
                                            <p className="line-item-text blackText"> Proper match between gutter & downspout sizes  </p>
                                        </div>

                                    </div>
                                    <div className="description-image-container">
                                        <img src={guttersSystem} alt="Gutters System" />
                                    </div>
                                </div>
                                <p className="oswaldText blackText"><a className="nameEnding" href={guttersLink}> Learn more</a> about installation techniques by visiting This Old House's gutter page</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default OurWork;

{/*<div className="ourWork">*/}
{/*<img src={workRoofing} className="work-roofing-image" alt="Roofing" />*/}
{/*/!* Roofing Section *!/*/}
{/*<div className="work-section" id="roofing">*/}

{/*<div className="work-heading-container" >*/}
{/*<img src={roofingIcon} className="work-section-icon" alt="Roofing" />*/}
{/*<p className="work-section-label"> Roofing </p>*/}
{/*</div>*/}
{/*<div className="work-content-container">*/}
{/*<p className="work-content-background"> Today's roofing products are designed to be installed as a system to ensure your home has a water tight seal for your to come.*/}
{/*ROOF<span className="nameEnding">ER</span>'s installation team is a group of GAF factory-certified installers who follow the same*/}
{/*approved methods on every job.  The core components of a roofing job done right are:*/}
{/*</p>*/}

{/*<div className="work-description-container">*/}
{/*<div className="description-info-container">*/}

{/*/!* Roof Decking *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Flat, sturdy roof decking  </p>*/}
{/*</div>*/}
{/*/!* Drip Edge *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Drip edge  </p>*/}
{/*</div>*/}
{/*/!* Leak Barrier *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Leak Barrier  </p>*/}
{/*</div>*/}
{/*/!* Starter Strip *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Starter Strip  </p>*/}
{/*</div>*/}
{/*/!* Underlayment *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Underlayment  </p>*/}
{/*</div>*/}
{/*/!* Ventilation *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Ventilation  </p>*/}
{/*</div>*/}
{/*/!* Lifetime Shingles *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Lifetime Shingles  </p>*/}
{/*</div>*/}
{/*/!* Hip & Ridge *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Hip & Ridge cap shingles  </p>*/}
{/*</div>*/}
{/*/!* Flashing Replacement *!/*/}

{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Flashing replacement  </p>*/}
{/*</div>*/}


{/*</div>*/}
{/*<div className="description-image-container">*/}
{/*<img src={roofingSystem} alt="Roofing System" />*/}
{/*</div>*/}



{/*</div>*/}

{/*<p className="oswaldText"><a className="nameEnding" href={gafLink}> Learn more</a> about installation techniques by visiting GAF's video library</p>*/}

{/*</div>*/}

{/*</div>*/}

{/*/!* Siding Section *!/*/}
{/*<img src={workSiding} className="work-roofing-image" alt="Siding" />*/}
{/*<div className="work-section" id="siding">*/}

{/*<div className="work-heading-container">*/}
{/*<img src={sidingIcon} className="work-section-icon" alt="Siding" />*/}
{/*<p className="work-section-label"> Siding </p>*/}
{/*</div>*/}
{/*<div className="work-content-container">*/}
{/*<p className="work-content-background"> Just like your roof, a proper siding replacement should be treated as a system. ROOF<span className="nameEnding">ER</span>'s*/}
{/*team of installers perform hundreds of siding replacements each year, ensuring each replacement is installed with all necessary components:*/}
{/*</p>*/}

{/*<div className="work-description-container">*/}
{/*<div className="description-info-container">*/}

{/*/!* Sheathing *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Flat, sturdy sheathing  </p>*/}
{/*</div>*/}
{/*/!* House Wrap *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> House wrap barrier  </p>*/}
{/*</div>*/}
{/*/!* Flashing *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Flashing where necessary  </p>*/}
{/*</div>*/}
{/*/!* J-channels *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Proper trim & corner pieces  </p>*/}
{/*</div>*/}
{/*/!* Lifetime siding *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Lifetime siding planks </p>*/}
{/*</div>*/}


{/*</div>*/}
{/*<div className="description-image-container">*/}
{/*<img className="siding-system-image" src={sidingSystem} alt="Siding System" />*/}
{/*</div>*/}
{/*</div>*/}
{/*<p className="oswaldText"><a className="nameEnding" href={certainTeedLink}> Learn more</a> about installation techniques by visiting CertainTeeds's video library</p>*/}
{/*</div>*/}
{/*</div>*/}

{/*/!* Gutters Section *!/*/}
{/*<img src={workGutters} className="work-roofing-image" alt="Gutters" />*/}
{/*<div className="work-section" id="gutters">*/}

{/*<div className="work-heading-container">*/}
{/*<img src={guttersIcon} className="work-section-icon" alt="Gutters" />*/}
{/*<p className="work-section-label"> Gutters </p>*/}
{/*</div>*/}
{/*<div className="work-content-container">*/}
{/*<p className="work-content-background"> Gutters work in conjunction with your downspouts to move heavy rain runoff from the roof safely*/}
{/*away from your home.  If any part of this system is not operating at 100% capacity, your home's foundation is at greater risk of water damage.*/}
{/*A well functioning gutter system includes the following:*/}
{/*</p>*/}

{/*<div className="work-description-container">*/}
{/*<div className="description-info-container">*/}

{/*/!* Pitch *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Proper pitch towards downspouts  </p>*/}
{/*</div>*/}
{/*/!* Removal *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Removal of debris as necessary  </p>*/}
{/*</div>*/}
{/*/!* Match *!/*/}
{/*<div className="logo-line-item">*/}
{/*<img src={rooferIcon} className="line-item-icon" alt="RoofER"/>*/}
{/*<p className="line-item-text"> Proper match between gutter & downspout sizes  </p>*/}
{/*</div>*/}

{/*</div>*/}
{/*<div className="description-image-container">*/}
{/*<img src={guttersSystem} alt="Gutters System" />*/}
{/*</div>*/}
{/*</div>*/}

{/*<p className="oswaldText"><a className="nameEnding" href={guttersLink}> Learn more</a> about installation techniques by visiting This Old House's gutter page</p>*/}
{/*</div>*/}








{/*</div>*/}

{/*</div>*/}