<script>
  import { Col, Container, Row } from "sveltestrap";
  import Experience from "../layouts/Experience.svelte";
  import Header from "../components/Header.svelte";
  import Hobby from "../layouts/Hobby.svelte";
  import Profile from "../layouts/Profile.svelte";
  import Projects from "../layouts/Project.svelte";
  import Skills from "../layouts/Skill.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />
<Profile />
<div class="py-md-5 py-0" />
<Projects />
<div class="py-md-5 py-0" />
<Container>
  <Row noGutters>
    <Col xs="12" md="8">
      <Experience />
    </Col>
    <Col xs="12" md="4">
      <Hobby />
    </Col>
  </Row>
</Container>
<div class="py-md-5 py-0" />
<Skills />
<div class="py-md-5 py-0" />
<Footer />
