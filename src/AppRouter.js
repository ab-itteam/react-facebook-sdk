import React from "react";
import { Route, HashRouter } from "react-router-dom";
import App from "./App";
import MembershipCard from "./MembershipCard";

const AppRouter = () => (
    <HashRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/card/" component={MembershipCard} />
        </div>
    </HashRouter>
);

export default AppRouter;
