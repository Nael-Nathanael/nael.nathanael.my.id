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
<div class="py-md-5 py-0"></div>
<Projects />
<div class="py-md-5 py-0"></div>
<Container>
  <Row noGutters>
    <Col md="8" xs="12">
      <Experience />
    </Col>
    <Col md="4" xs="12">
      <Hobby />
    </Col>
  </Row>
</Container>
<div class="py-md-5 py-0"></div>
<Skills />
<div class="py-md-5 py-0"></div>
<Footer />