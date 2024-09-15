<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/1Support.svelte';
</script>

<svelte:head>
	<title>Contact Us</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>
		
		<div class="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1726012729/cccd_wordpress/cccd-logo.png"
					alt="CCCD Logo"
					width="300"
					height="300"
					class="mx-auto"
				/>
			</div>
			<div class="w-full md:w-2/3 max-w-2xl">
				<form class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
						<input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						<input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
					</div>
					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
						<input type="text" id="subject" name="subject" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
					</div>
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
						<textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
					</div>
					<div>
						<button type="submit" class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Our Locations</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">Kingston</h3>
				<p class="mb-2">123 Main Street</p>
				<p class="mb-2">Kingston, Jamaica</p>
				<p>Phone: (876) 555-1234</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">Montego Bay</h3>
				<p class="mb-2">456 Beach Road</p>
				<p class="mb-2">Montego Bay, Jamaica</p>
				<p>Phone: (876) 555-5678</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">Mandeville</h3>
				<p class="mb-2">789 Hill Avenue</p>
				<p class="mb-2">Mandeville, Jamaica</p>
				<p>Phone: (876) 555-9012</p>
			</div>
		</div>
	</div>
</section>
<Support />
