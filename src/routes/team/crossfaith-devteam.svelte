<script>
  import { Container } from "sveltestrap";
  import HeaderCrossfaith from "../../components/HeaderCrossfaith.svelte";
  import ProjectCrossFaith from "../../layouts/ProjectCrossFaith.svelte";
  import Footer from "../../components/Footer.svelte";
  import CrossFaithDevTeam from "../../layouts/CrossFaithDevTeam.svelte";
</script>

<HeaderCrossfaith />

<div class="text-center">
  <Container>
    <div class="h-100 d-flex align-items-center wow bounceInUp">
      <div class="px-3 mb-0 mb-md-5">
        <h1 class="text-white font-weight-bold mb-3">
          About
          <span class="contrass-text px-3 bg-white">CrossFaith DevTeam</span>
        </h1>
        <div>
          <p class="description text-center">
            A small team that met under the same faculty, started by building a web-based trial system requested by our
            clients masukui.id
          </p>
          <p class="description text-center">
            The name of our team is taken from cooperation in unity in unlimited diversity, despite the issues of
            political and religious hatred that some people in our country develop. We want to have the spirit that
            religion is a private matter, needs to be respected as human beings and not be forced on others.
          </p>
        </div>
      </div>
    </div>
  </Container>
</div>

<div class="py-md-5 py-0"></div>
<ProjectCrossFaith />
<div class="py-md-5 py-0"></div>
<CrossFaithDevTeam />
<div class="py-md-5 py-0"></div>
<Footer />

<style>
    .contrass-text {
        color: black;
    }

    .description {
        font-size: 20px;
        line-height: 1.8;
        font-family: "Raleway", "Open Sans", sans-serif;
        color: #fff;
        text-align: justify;
    }
</style>