<script>
	import { Col, Container, Row } from "sveltestrap";
	import Header from "./sections/header/Header.svelte";
	import Profile from "./sections/Profile.svelte";
	import Experience from "./sections/Experience.svelte";
</script>

<Header />
<Profile />
<div class="py-3" />
<Container>
	<Row>
		<Col md="6">
			<Experience />
		</Col>
		<Col md="6" />
	</Row>
</Container>
