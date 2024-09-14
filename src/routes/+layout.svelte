<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import BackToTop from '$components/BackToTop.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<BackToTop />
	<Footer />
</div>
