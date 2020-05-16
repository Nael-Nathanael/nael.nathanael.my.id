import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import index from 'pages/landing/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTooltip from 'react-tooltip';
import Landing from "pages/Admin/Landing";

function App() {
    return (
        <Router>
            <ReactTooltip className="tooler" />
            <Switch>
                <Route exact path="/" component={index} />
                <Route exact path="/admin" component={Landing} />
            </Switch>
        </Router>
    );
}

export default App;
