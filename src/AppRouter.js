import React from "react";
import { Route, HashRouter } from "react-router-dom";
import App from "./App";
import MembershipCard from "./MembershipCard";

const Users = () => <h2>Users</h2>;

const AppRouter = () => (
    <HashRouter >
        <div>
            <Route path="/" exact component={App} />
            <Route path="/card/" component={MembershipCard} />
            <Route path="/users/" component={Users} />
        </div>
    </HashRouter>
);

export default AppRouter;
