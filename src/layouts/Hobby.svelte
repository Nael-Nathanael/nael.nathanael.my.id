<script>
  import { Col, Container, Row } from "sveltestrap";
  import { onMount } from "svelte";

  import IconCard from "../components/IconCard.svelte";
  let fetchHobbyData;
  onMount(async () => {
    fetchHobbyData = await fetch(
      "https://api.npoint.io/e748059ce93af68c1050"
    ).then((x) => x.json());
  });
</script>

<div>
  <Container>
    <h3 class="text-center text-light">What I do in spare time</h3>
    {#if fetchHobbyData}
      {#await fetchHobbyData}
        <!-- promise is pending -->
      {:then fetchHobbyData}
        <Row class="d-flex justify-content-around" noGutters>
          {#each fetchHobbyData.data as { icon, organization, iconWithIdentifier }}
            <Col
              xs="6"
              md="12"
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
  div {
    margin-bottom: 3rem;
  }
  
  * {
    color: black;
  }
</style>
