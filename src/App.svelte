<script>
	import { Col, Container, Row } from "sveltestrap";
	import Experience from "./sections/experiences/Experience.svelte";
	import Header from "./sections/header/Header.svelte";
	import Hobby from "./sections/Hobby.svelte";
	import Profile from "./sections/Profile.svelte";
	import Projects from "./sections/Projects.svelte";
	import Skills from "./sections/Skills.svelte";
	import Footer from "./sections/Footer.svelte";
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
