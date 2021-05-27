<script>
    import { Col, Container, Row } from "sveltestrap";
    import { onMount } from "svelte";
    import IconCard from "../components/IconCard.svelte";

    let fetchProjectData;
    onMount(async () => {
        fetchProjectData = await fetch(
            "https://api.npoint.io/03dfac3deb619e60e123"
        ).then((x) => x.json());
    });
</script>

<div id="projects">
    <Container>
        <h3 class="text-center text-light">Completed Projects</h3>
        {#if fetchProjectData}
            {#await fetchProjectData}
                <!-- promise is pending -->
            {:then fetchProjectData}
                <!-- promise was fulfilled -->
                <Row class="d-flex justify-content-around mt-3" noGutters>
                    {#each fetchProjectData.data as { icon, organization, iconWithIdentifier }}
                        <Col
                                xs="6"
                                md="3"
                                class="d-flex flex-column align-items-center justify-content-center rounded"
                        >
                            <IconCard {icon} {organization} {iconWithIdentifier} />
                        </Col>
                    {/each}
                </Row>
            {/await}
        {/if}
    </Container>
</div>

<style>
    #projects {
        margin-bottom: 3rem;
    }
    * {
        color: black;
    }
</style>
