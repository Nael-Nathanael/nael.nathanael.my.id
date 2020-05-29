import React, { Component } from 'react';
import ScrollDownButton from 'components/Button/ScrollDownButton';
import Aesir from 'components/Background/Aesir';
import Front from 'components/Sections/Front';
import SkillCard from 'components/Elements/SkillCard';
import './animate.css';
import { MDBBox, MDBTypography, MDBRow, MDBContainer, MDBCol } from 'mdbreact';

export class index extends Component {
    render() {
        return (
            <MDBBox className="bg-black" >

                <MDBBox>

                    {/* Scroll Button Animation */}
                    <ScrollDownButton />
                    {/* Scroll Button Animation */}

                    {/* Background Animation */}
                    <Aesir />
                    {/* Background Animation */}

                    {/* Main Content */}
                    <Front />
                    {/* Main Content */}

                </MDBBox>
                {/* Home Screen End */}

                {/* About Me */}
                <MDBContainer id="about" className="py-5">

                    {/* Upper Row */}
                    <MDBRow>

                        {/* Left Side */}
                        <MDBCol lg="4">

                            {/* Profile Image */}
                            <MDBBox className="justify-content-center align-items-center d-flex">
                                <img src={process.env.PUBLIC_URL + "/images/avatar-full.jpeg"} className="w-100 rounded" alt="full face" style={{ maxWidth: "300px" }} />
                            </MDBBox>
                            {/* Profile Image */}

                        </MDBCol>
                        {/* Left Side */}

                        {/* Right Side */}
                        <MDBCol lg="8" className="px-5">

                            {/* Profile Description */}
                            <section className="py-lg-0 py-5 w-100" style={{ width: "100vh" }}>
                                <MDBBox className="pb-1 text-white">
                                    <MDBTypography tag="h1" className={"text-white"}>Call me <span className="px-3 bg-white" style={{ color: "black" }}>Nael</span></MDBTypography>
                                </MDBBox>
                                <MDBBox className="lead text-white">
                                    <MDBBox tag="p">A hardworking and ambitious person in every aspects. I have a great passion for web
                                    developments. Having experience in web development project team, I am eager to be
                                    challenged in order to grow and further improve. Currently an undergraduate student of
                                    Information System study in University of Indonesia.</MDBBox>
                                </MDBBox>
                            </section>
                            {/* Profile Description */}

                            {/* Background */}
                            <MDBRow>

                                {/* Hobby */}
                                <MDBCol lg="6">
                                    <MDBBox tag="section" className="text-center">
                                        <MDBBox className="pb-1 text-white">
                                            <MDBTypography tag="h3">Hobby</MDBTypography>
                                        </MDBBox>
                                        <MDBRow>
                                            <MDBCol xs="12" md="6">
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/weblogo.png"}
                                                    alt="web logo"
                                                    tooltip="Currently learning the concept of Progressive Web Applications."
                                                    text="Web Applications Development"
                                                />
                                            </MDBCol>
                                            <MDBCol xs="12" md="6">
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/android.png"}
                                                    alt="android"
                                                    tooltip="Currently learning Android Studio and Flutter."
                                                    text="Android App Development"
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBBox>
                                </MDBCol>
                                {/* Hobby */}

                                {/* Experience */}
                                <MDBCol lg="6">
                                    <MDBBox tag="section" className="text-center">
                                        <MDBBox className="pb-1 text-white">
                                            <h3>Experience</h3>
                                        </MDBBox>
                                        <MDBRow>
                                            <MDBCol xs="12" md="6">
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/dsc.png"}
                                                    alt="DSC UI"
                                                    tooltip="Developer Student Club in University of Indonesia (2019 until now)"
                                                    text="Developer Student Club"
                                                />
                                            </MDBCol>
                                            <MDBCol xs="12" md="6">
                                                <SkillCard
                                                    src={process.env.PUBLIC_URL + "/images/uiyea.png"}
                                                    alt="UIYEA"
                                                    tooltip="Lead Developer on UI YEA 2019 Website"
                                                    text="UI YEA 2019 Website"
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBBox>
                                </MDBCol>
                                {/* Experience */}

                            </MDBRow>
                            {/* Background */}

                        </MDBCol>
                        {/* Right Side */}

                    </MDBRow>
                    {/* Upper Row */}

                    {/* Lower Row */}
                    <MDBRow className="py-5">

                        {/* Skill */}
                        <MDBBox tag="section">

                            {/* Title */}
                            <MDBBox className="pb-1 text-white text-center">
                                <MDBTypography tag="h1">Skills</MDBTypography>
                            </MDBBox>
                            {/* Title */}

                            {/* Showcase */}
                            <MDBRow className="text-center">
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/spring.jpg"}
                                        alt="Spring Boot"
                                        tooltip="Java-based Framework to Create Micro Services"
                                        text="Spring Boot"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/django.png"}
                                        alt="django"
                                        tooltip="Python Web Framework"
                                        text="Django"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/flask.png"}
                                        alt="Flask"
                                        tooltip="Lightweight Python Micro Web Framework"
                                        text="Flask"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/html.png"}
                                        alt="HTML 5"
                                        tooltip="Standard Markup Language for Web Browser Document"
                                        text="HTML5"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/css.png"}
                                        alt="CSS Logo"
                                        tooltip="Style Sheet Language to Describe Presentation of Markup Document"
                                        text="CSS3"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/js.png"}
                                        alt="Javascript"
                                        tooltip="Scripting Language to Describe Web Behavior"
                                        text="Javascript"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/react.png"}
                                        alt="ReactJS"
                                        tooltip="Javascript Library for Building User Interfaces"
                                        text="React"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/psd.png"}
                                        alt="Photoshop Logo"
                                        tooltip="Graphic Editor by Adobe"
                                        text="Adobe Photoshop"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/ae.png"}
                                        alt="After Effect Logo"
                                        tooltip="Digital Visual Effect Composing by Adobe"
                                        text="Adobe After Effect"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/prepro.png"}
                                        alt="Premiere Pro Logo"
                                        tooltip="Timeline Based Video Editing Software by Adobe"
                                        text="Adobe Premiere Pro"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/ci.png"}
                                        alt="CodeIgniter"
                                        tooltip="Web MVC Framework on PHP"
                                        text="CodeIgniter"
                                    />
                                </MDBCol>
                                <MDBCol lg="3" xs="6" sm="4" md="4">
                                    <SkillCard
                                        src={process.env.PUBLIC_URL + "/images/php-logo.png"}
                                        alt="PHP"
                                        tooltip="Programming Language for Website Development"
                                        text="PHP"
                                    />
                                </MDBCol>
                            </MDBRow>
                            {/* Showcase */}

                        </MDBBox>
                        {/* Skill */}

                    </MDBRow>
                    {/* Lower Row */}

                </MDBContainer>
                {/* About Me */}

                {/* Contact Me */}
                <MDBContainer id="contact" className="pt-5 text-center">

                    <a className="d-flex h-100 w-100 btn-highlight pl-2 text-center py-3 text-decoration-none" id="invite-btn" href="mailto:nael.nathanael71@gmail.com"> </a>

                    <MDBBox tag="i" className={"text-white"}>or</MDBBox>

                    <MDBTypography tag="h1" className="py-3 text-white"><span className="px-3 bg-white" style={{ color: "black" }}>Contact</span> Me</MDBTypography>

                    <MDBBox tag="p" className="m-0 pb-3">
                        <a className="text-white text-decoration-none mx-1" href="https://web.facebook.com/nathanael089503386642">Facebook</a>
                        <a className="text-white text-decoration-none mx-1" href="https://api.whatsapp.com/send?phone=6289503386642">WhatsApp</a>
                        <a className="text-white text-decoration-none mx-1" href="https://twitter.com/L__NathanaeL">Twitter</a>
                        <a className="text-white text-decoration-none mx-1" href="https://www.linkedin.com/in/naelnathanael71/">LinkedIn</a>
                        <a className="text-white text-decoration-none mx-1" href="https://github.com/Nael-Nathanael">GitHub</a>
                    </MDBBox>

                </MDBContainer>
                {/* Contact Me */}
            </MDBBox>
        )
    }
}

export default index
