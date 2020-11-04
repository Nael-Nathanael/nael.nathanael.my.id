<script>
    import { Card, Container, CardBody, Col, Row } from "sveltestrap";
    import { slide } from "svelte/transition";
    let title = ["WEB DEVELOPER", "SOFTWARE ENGINEER"];
    let index = 0;
    let currClass = " fade-in";
    let counter = 0;

    setInterval(() => {
        if (counter == 3) {
            currClass = " fade-out";
            counter++;
        } else if (counter == 4) {
            if (index >= title.length - 1) {
                index = 0;
            } else {
                index++;
            }

            currClass = " fade-in";

            counter = 0;
        } else {
            counter++;
        }
    }, 500);

    let simpleMode = true;

    function toggleMode() {
        simpleMode = !simpleMode;
    }
</script>

<style>
    header {
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .custom-animated {
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .fade-in {
        animation-name: fadeInOpacity;
    }

    .fade-out {
        animation-name: fadeOutOpacity;
    }

    .black {
        color: black;
    }

    .profile_card {
        width: 100%;
        max-width: 300px;
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOutOpacity {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>

<header on:click={() => toggleMode()}>
    <iframe
        src="./bg.html"
        class="w-100 h-100"
        frameborder="0"
        title="aesir cytus bg"
        style="position: absolute; z-index: -1" />
    <Container>
        {#if simpleMode}
            <div
                transition:slide
                class="align-items-center d-flex justify-content-center flex-column">
                <img
                    src="https://nael.nathanael.my.id/images/avatar.jpeg"
                    alt=""
                    srcset=""
                    class="rounded-circle mb-4" />
                <div>
                    <h1 class="text-center mb-0">NATHANAEL</h1>
                    <h3 class={'text-center custom-animated' + currClass}>
                        {title[index]}
                    </h3>
                </div>
            </div>
        {:else}
            <div transition:slide>
                <Row>
                    <Col lg={{ size: 8, offset: 2 }} md={{ size: 10, offset: 1 }} sm={{ size: 12 }}>
                        <Card body>
                            <div>
                                <Row class="h-100">
                                    <Col xs="12" class="h-100">
                                        <div
                                            class="align-items-center d-flex justify-content-center flex-column h-100">
                                            <img
                                                src="https://nael.nathanael.my.id/images/avatar.jpeg"
                                                alt=""
                                                srcset=""
                                                height="150px"
                                                class="rounded-circle mb-2" />
                                            <div>
                                                <h3
                                                    class="text-center mb-0 black">
                                                    NATHANAEL
                                                </h3>
                                                <h5
                                                    class={'black text-center custom-animated' + currClass}>
                                                    {title[index]}
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="12" class="h-100">
                                        <h4 class="black">Personal Info</h4>
                                        <hr />
                                        <Row>
                                            <Col xs="12">
                                                <span
                                                    class="black font-weight-bold">
                                                    Date of Birth
                                                </span>
                                            </Col>
                                            <Col xs="12" class="mb-2">
                                                <span class="black">
                                                    22/09/1999
                                                </span>
                                            </Col>
                                            <Col xs="12">
                                                <span
                                                    class="black font-weight-bold">
                                                    Nationality
                                                </span>
                                            </Col>
                                            <Col xs="12" class="mb-2">
                                                <span class="black">
                                                    Indonesia
                                                </span>
                                            </Col>
                                            <Col xs="12">
                                                <span
                                                    class="black font-weight-bold">
                                                    Address
                                                </span>
                                            </Col>
                                            <Col xs="12" class="mb-2">
                                                <span class="black">
                                                    Jl. Juragan Sinda Raya
                                                    No.26, Kukusan, Kecamatan
                                                    Beji, Depok 16425, Indonesia
                                                </span>
                                            </Col>
                                            <Col xs="12">
                                                <span
                                                    class="black font-weight-bold">
                                                    Phone Number
                                                </span>
                                            </Col>
                                            <Col xs="12" class="mb-2">
                                                <span class="black">
                                                    +62 895 0338 6642
                                                </span>
                                            </Col>
                                            <Col xs="12">
                                                <span
                                                    class="black font-weight-bold">
                                                    Email Address
                                                </span>
                                            </Col>
                                            <Col xs="12" class="mb-2">
                                                <span class="black">
                                                    nael.nathanael71@gmail.com
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        {/if}
    </Container>
</header>
