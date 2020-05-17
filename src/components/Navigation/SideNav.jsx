import React, {Component} from 'react';
import classes from "./SideNav.module.css";
import NavItem from "components/Navigation/NavElement/NavItem";
import {admin_url} from "Config/UrlConfig_admin";
import {Container} from "react-bootstrap";

export class SideNav extends Component {
    render() {
        return (
            <div className={classes.nav_base}>
                <Container>
                    <div className={classes.navbar}>
                        <h3 className={"text-center"}>
                            Brand
                        </h3>
                    </div>

                    <NavItem data={admin_url}/>
                </Container>
            </div>
        )
    }
}

export default SideNav
