<script>
    import { Col, Row } from "sveltestrap";
    import { NaelSiteService } from "../../services/NaelSiteService";
    import ExperienceCard from "./components/ExperienceCard.svelte";

    let naelSiteService = new NaelSiteService();
</script>

<style>
    #experience {
        padding-bottom: 3rem;
    }

    * {
        color: black;
    }
</style>

<div id="experience">
    <h3 class="text-center text-light">Experiences</h3>
    <Row class="d-flex justify-content-around mt-3" noGutters>
        {#each naelSiteService.getExperiences().data as { icon, organization, descriptions, start, end }}
            <Col
                xs="12"
                class="icon_card d-flex flex-column align-items-center justify-content-center rounded">
                <ExperienceCard
                    {icon}
                    {organization}
                    {descriptions}
                    {start}
                    {end} />
            </Col>
        {/each}
    </Row>
</div>
