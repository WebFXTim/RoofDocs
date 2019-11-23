import React, { Component } from 'react';
import axios from 'axios'



// STYLING
import '../../style/components/custom/googleReviews.scss';
// import gapi from 'googleapis';
// import web from '../../../website.json';


const API_KEY = 'AIzaSyCE80xlRLQsUk9X5B2FnAFx_ZZ7DmOoEX4';




// const jwtClient = new google.auth.JWT(
//     web.client_email,
//     null,
//     web.private_key,
//     ['https://www.googleapis.com/auth/plus.business.manage']);
// const business = google.business({ version: 'v4', auth: jwtClient });

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

        // Project # - 954747352059

        // Place ID - ChIJoXNVyy9LtokRTW3uiIs6jOA
        // Project ID - website-258914
        // https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
        const config = {  };
        const accountId = '09387518106574689941';
        const locationId = '1234';
        const placeId = 'ChIJoXNVyy9LtokRTW3uiIs6jOA';
        const accessToken = 'ya29.Il-yB0kknaeVu9WOmbkfD2SPjQ0rvykv7mx01muMZDCIu76KbbWQf801mXyuRhwA6qlV7ehnyh05wGIyOXwGdANWMEy0V7lQ70gHGdnBOFiIKTFnyV22jaFUR6GwNt-0lQ'
        const scope = 'https://www.googleapis.com/auth/business.manage'

        const testurl = 'https://mybusiness.googleapis.com/v4/accounts/102521741933295712919/locations/1173101694184597469/reviews'



        // Using the OAuth 2.0 Playground, we can get the access token
        // and then inject it into here, we need to figure out how to remove
        // that dependency
        axios.get(`${testurl}?access_token=${accessToken}`, config)
            .then(function (response) {
                //response.data.reviews.filter starRating === "FIVE"
                // comment: "My experience with ROOF-ER was outstanding.  They did a great job replacing my roof with quality materials.  The project was done smoothly due to lots of communication and coordination during all steps along the way.  Oliver, Rees, and Mike are all professionals and a pleasure to work with.  I strongly recommend ROOF-ER!"
                // createTime: "2019-11-22T02:31:47.941Z"
                // name: "accounts/102521741933295712919/locations/1173101694184597469/reviews/AIe9_BFey3wvfLehcERdFj-Yv4VmnKFQ3OEaIh7r0M3ceVCUCq8dcuub413SixMe7lx7bYidtYyRObpohXEdC6u48zLCTmI4svAsmqap7fLDL_SgZhIUKpQ"
                // reviewId: "AIe9_BFey3wvfLehcERdFj-Yv4VmnKFQ3OEaIh7r0M3ceVCUCq8dcuub413SixMe7lx7bYidtYyRObpohXEdC6u48zLCTmI4svAsmqap7fLDL_SgZhIUKpQ"
                // reviewer:
                //     displayName: "Mishel Brown"
                // profilePhotoUrl: "https://lh6.googleusercontent.com/-HGFt3DzHdL8/AAAAAAAAAAI/AAAAAAAAAAA/XwwHpG8FaFs/c-rp-mo-br100/photo.jpg"
                // __proto__: Object
                // starRating: "FIVE"
                // updateTime: "2019-11-22T02:31:47.941Z"
                console.log(response);
            }).catch(function (error) {
            console.log(error);
        });

    }
}

export default GoogleReviews;