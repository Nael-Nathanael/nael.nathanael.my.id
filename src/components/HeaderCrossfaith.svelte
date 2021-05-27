<script>
  import { Container } from "sveltestrap";
  import ProfileCard from "../components/ProfileCard.svelte";
  let simpleMode = true;
</script>

<header on:click={() => (simpleMode = !simpleMode)}>
  <iframe
    src="/bg.html"
    class="w-100 h-100"
    frameborder="0"
    title="aesir cytus bg"
    style="position: absolute; z-index: -1"
  />
  <Container>
    <h1 class="display-1 text-center">CrossFaith DevTeam</h1>
  </Container>
</header>

<style>
  header {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  div {
    right: 30vw;
    top: 15vh;
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-name: fade;
    color: grey;
    font-size: 24px;
    position: absolute;
    z-index: -1;
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
