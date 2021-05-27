<script>
    import { Col, Container, Row } from "sveltestrap";
</script>

<div id="profile">
    <Container>
        <Row>
            <Col md="4">
                <div
                        class="d-flex justify-content-center align-items-center w-100 mb-5 mb-md-0"
                >
                    <img
                            src="/images/avatar-full.jpeg"
                            class="rounded size-control"
                            alt="full face"
                    />
                </div>
            </Col>
            <Col md="8">
                <div class="h-100 d-flex align-items-center wow bounceInUp">
                    <div class="px-3 mb-0 mb-md-5">
                        <h1 class="text-white font-weight-bold mb-3">
                            Call me
                            <span class="contrass-text px-3 bg-white">Nael</span>
                        </h1>
                        <div>
                            <p class="description">
                                Work smart, work hard, and work fast. Always serve the best on
                                both design and performance aspects. Ambitious and deliver
                                earlier than the dateline without neglecting the quality. Having
                                a great passion for website and web application developments, I
                                always eager to be challenged in order to grow and further
                                improve. Currently a freelancer, an intern, and a final year
                                student of Information System study in University of Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</div>

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
