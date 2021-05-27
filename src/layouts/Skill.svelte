<script>
    import { Col, Container, Row } from "sveltestrap";
    import { onMount } from "svelte";
    import IconCard from "../components/IconCard.svelte";

    let fetchMajorSkillData;
    let fetchMinorSkillData;
    onMount(async () => {
        fetchMajorSkillData = await fetch(
            "https://api.npoint.io/b9b143d650af3dc5b874"
        ).then((x) => x.json());

        fetchMinorSkillData = await fetch(
            "https://api.npoint.io/7619b2b5f46baab6f7c9"
        ).then((x) => x.json());
    });
</script>

<div id="skill">
    <Container>
        <h3 class="text-center text-light">
            Let's talk about technical skills, shall we?
        </h3>
        {#if fetchMajorSkillData}
            {#await fetchMajorSkillData}
                <!-- promise is pending -->
            {:then fetchMajorSkillData}
                <!-- promise was fulfilled -->
                <Row class="d-flex justify-content-around mt-3" noGutters>
                    {#each fetchMajorSkillData.data as { title, icon }}
                        <Col
                                xs="6"
                                md="3"
                                xl="2"
                                class="d-flex flex-column align-items-center justify-content-center rounded"
                        >
                            <IconCard {icon} organization={title} />
                        </Col>
                    {/each}
                </Row>
            {/await}
        {/if}
    </Container>
    <div class="py-4" />
    <Container>
        <h3 class="text-center text-light">other skills from hobby...</h3>
        <Row class="d-flex justify-content-around mt-3" noGutters>
            {#if fetchMinorSkillData}
                {#await fetchMinorSkillData}
                    <!-- promise is pending -->
                {:then fetchMinorSkillData}
                    <!-- promise was fulfilled -->
                    <Row class="d-flex justify-content-around mt-3" noGutters>
                        {#each fetchMinorSkillData.data as { title, icon }}
                            <Col
                                    xs="6"
                                    md="3"
                                    xl="2"
                                    class="d-flex flex-column align-items-center justify-content-around rounded"
                            >
                                <IconCard {icon} organization={title} small />
                            </Col>
                        {/each}
                    </Row>
                {/await}
            {/if}
        </Row>
    </Container>
</div>

<style>
    #skill {
        margin-bottom: 3rem;
    }
    * {
        color: black;
    }
</style>
