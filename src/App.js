import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import index from 'pages/landing/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTooltip from 'react-tooltip';

function App() {
    return (
        <Router>
            <ReactTooltip className="tooler" />
            <Switch>
                <Route exact path="/" component={index} />
            </Switch>
        </Router>
    );
}

export default App;
