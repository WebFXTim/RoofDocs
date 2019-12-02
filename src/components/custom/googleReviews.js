import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';


import '../../style/components/custom/googleReviews.scss';

import RIGHT_ARROW from '../../resources/images/custom/googleReviews/icon_carouselarrow_right@2x.png';
import LEFT_ARROW from '../../resources/images/custom/googleReviews/icon_carouselarrow_left@2x.png';

// Import OAuth2 & Keys
const { OAuth2Client } = require('google-auth-library');
const keys = require('../../resources/website.json');
const oauth2Client = new OAuth2Client(
    keys.client_id,
    keys.client_secret,
    keys.redirect_uris[0]
);
const MYSQL_TIMESTAMP = 'YYYY-MM-DD hh:mm:ss';
const queryString = require('query-string');
// const http = require('http');
// const url = require('url');
// // const open = require('open');

// const fs = require('fs');
// const readline = require('linebyline');



// import { google } from 'googleapis';

// var util = require('util');
// console.log(util.promisify);
// STYLING

// import web from '../../../website.json';


// const API_KEY = 'AIzaSyCE80xlRLQsUk9X5B2FnAFx_ZZ7DmOoEX4';
// const SCOPES = ['https://www.googleapis.com/auth/business.manage'];
// const TOKEN_PATH = 'token.json';



// const jwtClient = new google.auth.JWT(
//     web.client_email,
//     null,
//     web.private_key,
//     ['https://www.googleapis.com/auth/plus.business.manage']);
// const business = google.business({ version: 'v4', auth: jwtClient });

class GoogleReviews extends Component {

    constructor(props) {
        super(props);
        this.state = { reviews: [], displayIndex: 0 }
    }

    async componentDidMount() {


        this.loadDBGoogleReviews()

        // console.log(oauth2Client);
        //
        // // const {tokens} = await oauth2Client.getToken(code)
        // // oauth2Client.setCredentials(tokens);
        //
        // const query = queryString.parse(window.location.search);
        // if(query.code) {
        //     this.authenticate( query.code );
        // }
        // // let split = window.location.search.split('=');
        // // console.log(split);
        // // if(split.length === 2) {
        // //     console.log(split[1]);
        // // }
        // this.loadGoogleReviews();

    }


