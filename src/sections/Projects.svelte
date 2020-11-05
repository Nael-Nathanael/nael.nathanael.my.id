<script>
    import { Card, Col, Container, Row } from "sveltestrap";
    import { NaelSiteService } from "../services/NaelSiteService";

    let naelSiteService = new NaelSiteService();
</script>

<style>
    .description {
        font-size: 20px;
        line-height: 1.8;
        font-family: "Raleway", "Open Sans", sans-serif;
        color: #fff;
        text-align: justify;
    }

    #projects {
        min-height: 50vh;
    }

    .icon_card {
        height: 150px;
        width: 150px;
        margin: 10px;
    }

    * {
        color: black;
    }
</style>

<div id="projects">
    <Container>
        <h3 class="text-center text-light">Projects</h3>
        <Row class="d-flex justify-content-around mt-3" noGutters>
            {#each naelSiteService.getProjects().data as { icon, organization, iconWithIdentifier }}
                <Col
                    sm="6"
                    md="3"
                    class="icon_card d-flex flex-column align-items-center justify-content-center rounded">
                    <div
                        class="icon_card d-flex flex-column align-items-center justify-content-center bg-white rounded">
                        {#if icon}
                            <img src={icon} alt={organization} width="100px" />
                            {#if !iconWithIdentifier}{organization}{/if}
                        {:else}<span class="h3 m-0"> {organization} </span>{/if}
                    </div>
                </Col>
            {/each}
        </Row>
    </Container>
</div>
