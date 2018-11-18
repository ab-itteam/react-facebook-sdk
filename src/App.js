import React, {Component} from 'react';
import MembershipCard from './MembershipCard';
import './App.css';
import FacebookLogin from "react-facebook-login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facebookResponse: null
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.facebookResponse && this.state.facebookResponse.status !== "unknown" ?
                        <MembershipCard fb={this.state.facebookResponse}/>
                        :
                        <FacebookLogin
                            appId="203252890569525"
                            autoLoad={true}
                            size="metro"
                            fields="name,email,picture"
                            callback={(response) => {
                                this.setState({facebookResponse: response});
                            }}
                        />}
                </header>

            </div>
        );
    }
}

export default App;
