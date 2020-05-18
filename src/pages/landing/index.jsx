import React, { Component } from 'react';
import ScrollDownButton from 'components/Button/ScrollDownButton';
import Aesir from 'components/Background/Aesir';
import Front from 'components/Sections/Front';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from 'components/Elements/SkillCard';
import './animate.css';

export class index extends Component {
    render() {
        return (
            <div className="pageContent">

                <div id="landing">

                    {/* Scroll Button Animation */}
                    <ScrollDownButton />
                    {/* Scroll Button Animation */}

                    {/* Background Animation */}
                    <Aesir />
                    {/* Background Animation */}

                    {/* Main Content */}
                    <Front />
                    {/* Main Content */}

                </div>
                {/* Home Screen End */}

                {/* About Me */}
                <Container id="about" className="py-5">

                    {/* Upper Row */}
                    <Row>

                        {/* Left Side */}
                        <Col lg={4}>

                            {/* Profile Image */}
                            <div className="justify-content-center align-items-center d-flex">
                                <img src={process.env.PUBLIC_URL + "/images/avatar-full.jpeg"} className="w-100 rounded fullAva" alt="full face" />
                            </div>
                            {/* Profile Image */}

                        </Col>
                        {/* Left Side */}

                        {/* Right Side */}
                        <Col lg={8} className="px-5">

                            {/* Profile Description */}
                            <section className="py-lg-0 py-5">
                                <div className="section-title">
                                    <h1 className={"text-white"}>Call me <span className="contrass-text px-3 bg-white">Nael</span></h1>
                                </div>
                                <div className="section-content text-white">
                                    <p>A hardworking and ambitious person in every aspects. I have a great passion for web
                                    developments. Having experience in web development project team, I am eager to be
                                    challenged in order to grow and further improve. Currently an undergraduate student of
                                    Information System study in University of Indonesia.</p>
                                </div>
                            </section>
                            {/* Profile Description */}

                            {/* Background */}
                            <Row>

                                {/* Hobby */}
                                <Col lg={6}>
                                    <section class="text-center">
                                        <div class="section-title">
                                            <h3>Hobby</h3>
                                        </div>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/weblogo.png"}
                                                    alt="web logo"
                                                    tooltip="Currently learning the concept of Progressive Web Applications."
                                                    text="Web Applications Development"
                                                />
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/android.png"}
                                                    alt="android"
                                                    tooltip="Currently learning Android Studio and Flutter."
                                                    text="Android App Development"
                                                />
                                            </Col>
                                        </Row>
                                    </section>
                                </Col>
                                {/* Hobby */}

                                {/* Experience */}
                                <Col lg={6}>
                                    <section className="text-center">
                                        <div class="section-title">
                                            <h3>Experience</h3>
                                        </div>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/dsc.png"}
                                                    alt="DSC UI"
                                                    tooltip="Developer Student Club in University of Indonesia (2019 until now)"
                                                    text="Developer Student Club"
                                                />
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/uiyea.png"}
                                                    alt="UIYEA"
                                                    tooltip="Lead Developer on UI YEA 2019 Website"
                                                    text="UI YEA 2019 Website"
                                                />
                                            </Col>
                                        </Row>
                                    </section>
                                </Col>
                                {/* Experience */}

                            </Row>
                            {/* Background */}

                        </Col>
                        {/* Right Side */}

                    </Row>
                    {/* Upper Row */}

                    {/* Lower Row */}
                    <Row className="py-5">

                        {/* Skill */}
                        <section>

                            {/* Title */}
                            <div class="section-title text-center">
                                <h1>Skills</h1>
                            </div>
                            {/* Title */}

                            {/* Showcase */}
                            <Row className="text-center">
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/spring.jpg"}
                                        alt="Spring Boot"
                                        tooltip="Java-based Framework to Create Micro Services"
                                        text="Spring Boot"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/django.png"}
                                        alt="django"
                                        tooltip="Python Web Framework"
                                        text="Django"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/flask.png"}
                                        alt="Flask"
                                        tooltip="Lightweight Python Micro Web Framework"
                                        text="Flask"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/html.png"}
                                        alt="HTML 5"
                                        tooltip="Standard Markup Language for Web Browser Document"
                                        text="HTML5"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/css.png"}
                                        alt="CSS Logo"
                                        tooltip="Style Sheet Language to Describe Presentation of Markup Document"
                                        text="CSS3"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/js.png"}
                                        alt="Javascript"
                                        tooltip="Scripting Language to Describe Web Behavior"
                                        text="Javascript"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/react.png"}
                                        alt="ReactJS"
                                        tooltip="Javascript Library for Building User Interfaces"
                                        text="React"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/psd.png"}
                                        alt="Photoshop Logo"
                                        tooltip="Graphic Editor by Adobe"
                                        text="Adobe Photoshop"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/ae.png"}
                                        alt="After Effect Logo"
                                        tooltip="Digital Visual Effect Composing by Adobe"
                                        text="Adobe After Effect"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/prepro.png"}
                                        alt="Premiere Pro Logo"
                                        tooltip="Timeline Based Video Editing Software by Adobe"
                                        text="Adobe Premiere Pro"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/ci.png"}
                                        alt="CodeIgniter"
                                        tooltip="Web MVC Framework on PHP"
                                        text="CodeIgniter"
                                    />
                                </Col>
                                <Col lg={3} xs={6} sm={4} md={4}>
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/php-logo.png"}
                                        alt="PHP"
                                        tooltip="Programming Language for Website Development"
                                        text="PHP"
                                    />
                                </Col>
                            </Row>
                            {/* Showcase */}

                        </section>
                        {/* Skill */}

                    </Row>
                    {/* Lower Row */}

                </Container>
                {/* About Me */}

                {/* Contact Me */}
                <div id="contact" className="pt-5 text-center container text-center">

                    <a className="d-flex h-100 w-100 btn-highlight py-3" id="invite-btn" href="mailto:nael.nathanael71@gmail.com"> </a>

                    <i className={"text-white"}>or</i>

                    <h1 className="py-3 text-white"><span className="contrass-text px-3 bg-white">Contact</span> Me</h1>

                    <p id="contact-links" className="transition-smooth">
                        <a href="https://web.facebook.com/nathanael089503386642">Facebook</a>
                        <a href="https://api.whatsapp.com/send?phone=6289503386642">WhatsApp</a>
                        <a href="https://twitter.com/L__NathanaeL">Twitter</a>
                        <a href="https://www.linkedin.com/in/naelnathanael71/">LinkedIn</a>
                        <a href="https://github.com/Nael-Nathanael">GitHub</a>
                    </p>

                </div>
                {/* Contact Me */}
            </div>
        )
    }
}

export default index
