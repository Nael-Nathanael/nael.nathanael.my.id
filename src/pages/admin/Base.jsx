import React, { Component } from 'react';
import SideNavigation from 'components/Navigation/sideNavigation';
import TopNavigation from 'components/Navigation/topNavigation';
import { getSortedRoute } from 'Config/SystemService/Routing';
import { admin_url } from 'Config/UrlConfig_admin';
import { Route, withRouter, Switch } from 'react-router-dom';
import classes from './base.module.css';

class Base extends Component {

    render() {
        
        return (
            <div className={["flexible-content blue-gradient", classes.bger].join(" ")}>
                <TopNavigation />
                <SideNavigation />
                <main id="content" className="p-5">
                    <Switch>
                        {getSortedRoute(admin_url).map((e, index) =>
                            <Route path={e.link} component={e.component} key={index} />
                        )}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withRouter(Base);
