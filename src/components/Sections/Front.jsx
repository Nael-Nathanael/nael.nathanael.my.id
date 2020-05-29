import React, { Component } from 'react'
import Avatar from 'components/Elements/Avatar'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBTypography, MDBBox } from 'mdbreact'

export class Front extends Component {
    render() {
        return (
            <MDBBox className={"d-flex flex-row justify-content-center align-items-center bg-black mb-2"} style={{ height: "100vh" }}>

                {/* Wide Screen Version */}
                <Container className={"clearfix d-none d-md-block"} style={{ zIndex: 1 }}>

                    {/* Avatar */}
                    <Avatar height="130px" width="130px" className={"float-left rounded-circle mr-4"} />
                    {/* Avatar */}

                    {/* Description */}
                    <MDBBox className={"d-flex flex-column justify-content-center "} style={{ minHeight: "130px" }}>
                        <MDBTypography tag="h3" className="text-uppercase text-white">
                            Nathanael
                        </MDBTypography>
                        <MDBTypography tag="h1" className="text-uppercase text-white">
                            I am{" "}
                            <MDBBox tag="span" id="toCycle">
                                Web Developer | Software Engineer
                            </MDBBox>
                        </MDBTypography>
                    </MDBBox>
                    {/* Description */}

                </Container>
                {/* Wide Screen Version */}

                {/* <!--Mobile Version--> */}
                <Container className="clearfix d-md-none d-block text-center" style={{ zIndex: 1 }}>

                    {/* <!--Upper Row--> */}
                    <MDBBox className="d-flex justify-content-center align-items-center">
                        {/* Avatar */}
                        <Avatar height="130px" width="130px" className="rounded-circle" />
                        {/* Avatar */}
                    </MDBBox>
                    {/* <!--Upper Row End--> */}

                    {/* <!--Lower Row--> */}
                    <Row>
                        <Col className="align-items-center">
                            <MDBTypography tag="h3" className="text-uppercase text-white pt-2">Nathanael</MDBTypography>
                            <MDBTypography tag="h1" className="text-uppercase text-white">I am<br />
                                <MDBBox tag="span" id="toCycleMobile">
                                    Web Developer | Software Engineer
                                </MDBBox>
                            </MDBTypography>
                        </Col>
                    </Row>
                    {/* <!--Lower Row End--> */}

                </Container>
                {/* <!--Mobile Version End--> */}

            </MDBBox>
        )
    }
}

export default Front
