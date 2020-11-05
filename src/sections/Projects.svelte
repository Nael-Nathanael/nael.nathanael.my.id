<script>
    import { Card, Col, Container, Row } from "sveltestrap";
    import { NaelSiteService } from "../services/NaelSiteService";
    import IconCard from "./components/IconCard.svelte";

    let naelSiteService = new NaelSiteService();
</script>

<style>
    #projects {
        margin-bottom: 3rem;
    }

    * {
        color: black;
    }
</style>

<div id="projects">
    <Container>
        <h3 class="text-center text-light">Completed Projects</h3>
        <Row class="d-flex justify-content-around mt-3" noGutters>
            {#each naelSiteService.getProjects().data as { icon, organization, iconWithIdentifier }}
                <Col
                    xs="6"
                    md="3"
                    class="d-flex flex-column align-items-center justify-content-center rounded">
                    <IconCard {icon} {organization} {iconWithIdentifier} />
                </Col>
            {/each}
        </Row>
    </Container>
</div>
