<script>
	import { Col, Container, Row } from "sveltestrap";
	import Experience from "./sections/experiences/Experience.svelte";
	import Header from "./sections/header/Header.svelte";
	import Profile from "./sections/Profile.svelte";
	import Projects from "./sections/Projects.svelte";
</script>

<Header />
<Profile />
<div class="py-md-3 py-0" />
<Projects />
<Container>
	<Row noGutters>
		<Col xs="12" md="8">
			<Experience />
		</Col>
	</Row>
</Container>
