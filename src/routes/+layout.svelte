<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import BackToTop from '$components/BackToTop.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header role="banner" aria-label="Header" />
	<main role="main" aria-label="Main Content">
		<slot />
	</main>
	<BackToTop role="button" aria-label="Back to Top" />
	<Footer role="contentinfo" aria-label="Footer" />
</div>
