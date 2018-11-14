import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import MembershipCard from "./MembershipCard";

const Users = () => <h2>Users</h2>;

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/card/" component={MembershipCard} />
            <Route path="/users/" component={Users} />
        </div>
    </Router>
);

export default AppRouter;
