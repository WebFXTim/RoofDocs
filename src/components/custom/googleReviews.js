import React, { Component } from 'react';
import axios from 'axios';


// STYLING
import '../../style/components/custom/googleReviews.scss';



class GoogleReviews extends Component {

    constructor(props) {
        super(props);
        this.state = { reviews: [] }
    }

    componentDidMount() {

        this.loadGoogleReviews();

    }

    render() {
        return (
            <div className="google-reviews-background">
                <div className="reviews-content">
                    <p className="success-text"> Success Stories </p>
                    <p className=" success-subheader"> We prefer to let our customers speak about our work.</p>

                </div>


            </div>
        );
    }

    loadGoogleReviews() {

        // https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        const accountId = 'abc123';
        const locationId = '1234';

        // Get All Tags for Stage
        axios.get(`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`, config)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });

    }
}

export default GoogleReviews;