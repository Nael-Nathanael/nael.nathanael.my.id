import React, {Component} from 'react';
import classes from './Base.module.css';
import SideNav from "components/Navigation/SideNav";
import {Container} from "react-bootstrap";

class Base extends Component {
    render() {
        return (
            <div className={classes.base_layout}>
                <SideNav/>

                <div className={"w-100"}>
                    <Container>
                        <nav className={classes.header}>
                        </nav>
                        <div>
                            {this.props.children}
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Base;