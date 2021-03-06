import React, {Component} from 'react';
import './membershipCard.css'
import {FacebookShareButton, FacebookIcon,WhatsappShareButton,WhatsappIcon} from 'react-share';
import * as qs from 'query-string';
import carapilssmall from './img/carapilssmall.png'
import {Link} from "react-router-dom";


const request = require('request');

const postUrl = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/carapils-yvjvz/service/carapilsrequests/incoming_webhook/saveUser";
const QRCode = require('qrcode-react');


const saveUser = (userData) => {
    request.post(
        postUrl,
        {json: userData},
        (error, response, body) => {
        }
    );
};

export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fillInFbDetails(this.props.location, this.props.fb)
    }

    fillInFbDetails = function (location, fb) {
        if (fb) {
            saveUser(fb);
            this.state = {
                loggedIn: true,
                name: fb.name,
                userId: fb.id
            };
        } else {
            const parsed = parseLocation(location);
            this.state = {
                name: parsed.fbname,
                userId: parsed.fbid
            }
        }

    };

    render() {
        return <div className="id-card-wrapper">
            <div className="id-card">
                <p className='desc'>
                    <br/>
                </p>
                <div className="profile-row">
                    <div className="dp">
                        <img src={`//graph.facebook.com/${this.state.userId}/picture?type=large`} alt={"profile"}/>
                    </div>
                    <div className="desc">
                        <h1>{this.state.name}</h1>
                        <p>E-rave Member</p>
                        <p></p>
                    </div>
                </div>
                <div>
                    {(() => {
                        switch (this.state.loggedIn) {
                            case true :
                                return<div className='fbShareContainer'>
                                        <FacebookShareButton
                                            url={`https://erave.me`}
                                            quote={`${this.state.name} is now an E-rave member, Join the online rave revolution`}
                                            hashtag={'#erave'}
                                        >
                                            <FacebookIcon size={32} round={true}/> <p className="fbShareText"></p>
                                        </FacebookShareButton>
                                    <WhatsappShareButton
                                        url={`https://erave.me`}
                                        quote={`${this.state.name} is now an E-rave member, Join the online rave revolution`}
                                        separator=":: "
                                        className="Demo__some-network__share-button"
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                </div>;
                            default :
                                return <Link to={process.env.PUBLIC_URL}><p>JOIN THE ONLINE RAVE REVOLUTION</p></Link>
                        }
                    })()}

                </div>
            </div>


        </div>
    }
}

const parseLocation = (location) => {
    if (!location) {
        return;
    } else {
        return qs.parse(location.search);
    }
};


