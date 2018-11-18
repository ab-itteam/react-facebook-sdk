import React from "react";
import {Route, HashRouter, BrowserRouter, Switch} from "react-router-dom";
import App from "./App";
import MembershipCard from "./MembershipCard";
import ReactGA from 'react-ga';




const AppRouter = () => {
    ReactGA.initialize('UA-35827919-8');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route  exact path="/" component={App} />
            <Route path="/card/" component={MembershipCard} />
            <Route component={() => (<div>404 Only Heineken here</div>)} />
        </Switch>
    </BrowserRouter>
};

export default AppRouter;
