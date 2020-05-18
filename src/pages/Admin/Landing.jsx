import React, {Component} from "react";
import Base from "components/Sections/Base";
import {Route, Switch} from "react-router-dom";
import {admin_url} from "Config/UrlConfig_admin";
import {getSortedRoute} from "Config/SystemService/Routing";

export default class Landing extends Component {
    render() {
        return (
            <Base>
                <Switch>
                    {
                        getSortedRoute(admin_url).map(
                            (e, index) =>
                                <Route path={e.link} key={index}>
                                    {e.component}
                                </Route>
                        )
                    }
                </Switch>
            </Base>
        )
    }
}