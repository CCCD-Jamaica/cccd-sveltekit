<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_MAILGUN_API_KEY, PUBLIC_MAILGUN_DOMAIN } from '$env/static/public';
	import { goto } from '$app/navigation';

	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitStatus = '';

	const sendEmail = async (event) => {
		event.preventDefault();
		submitStatus = 'Sending...';

		const formData = new FormData();
		formData.append('from', `${name} <postmaster@${PUBLIC_MAILGUN_DOMAIN}>`);
		formData.append('to', 'kevin.matsunaga@outlook.com');
		formData.append('subject', subject);
		formData.append('text', message);

		try {
			const response = await fetch(`https://api.mailgun.net/v3/${PUBLIC_MAILGUN_DOMAIN}/messages`, {
				method: 'POST',
				headers: {
					'Authorization': `Basic ${btoa(`api:${PUBLIC_MAILGUN_API_KEY}`)}`
				},
				body: formData
			});

			if (response.ok) {
				submitStatus = 'Message sent successfully!';
				name = '';
				email = '';
				subject = '';
				message = '';
				// Redirect to fundraising page after successful email send
				setTimeout(() => {
					goto('/fundraising');
				}, 2000); // Wait for 2 seconds before redirecting
			} else {
				submitStatus = 'Failed to send message. Please try again.';
			}
		} catch (error) {
			console.error('Error:', error);
			submitStatus = 'An error occurred. Please try again later.';
		}
	};

	onMount(() => {
		if (!PUBLIC_MAILGUN_API_KEY || !PUBLIC_MAILGUN_DOMAIN) {
			console.error('Mailgun API key or domain is not set');
		}
	});
</script>

<svelte:head>
	<title>Contact Us</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8 text-red-900">Contact Us</h1>
		
		<div class="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="https://res.cloudinary.com/shinkirin/image/upload/v1720371983/cccd/android-chrome-512x512.webp"
					alt="CCCD Logo"
					width="300"
					height="300"
					class="mx-auto border-2 border-blue-500 rounded-lg p-2"
				/>
			</div>
			<div class="w-full md:w-2/3 max-w-2xl">
				<form on:submit={sendEmail} class="space-y-6">
					<div>
						<label for="name" class="block text-black text-md font-bold">Name</label>
						<input type="text" id="name" bind:value={name} required pattern="^[a-zA-Z\s]+$" title="Please enter a valid name (letters and spaces only)" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
					</div>
					<div>
						<label for="email" class="block text-black text-md font-bold">Email</label>
						<input type="email" id="email" bind:value={email} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
					</div>
					<div>
						<label for="subject" class="block text-black text-md font-bold">Subject</label>
						<input type="text" id="subject" bind:value={subject} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
					</div>
					<div>
						<label for="message" class="block text-black text-md font-bold">Message</label>
						<textarea id="message" bind:value={message} rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
					</div>
					<div>
						<button type="submit" class="w-full bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">
							Send Message
						</button>
					</div>
					{#if submitStatus}
						<p class="text-center mt-4 {submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}">
							{submitStatus}
						</p>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>

<section class="bg-gold-100 py-12 border-t-2 border-blue-500">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Our Locations</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">Kingston Campus</h3>
				<p class="mb-2">4 Cassia Park Road</p>
				<p class="mb-2">Kingston, Jamaica</p>
				<p>Phone: (876) 679-9687</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">Knockpatrick Campus</h3>
				<p class="mb-2">Mandeville, Jamaica</p>
				<p>Phone: (876) 904-9092</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">Montego Bay Campus</h3>
				<p class="mb-2">Montego Bay, Jamaica</p>
				<p>Phone: (876) 979-9153</p>
			</div>
		</div>
	</div>
</section>
<Support />
