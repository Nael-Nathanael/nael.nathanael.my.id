import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import index from 'pages/landing/index';
import ReactTooltip from 'react-tooltip';
import Base from 'pages/admin/Base';
import Login from 'pages/login/Login';

function App() {
    return (
        <Router>
            <ReactTooltip className="text-center" style={{ width: "200px" }} />
            <Switch>
                <Route path="/admin" component={Base} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={index} />
            </Switch>
        </Router>
    );
}

export default App;
