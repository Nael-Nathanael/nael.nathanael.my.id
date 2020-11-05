<script>
    import { Container } from "sveltestrap";

    import ProfileCard from "./components/ProfileCard.svelte";

    let simpleMode = true;

    function toggleMode() {
        simpleMode = !simpleMode;
    }
</script>

<style>
    header {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>

<header on:click={() => toggleMode()}>
    <iframe
        src="./bg.html"
        class="w-100 h-100"
        frameborder="0"
        title="aesir cytus bg"
        style="position: absolute; z-index: -1" />
    <Container>
        <ProfileCard {simpleMode} />
    </Container>
</header>
