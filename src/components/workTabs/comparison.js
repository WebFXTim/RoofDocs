import React, { Component } from 'react';


// Styling
import '../../style/components/workTabs/comparison.css';

class Comparison extends Component {

    render() {
        switch (this.props.selected) {
            case 'Roofing':
                return (
                    <div className="comparisonContainer">
                        <p> Much like the skin, your roofing system is meant to protect the home's
                            interior from harsh external elements.<br/>
                            Healthy skin relies on three layers, each serving a unique function to ensure
                            the system operates effectively.  A durable roofing system depends on the same
                            three functions of our skin's layers.
                        </p>
                        <table>
                            <tr>
                                <th>Skin</th>
                                <th>Shared Purpose</th>
                                <th>Roof</th>
                            </tr>
                            <tr>
                                <th>Epidermis</th>
                                <th>Outermost layer providing a waterproof barrier</th>
                                <th>Shingles, Drip Edge, Ice & Water Shield</th>
                            </tr>
                            <tr>
                                <th>Dermis</th>
                                <th>Middle layer allowing the system to "sweat-out" trapped moisture</th>
                                <th>Breathable synthetic underlayment & Ridge Vents</th>
                            </tr>
                            <tr>
                                <th>Hypodermis</th>
                                <th>Innermost layer providing stability and insulation</th>
                                <th>Solid deck sheathing & attic fiberglass insulation</th>
                            </tr>
                        </table>
                    </div>

                );
            case 'Gutters':
                return (
                    <p> The body uses lymph vessels (similar to blood vessels) to drain potentially infectious agents away
                        from its core components.  A gutter system serves the same purpose for your home - it diverts and
                        drains water away from the foundation, preventing harmful moisture from seeping into your walls and attic.
                    </p>
                );
            case 'Windows/Doors':
                return (
                    <p> The respiratory system is responsible for regulating the air flow and quality that enters and exits the body.
                        The windows & doors control the same process and require equal maintenance to manage the energy efficiency
                        of your home.  If your lungs don't receive the proper cardiovascular exercise, the entire body will suffer
                        a loss in efficiency.  Same goes for your home - if the windows and doors aren't properly maintained your
                        home could be suffering significant energy inefficiencies.
                    </p>

                );
            case 'Siding':
                return (
                    <div className="comparisonContainer">
                        <p> Your siding system, just as your roofing system, is similar to the exocrine (skin) system.<br/>
                            An effective siding system requires three main layers which provide a weather-resistant, ventilated exterior
                            to your home.  The skin also depends on three layers to properly service your body.
                        </p>
                        <table>
                            <tr>
                                <th>Skin</th>
                                <th>Shared Purpose</th>
                                <th>Roof</th>
                            </tr>
                            <tr >
                                <td>Epidermis</td>
                                <td>Outermost layer providing a waterproof barrier</td>
                                <td>Vinyl Siding Panel</td>
                            </tr>
                            <tr>
                                <td>Dermis</td>
                                <td>Middle layer allowing the system to "sweat-out" trapped moisture</td>
                                <td>House Wrap Barrier</td>
                            </tr>
                            <tr>
                                <td>Hypodermis</td>
                                <td>Innermost layer providing stability and insulation</td>
                                <td>Solid deck sheathing & insulation</td>
                            </tr>
                        </table>
                    </div>
                );
            default:
                return ( <p /> );
        }

    }
}

export default Comparison;