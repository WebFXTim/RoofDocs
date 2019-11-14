import React, { Component } from 'react';


// STYLING
import '../style/components/products.scss';

// IMAGES
import GAF from '../resources/images/brands/gaf.png';
import IKO from '../resources/images/brands/iko.png';
import CERTAINTEED from '../resources/images/brands/certainTeed.png';
import JAMESHARDIE from '../resources/images/brands/jamesHardie.png';
import PLYGEM from '../resources/images/brands/plyGem.png';
import LEAFSENTRY from '../resources/images/brands/leafSentry.png';
// TESTING


class ProductContainer extends Component {

    render() {

        return (
            <div className="image-container">
                <img src={this.props.src} />
            </div>
        )
    }

}

class Products extends Component {


    render() {
        return (
            <div className="products-background">
                <div className="products-container">
                    <ProductContainer src={GAF} />
                    <ProductContainer src={IKO} />
                    <ProductContainer src={CERTAINTEED} />
                    <ProductContainer src={JAMESHARDIE} />
                    <ProductContainer src={PLYGEM} />
                    <ProductContainer src={LEAFSENTRY} />
                </div>

            </div>
        );
    }
}

export default Products;