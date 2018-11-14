import React, {Component} from 'react';
import ReactToPrint from "react-to-print";
import './membershipCard.css'
import {FacebookShareButton, FacebookIcon} from 'react-share';
import * as qs from 'query-string';


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
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
                <div ref={el => (this.componentRef = el)} className="id-card">
                    <div className="profile-row">
                        <div className="dp">
                            <img src={`//graph.facebook.com/${this.state.userId}/picture?type=large`}/>
                        </div>
                        <div className="desc">
                            <h1>{this.state.name}</h1>
                            <p>Official Cara Pils Club Member</p>
                            <p></p>
                        </div>
                    </div>
                    <FacebookShareButton url={'google.com'}> <FacebookIcon size={32} round={true}/></FacebookShareButton>
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


