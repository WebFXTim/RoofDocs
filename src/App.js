import React, { Component } from 'react';
import logo from './resources/homeLogo.jpg';
import gutters from './resources/gutters.png';
import roofing from './resources/roofing.png';
import siding from './resources/siding.png';
import stormDamage from './resources/damage.png';
import footerLogo from './resources/logo.PNG'

import './style/home.css';


class App extends Component {


  render() {
    return (
      <div className="App">
          <header className="App-header">
                <img src={logo} className="homeLogo" alt="logo" />
          </header>
          <div className="navigation">
              <ul>
                  <a href="/"> <li> Meet The Docs </li> </a>
                  <a href="#ourServices"> <li>Our Services </li> </a>
                  <a href="#stormDamage"> <li>Storm Damage </li> </a>
              </ul>
          </div>
          <div className="ourServices" id="ourServices">
                <div className="servicesHeader">
                    <p id="servicesTitle"> OUR SERVICES </p>
                </div>
                <div className="servicesContainer">
                    <ul>
                        <li>
                            <div className="servicesItem">
                                <img src={roofing} alt="roofing" />
                                <p>ROOFING</p>
                                <p className="description">
                                    ROOF-ER uses premium GAF roofing materials and GAF factory certified installers
                                    to ensure your new roof functions as a holistic roofing system, guaranteeing quality and longevity
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesItem">
                                <img src={siding} alt="siding" />
                                <p>SIDING</p>
                                <p className="description">
                                    We offer CertainTeed siding products and a 10-year labor warranty to ensure your new
                                    siding replacement provides beauty, efficiency, and durability for years to come
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesItem">
                                <img src={gutters} alt="gutters" />
                                <p>GUTTERS</p>
                                <p className="description">
                                    Our gutter systems use high quality aluminum and custom fitting to properly divert
                                    and drain excess water during heavy rain storms
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
          </div>
          <div className="stormDamage" id="stormDamage">
              <div className="stormHeader">
                  <p id="stormTitle"> STORM DAMAGE </p>
              </div>
              <div className="stormDamageContent">
                  <div className="stormDamageImage">
                      <img src={stormDamage} alt="damage" />
                  </div>

                  <div className="stormDamageBody">
                      <p> The rise in the number of severe storms affecting the DMV area has resulted in hundreds of millions of dollars worth of property damage
                      in just the last few years.  When a hail and/or wind storm tears through your neighborhood, the exterior of your home can take a beating.  At ROOF-ER, we specialize
                      in restoring your storm-damaged roof, siding, and gutters.  Call us today for your free storm-damage inspection</p>
                  </div>
              </div>
          </div>
          <footer>
              <div className="footerImage">
                <img src={footerLogo} alt="footerLogo"/>
              </div>
              <div className="footerContent">
                  <p className="footerAddressTitle"> Address </p>
                  <p className="footerAddressInfo"> 2010 Corporate Ridge <br></br> McLean, VA 22102</p>

              </div>

          </footer>
      </div>

    );
  }
}

export default App;
