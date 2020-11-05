<script>
    import { Col, Container, Row } from "sveltestrap";
    import { NaelSiteService } from "../services/NaelSiteService";
    import IconCard from "./components/IconCard.svelte";

    let naelSiteService = new NaelSiteService();
</script>

<style>
    #hobby {
        margin-bottom: 3rem;
    }

    * {
        color: black;
    }
</style>

<div id="hobby">
    <Container>
        <h3 class="text-center text-light">What I do in spare time</h3>
        <Row class="d-flex justify-content-around" noGutters>
            {#each naelSiteService.getHobby().data as { icon, organization, iconWithIdentifier }}
                <Col
                    xs="6"
                    md="12"
                    class="d-flex flex-column align-items-center justify-content-center rounded">
                    <IconCard {icon} {organization} {iconWithIdentifier} />
                </Col>
            {/each}
        </Row>
    </Container>
</div>
