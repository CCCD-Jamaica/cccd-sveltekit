<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
</script>

<svelte:head>
	<title>Get Involved</title>
	<meta name="description" content="Get involved with CCCD Jamaica" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8">Get Involved</h1>
		
		<!-- Missionary Duty -->
		<div id="missionary" class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Become a Missionary</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Join our mission to serve the Deaf community in Jamaica. As a missionary, you'll have the opportunity to:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Teach at one of our campuses</li>
						<li>Assist with vocational training programs</li>
						<li>Support our administrative team</li>
						<li>Contribute to community outreach initiatives</li>
					</ul>
					<a href="#" class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Apply Now</a>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD Missionary teaching students"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Volunteering -->
		<div id="volunteer" class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Volunteer Opportunities</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<CldImage
						src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
						alt="Volunteers working with CCCD students"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
				<div>
					<p class="mb-4">We offer various volunteering opportunities for those who want to make a difference:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Short-term mission trips</li>
						<li>Skills-based volunteering (e.g., IT, maintenance, healthcare)</li>
						<li>Event planning and fundraising</li>
						<li>Virtual volunteering options</li>
					</ul>
					<a href="#" class="inline-block bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">Sign Up to Volunteer</a>
				</div>
			</div>
		</div>

		<!-- Learn Jamaican Sign Language -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Learn Jamaican Sign Language (JSL)</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Enhance your ability to communicate with the Deaf community by learning JSL:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Online courses for beginners to advanced learners</li>
						<li>In-person workshops at our campuses</li>
						<li>Cultural immersion programs</li>
						<li>Certification opportunities</li>
					</ul>
					<a href="#" class="inline-block bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Start Learning JSL</a>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="JSL learning session"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Donation and Sponsorship -->
		<div id="donate">
			<h2 class="text-3xl font-semibold mb-6">Donate or Sponsor a Student</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Your financial support can make a lasting impact:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Sponsor a student's education</li>
						<li>Contribute to our building and maintenance fund</li>
						<li>Support our vocational training programs</li>
						<li>Help fund our community outreach initiatives</li>
					</ul>
					<div class="flex space-x-4">
						<a href="#" class="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Donate Now</a>
						<a href="#" class="inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Sponsor a Student</a>
					</div>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD students benefiting from sponsorship"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<Support />
