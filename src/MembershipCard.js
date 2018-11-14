import React, {Component} from 'react';
import ReactToPrint from "react-to-print";
import './membershipCard.css'
import {FacebookShareButton, FacebookIcon} from 'react-share';
import * as qs from 'query-string';
import carapilssmall from './img/carapilssmall.png'
const QRCode = require('qrcode-react');



export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fillInFbDetails(this.props.location, this.props.fb)
    }

    fillInFbDetails = function (location, fb) {
        if (fb) {
            this.state = {
                name: fb.name,
                userId: fb.id
            };
            console.log(this.state);
        } else {
            const parsed = parseLocation(location);
            console.log(parsed);
            this.state = {
                name: parsed.fbname,
                userId: parsed.fbid
            }
        }
    };

    render() {
        return <div className="id-card-wrapper">
                <div className="id-card">
                    <p className='marqueeText'><marquee>WELCOME TO THE CARA PILS CLUB</marquee></p>
                    <div className="profile-row">
                        <div className="dp">
                            <img src={`//graph.facebook.com/${this.state.userId}/picture?type=large`}/>
                        </div>
                        <div className="desc">
                            <h1>{this.state.name}</h1>
                            <p>Official Cara Pils Club Member</p>
                            <p><QRCode value="http://facebook.github.io/react/" logo = {carapilssmall} logoWidth={50}/></p>
                            <p></p>
                        </div>
                    </div>
                   <div className='fbShareContainer'> <FacebookShareButton url={'carapils.club/card?name=test&fbid=10215558188322336'}> <FacebookIcon size={32} round={true}/> <p className="fbShareText"> Sheir tis on Fajsboek to show your friends jou are TE SJIT </p></FacebookShareButton>
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


