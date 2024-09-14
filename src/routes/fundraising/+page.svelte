<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/support.svelte';
</script>

<svelte:head>
	<title>Fundraising</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8">Support Our Mission</h1>
		
		<!-- Standard Donations -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Make a Difference Today</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Your generous donation helps us continue our mission to reach, teach, and nurture the Deaf community in Jamaica. Every contribution, no matter the size, makes a significant impact.</p>
					<ul class="list-disc list-inside mb-4">
						<li>Provide educational resources</li>
						<li>Support vocational training programs</li>
						<li>Maintain and improve our facilities</li>
						<li>Fund community outreach initiatives</li>
					</ul>
					<a href="/donate" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
						Donate Now
					</a>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD students benefiting from donations"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Student Sponsorship -->
		<div>
			<h2 class="text-3xl font-semibold mb-6">Sponsor a Deaf Student</h2>
			<p class="mb-4">Change a life by sponsoring a deaf student. Your monthly contribution provides education, accommodation, and support for a student in need.</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
				<!-- Student 1 -->
				<div class="bg-gray-100 p-6 rounded-lg">
					<CldImage
						src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
						alt="John, a CCCD student"
						width="300"
						height="300"
						class="rounded-full mx-auto mb-4"
					/>
					<h3 class="text-xl font-semibold mb-2 text-center">John, 12</h3>
					<p class="text-center mb-4">John dreams of becoming a teacher. Your sponsorship will help him achieve his goals.</p>
					<a href="/sponsor?student=john" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Sponsor John
					</a>
				</div>
				<!-- Student 2 -->
				<div class="bg-gray-100 p-6 rounded-lg">
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="Maria, a CCCD student"
						width="300"
						height="300"
						class="rounded-full mx-auto mb-4"
					/>
					<h3 class="text-xl font-semibold mb-2 text-center">Maria, 15</h3>
					<p class="text-center mb-4">Maria is passionate about art and wants to become a graphic designer.</p>
					<a href="/sponsor?student=maria" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Sponsor Maria
					</a>
				</div>
				<!-- Student 3 -->
				<div class="bg-gray-100 p-6 rounded-lg">
					<CldImage
						src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
						alt="David, a CCCD student"
						width="300"
						height="300"
						class="rounded-full mx-auto mb-4"
					/>
					<h3 class="text-xl font-semibold mb-2 text-center">David, 10</h3>
					<p class="text-center mb-4">David loves mathematics and hopes to pursue a career in engineering.</p>
					<a href="/sponsor?student=david" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Sponsor David
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Social Enterprise Projects</h2>
		<p class="text-lg text-center mb-8">
			Help promote CCCD projects and support the deaf community in Jamaica by contributing to our sustainable initiatives.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="bg-gray-100 p-6 rounded-lg">
				<CldImage
					src="v1726012729/cccd_wordpress/deaf-village-eco-lodge.webp"
					alt="Deaf Village Eco-Lodge"
					width="400"
					height="300"
					class="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<h3 class="text-xl font-semibold mb-4">Deaf Village Eco-Lodge</h3>
				<p class="mb-4">
					Support our eco-friendly lodging project that provides employment opportunities for deaf individuals while offering unique cultural experiences to visitors.
				</p>
				<a href="/projects/eco-lodge" class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
					Learn More
				</a>
			</div>
			<div class="bg-gray-100 p-6 rounded-lg">
				<CldImage
					src="v1726012729/cccd_wordpress/cccd-craft-market.webp"
					alt="CCCD Craft Market"
					width="400"
					height="300"
					class="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<h3 class="text-xl font-semibold mb-4">CCCD Craft Market</h3>
				<p class="mb-4">
					Purchase handmade crafts created by our talented deaf artisans. Your support helps provide sustainable income and preserves traditional Jamaican craftsmanship.
				</p>
				<a href="/projects/craft-market" class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
					Shop Now
				</a>
			</div>
		</div>
		<div class="mt-8 text-center">
			<h3 class="text-2xl font-semibold mb-4">How You Can Help</h3>
			<ul class="list-disc list-inside text-left max-w-2xl mx-auto">
				<li>Spread the word about our social enterprise projects on social media</li>
				<li>Volunteer your skills to help develop and grow our initiatives</li>
				<li>Partner with us to create new sustainable opportunities for the deaf community</li>
				<li>Make a donation to support the expansion of our social enterprise programs</li>
			</ul>
		</div>
	</div>
</section>


<Support />
