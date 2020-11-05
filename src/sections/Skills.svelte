<script>
    import { Col, Container, Row } from "sveltestrap";
    import { NaelSiteService } from "../services/NaelSiteService";
    import IconCard from "./components/IconCard.svelte";

    let naelSiteService = new NaelSiteService();
</script>

<style>
    #skill {
        margin-bottom: 3rem;
    }

    * {
        color: black;
    }
</style>

<div id="skill">
    <Container>
        <h3 class="text-center text-light">
            Let's talk about technical skills, shall we?
        </h3>
        <Row class="d-flex justify-content-around mt-3" noGutters>
            {#each naelSiteService.getMajorSkills().data as { title, icon }}
                <Col
                    xs="6"
                    md="3"
                    xl="2"
                    class="d-flex flex-column align-items-center justify-content-center rounded">
                    <IconCard {icon} organization={title} />
                </Col>
            {/each}
        </Row>
    </Container>
    <div class="py-4" />
    <Container>
        <h3 class="text-center text-light">other skills from hobby...</h3>
        <Row class="d-flex justify-content-around mt-3" noGutters>
            {#each naelSiteService.getMinorSkills().data as { title, icon }}
                <Col
                    xs="6"
                    md="3"
                    class="d-flex flex-column align-items-center justify-content-center rounded">
                    <IconCard {icon} organization={title} small={true} />
                </Col>
            {/each}
        </Row>
    </Container>
</div>
