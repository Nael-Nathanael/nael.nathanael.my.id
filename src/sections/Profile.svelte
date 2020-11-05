<script>
    import { Col, Container, Row } from "sveltestrap";
</script>

<style>
    #profile {
        min-height: 50vh;
        margin: 3em 0;
    }

    .contrass-text {
        color: black;
    }

    .size-control {
        max-height: 400px;
    }

    .description {
        font-size: 20px;
        line-height: 1.8;
        font-family: "Raleway", "Open Sans", sans-serif;
        color: #fff;
        text-align: justify;
    }
</style>

<div id="profile">
    <Container>
        <Row>
            <Col md="4">
                <div
                    class="d-flex justify-content-center align-items-center w-100 mb-5 mb-md-0">
                    <img
                        src="/images/avatar-full.jpeg"
                        class="rounded size-control"
                        alt="full face" />
                </div>
            </Col>
            <Col md="8">
                <div class="h-100 d-flex align-items-center wow bounceInUp">
                    <div class="px-3 mb-0 mb-md-5">
                        <h1 class="text-white font-weight-bold mb-3">
                            Call me
                            <span
                                class="contrass-text px-3 bg-white">Nael</span>
                        </h1>
                        <div>
                            <p class="description">
                                A hardworking and ambitious person in every
                                aspects. I have a great passion for web
                                developments. Having experience in web
                                development project team, I am eager to be
                                challenged in order to grow and further improve.
                                Currently an undergraduate student of
                                Information System study in University of
                                Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</div>
