<script>
    import { Col, Row } from "sveltestrap";
    import { onMount } from "svelte";
    import ExperienceCard from "../components/ExperienceCard.svelte";
    let fetchExperienceData;
    onMount(async () => {
        fetchExperienceData = await fetch(
            "https://api.npoint.io/6dd05f031901b5baed48"
        ).then((x) => x.json());
    });
</script>

<div>
    <h3 class="text-center text-light">Experiences</h3>
    <Row class="d-flex justify-content-around mt-3" noGutters>
        {#if fetchExperienceData}
            {#await fetchExperienceData}
                <!-- promise is pending -->
            {:then fetchExperienceData}
                <!-- promise was fulfilled -->
                <Row class="d-flex justify-content-around mt-3" noGutters>
                    {#each fetchExperienceData.data as { icon, organization, descriptions, start, end }}
                        <Col
                                xs="12"
                                class="icon_card d-flex flex-column align-items-center justify-content-center rounded"
                        >
                            <ExperienceCard
                                    {icon}
                                    {organization}
                                    {descriptions}
                                    {start}
                                    {end}
                            />
                        </Col>
                    {/each}
                </Row>
            {/await}
        {/if}
    </Row>
</div>

<style>
    div {
        padding-bottom: 3rem;
    }
    h3 {
        color: black;
    }
</style>