    render() {



        if(this.state.reviews.length >  0) {

            const review1 = this.state.reviews[this.state.displayIndex];
            const review2 = this.state.reviews[this.state.displayIndex + 1];

            return (
                <div className="google-reviews-background">
                    <div className="reviews-content">
                        <p className="success-text"> Why we do it </p>
                        <p className=" success-subheader"> Our customers are our reason.</p>
                        <div className="reviews-holder">
                            <div className="reviews-arrow-container left">
                                <img id="left" onClick={this.arrowClicked} src={LEFT_ARROW} />
                            </div>
                            {/* Reviews List */}
                            <div className="google-reviews-list">
                                <GoogleReviewContainer review={review1} />
                                <GoogleReviewContainer review={review2} />
                            </div>
                            <div className="reviews-arrow-container right">
                                <img id="right" onClick={this.arrowClicked} src={RIGHT_ARROW} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (

                <div className="google-reviews-background" style={{display: 'none'}}>
                    <div className="reviews-content">
                        <p className="success-text"> Why we do it </p>
                        <p className=" success-subheader"> Our customers are our reason.</p>
                    </div>
                </div>
            )
        }


    }

    arrowClicked = e => {

        const direction = e.target.id;
        if(direction === 'right') {
            if(this.state.displayIndex + 2 >= this.state.reviews.length - 1){
                this.setState({ displayIndex: 0})
            } else {
                this.setState({ displayIndex: this.state.displayIndex + 2});
            }
        } else {
            if(this.state.displayIndex -2 < 0){
                this.setState({ displayIndex: 0})
            } else {
                this.setState({ displayIndex: this.state.displayIndex - 2});
            }
        }


    }

    loadDBGoogleReviews() {

        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        const self = this;
        axios.get(`https://devapi.theroofdocs.com/v1/reviews/google`, config)
            .then(function (response) {
                self.setState({ reviews: response.data.data });
            }).catch(function (error) {
            console.log(error);
        });
    }

    async loadGoogleReviews() {



        // const oAuth2Client = await this.getAuthenticatedClient();
        // console.log(oAuth2Client);
//         const oauth2Client = new google.auth.OAuth2(
//             'abc',
//             'cde',
//             'localhost'
//             );
//
// // generate a url that asks permissions for Blogger and Google Calendar scopes
//         const scopes = [
//             'https://www.googleapis.com/auth/blogger',
//             'https://www.googleapis.com/auth/calendar'
//         ];
//
//         const url = oauth2Client.generateAuthUrl({
//             // 'online' (default) or 'offline' (gets refresh_token)
//             access_type: 'offline',
//
//             // If you only need one scope you can pass it as a string
//             scope: scopes
//         });

        // Load client secrets from a local file.
        // fs.readFile('../../../web.json', (err, content) => {
        //     if (err) return console.log('Error loading client secret file:', err);
        //
        //     console.log(content)
        //     // Authorize a client with credentials, then call the Google Tasks API.
        //     // authorize(JSON.parse(content), listConnectionNames);
        // });



        // // Project # - 954747352059
        //
        // // Place ID - ChIJoXNVyy9LtokRTW3uiIs6jOA
        // // Project ID - website-258914
        // // https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
        // const config = {  };
        // const accountId = '09387518106574689941';
        // const locationId = '1234';
        // const placeId = 'ChIJoXNVyy9LtokRTW3uiIs6jOA';
        // const accessToken = 'ya29.Il-yB0kknaeVu9WOmbkfD2SPjQ0rvykv7mx01muMZDCIu76KbbWQf801mXyuRhwA6qlV7ehnyh05wGIyOXwGdANWMEy0V7lQ70gHGdnBOFiIKTFnyV22jaFUR6GwNt-0lQ'
        // const scope = 'https://www.googleapis.com/auth/business.manage'
        //


    }

    /**
     * Create a new OAuth2Client, and go through the OAuth2 content
     * workflow.  Return the full client to the callback.
     */
    async getAuthenticatedClient() {
        return new Promise((resolve, reject) => {


            // Check for Authenticated Client
            // oauth2Client.

            // Generate the url that will be used for the consent dialog.
            // const authUrl = oauth2Client.generateAuthUrl({
            //     access_type: 'offline',
            //     scope: SCOPES,
            // });
            // console.log(authUrl);

            // const server = http
            //     .createServer(async (req, res) => {
            //         try {
            //             if (req.url.indexOf('/oauth2callback') > -1) {
            //                 // acquire the code from the querystring, and close the web server.
            //                 const qs = new url.URL(req.url, 'http://localhost:3001')
            //                     .searchParams;
            //                 const code = qs.get('code');
            //                 console.log(`Code is ${code}`);
            //                 res.end('Authentication successful! Please return to the console.');
            //                 // server.destroy();
            //
            //                 // Now that we have the code, use that to acquire tokens.
            //                 const r = await oAuth2Client.getToken(code);
            //                 // Make sure to set the credentials on the OAuth2 client.
            //                 oAuth2Client.setCredentials(r.tokens);
            //                 console.info('Tokens acquired.');
            //                 resolve(oAuth2Client);
            //             }
            //         } catch (e) {
            //             reject(e);
            //         }
            //     })
            //     .listen(3001, () => {
            //         // open the browser to the authorize url to start the workflow
            //         open(authUrl, {wait: false}).then(cp => cp.unref());
            //     });
            // destroyer(server)
        });




            // console.log('Authorize this app by visiting this url:', authUrl);
            // const rl = readline.createInterface({
            //     input: process.stdin,
            //     output: process.stdout,
            // });
            //
            // const config = { headers: { 'Access-Control-Allow-Origin': '*', 'grant_type': 'authorization_code' } };
            // axios.get(`${authUrl}`, config)
            //     .then(function (response) {
            //         console.log(response);
            //         //response.data.reviews.filter starRating === "FIVE"
            //         // comment: "My experience with ROOF-ER was outstanding.  They did a great job replacing my roof with quality materials.  The project was done smoothly due to lots of communication and coordination during all steps along the way.  Oliver, Rees, and Mike are all professionals and a pleasure to work with.  I strongly recommend ROOF-ER!"
            //         // createTime: "2019-11-22T02:31:47.941Z"
            //         // name: "accounts/102521741933295712919/locations/1173101694184597469/reviews/AIe9_BFey3wvfLehcERdFj-Yv4VmnKFQ3OEaIh7r0M3ceVCUCq8dcuub413SixMe7lx7bYidtYyRObpohXEdC6u48zLCTmI4svAsmqap7fLDL_SgZhIUKpQ"
            //         // reviewId: "AIe9_BFey3wvfLehcERdFj-Yv4VmnKFQ3OEaIh7r0M3ceVCUCq8dcuub413SixMe7lx7bYidtYyRObpohXEdC6u48zLCTmI4svAsmqap7fLDL_SgZhIUKpQ"
            //         // reviewer:
            //         //     displayName: "Mishel Brown"
            //         // profilePhotoUrl: "https://lh6.googleusercontent.com/-HGFt3DzHdL8/AAAAAAAAAAI/AAAAAAAAAAA/XwwHpG8FaFs/c-rp-mo-br100/photo.jpg"
            //         // __proto__: Object
            //         // starRating: "FIVE"
            //         // updateTime: "2019-11-22T02:31:47.941Z"
            //
            //     }).catch(function (error) {
            //     console.log(error);
            // });



            // const code = '4/tgFRBl3LMpYZoKshA-XFxNg7YWROJYKP5eJntmhS66VZClBAWpUH0EZ-GV3-ndwiy5Gl7S2WhrABm8NqnuxqP7M'




            // console.log(authorizeUrl);
            // const r =  oAuth2Client.getToken(code);
            // // Make sure to set the credentials on the OAuth2 client.
            // oAuth2Client.setCredentials(r.tokens);
            // console.info('Tokens acquired.');

        // });
    }

    authenticate( code ) {

        const self = this;
        const oAuth2Client = new OAuth2Client(
            keys.client_id,
            keys.client_secret,
            keys.redirect_uris[0]
        );
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // const accessToken = oAuth2Client.getAccessToken();
            self.getReviews( token.access_token );

        });

    }

    getReviews( accessToken ) {

        const reviewURL = 'https://mybusiness.googleapis.com/v4/accounts/102521741933295712919/locations/1173101694184597469/reviews'



        // Using the OAuth 2.0 Playground, we can get the access token
        // and then inject it into here, we need to figure out how to remove
        // that dependency
        axios.get(`${reviewURL}?access_token=${accessToken}`, { })
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
                // const data = JSON.stringify();
                // MYSQL TIME 2019-11-26 20:23:58

                const mapped = response.data.reviews.map( review => {
                    return {
                        googleReviewID: review.reviewId,
                        comment: review.comment,
                        displayName: review.reviewer.displayName,
                        profilePhotoURL: review.reviewer.profilePhotoUrl,
                        rating: review.starRating,
                        createdAt: moment(review.createTime).format(MYSQL_TIMESTAMP)
                    }
                });

                console.log( mapped );
            }).catch(function (error) {
            console.log(error);
        });
    }
}

export default GoogleReviews;

class GoogleReviewContainer extends Component  {

    render() {

        const stars = [];
        switch(this.props.review.rating) {
            case "FIVE":
                stars.push(true, true, true, true, true);
                break;
            case "FOUR":
                stars.push(true, true, true, true, false);
                break;
            case "THREE":
                stars.push(true, true, true, false, false);
                break;
            case "TWO":
                stars.push(true, true, false, false, false);
                break;
            default:
                stars.push(true, false, false, false, false);
                break;
        }

        return (
            <div className="review">
                <div className="review-user-info">
                    <div className="review-photo-container">
                        <img src={this.props.review.profilePhotoURL} />
                    </div>
                    <div className="review-name-rating-container">
                        <p className="review-name"> { this.props.review.displayName } </p>
                        <div className="star-rating-container">
                            { stars.map( (star,index) => (
                                <div className="star" key={index} style={ star === true ? { display: 'block'} : {display: 'none'} }/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="review-comment-container">
                    <p> { this.props.review.comment } </p>
                </div>
            </div>
        )
    }
}