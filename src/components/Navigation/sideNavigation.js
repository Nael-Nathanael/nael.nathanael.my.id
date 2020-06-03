import React from 'react';
import { MDBBox, MDBCard, MDBContainer } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { admin_url } from 'Config/UrlConfig_admin';

class SideNavigation extends React.Component {

    renderSideNavigation() {
        const url_list = admin_url;
        var to_return = [];
        url_list.forEach((element, index) => {
            if (!element.hidden) {
                if (!!element.link) {
                    to_return.push(
                        <div className="col-12" key={index}>
                            <MDBContainer>
                                <MDBContainer className="d-flex justify-content-center flex-column text-white">
                                    <NavLink to={element.link} className="py-1">
                                        {element.name}
                                    </NavLink>
                                </MDBContainer>
                            </MDBContainer>
                        </div>
                    )
                } else if (element.divider) {
                    to_return.push(
                        <div className="col-12" key={index}>
                            <div className="mx-4">
                                <hr />
                            </div>
                        </div>
                    )
                } else {
                    to_return.push(
                        <div className="col-12" key={index}>
                            <Accordion>
                                <MDBCard style={{ backgroundColor: "transparent" }} className={"text-white z-depth-0 rounded-0"}>
                                    <MDBContainer>
                                        <Accordion.Toggle as={MDBBox} className="py-1 waves-effect" eventKey="1">
                                            <MDBContainer className="d-flex align-items-center" style={{ height: "30px" }}>
                                                <div>
                                                    {element.summary}
                                                </div>
                                            </MDBContainer>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <MDBContainer className="d-flex justify-content-center flex-column mx-2">
                                                {element.content.map((e, index) => !e.hidden && 
                                                    <NavLink key={index} to={e.link} activeClassName="activeClass" className="py-1">
                                                        {e.name}
                                                    </NavLink>
                                                )}
                                            </MDBContainer>
                                        </Accordion.Collapse>
                                    </MDBContainer>
                                </MDBCard>
                            </Accordion>
                        </div>
                    );
                }
            }
        });
        return to_return;
    }

    render() {
        return (
            <div className="sidebar-fixed position-fixed p-0" style=
                {
                    {
                        backgroundImage: `url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg")`,
                        height: "100vh",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "250px"
                    }
                }>
                <div className="w-100 position-absolute blue-gradient" style={{
                    height: "100vh",
                    opacity: "0.8",
                }}>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="/admin" className="waves-effect text-center py-2 d-flex justify-content-center" style={{ width: "175px", height: "175px" }}>
                            <img alt="Aesir Logo" className="img-fluid" src="/images/aesir.svg" />
                        </a>
                    </div>
                    <div className="col-12">
                        <div className="m-2">
                            <hr />
                        </div>
                    </div>
                    {this.renderSideNavigation().map(e => e)}
                </div>
            </div>
        );
    };
}

export default SideNavigation;