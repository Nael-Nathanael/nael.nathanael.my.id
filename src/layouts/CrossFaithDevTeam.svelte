<script>
  import { Col, Container, Row } from "sveltestrap";
  import { onMount } from "svelte";
  import MemberIconCard from "../components/MemberIconCard.svelte";

  let fetchTeamMember;
  onMount(async () => {
    fetchTeamMember = await fetch(
      "https://api.npoint.io/c8e4ffffb16c1ff8b987"
    ).then((x) => x.json());
  });
</script>

<div id="skill">
  <Container>
    <h3 class="text-center text-light">
      Our Team Members
    </h3>
    {#if fetchTeamMember}
      {#await fetchTeamMember}
        <!-- promise is pending -->
      {:then fetchTeamMember}
        <!-- promise was fulfilled -->
        <Row class="d-flex justify-content-around">
          {#each fetchTeamMember.data as { title, icon, href }}
            <Col
              xs="6"
              md="3"
              xl="2"
              class="d-flex flex-column align-items-center justify-content-center rounded"
            >
              <MemberIconCard {icon} {href} organization={title} />
            </Col>
          {/each}
        </Row>
      {/await}
    {/if}
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
