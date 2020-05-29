import React, { Component } from 'react'
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBox, MDBRow, MDBCol } from 'mdbreact';
import { NavLink } from 'react-router-dom';

export class SideNav extends Component {

    
    render() {
        return (
            <MDBBox style={{ width: "250px", height: "100vh" }} className="purple-gradient">
                <MDBListGroup>
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBRow className="w-100">
                                <MDBCol sm="2">
                                    <MDBIcon icon="chart-pie" />
                                </MDBCol>
                                <MDBCol sm="10">
                                    Dashboard
                                </MDBCol>
                            </MDBRow>
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBRow className="w-100">
                                <MDBCol sm="2">
                                    <MDBIcon icon="user" />
                                </MDBCol>
                                <MDBCol sm="10">
                                    Profile
                                </MDBCol>
                            </MDBRow>
                        </MDBListGroupItem>
                    </NavLink>
                </MDBListGroup>
            </MDBBox>
        );
    }
}

export default SideNav;