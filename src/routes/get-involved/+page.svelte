<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$lib/Support.svelte';	
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<MetaTags
    title="Get Involved - Caribbean Christian Centre for the Deaf"
    description="Discover ways to get involved with Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Volunteer, donate, or become a missionary to support the Deaf community in Jamaica."
    canonical="https://cccd.org.jm/get-involved"
    openGraph={{
        url: 'https://cccd.org.jm/get-involved',
        title: 'Get Involved with CCCD Jamaica',
        description: 'Join us in our mission to empower the Deaf community in Jamaica. Find out how you can contribute through volunteering, donations, or becoming a missionary.',
    }}
    twitter={{
        handle: '@CCCDJamaica',
        site: '@CCCDJamaica',
        cardType: 'summary_large_image',
    }}
/>

<JsonLd
    schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Get Involved with CCCD Jamaica",
        description: "Opportunities to support and engage with Caribbean Christian Centre for the Deaf in Jamaica.",
        url: "https://cccd.org.jm/get-involved",
        mainEntity: {
            "@type": "VolunteerAction",
            name: "Volunteer with CCCD Jamaica",
            description: "Volunteer opportunities to support the Deaf community in Jamaica through education and community development.",
            organizer: {
                "@type": "NGO",
                name: "Caribbean Christian Centre for the Deaf",
                url: "https://cccd.org.jm"
            }
        }
    }}
/>

<!-- Accessibility Checks
	1. silktide: WCAG 2.2 AA Compliance on 2024-09-22.
-->
	
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Get Involved</h2>
		
		<!-- Missionary Duty -->
		<div id="missionary" class="mb-16">
			<h2 class="text-2xl font-semibold mb-6 text-red-900">Become a Missionary</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="text-md font-semibold">
					<p class="mb-4">Join our mission to serve the Deaf community in Jamaica. As a missionary, you'll have the opportunity to:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Teach at one of our campuses</li>
						<li>Assist with vocational training programs</li>
						<li>Support our administrative team</li>
						<li>Contribute to community outreach initiatives</li>
						<li>Undertake infrastructure project in partnership with Deaf workers</li>
						<li>Engage and interact with Deaf students and adults on a social and spiritual level</li>
						<li>Learning from and creating lasting impacts with the Deaf</li>

					</ul>
					<a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Apply Now</a>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726613536/cccd/missionariescccdjamaica.webp"
						alt="Missionaries at CCCD Jamaica Deaf Village in July, 2024"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Volunteering -->
		<div id="volunteer" class="mb-16">
			<h3 class="text-2xl font-semibold mb-6 text-red-900">Volunteer Opportunities</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726613626/cccd/cccdvolunteer.webp"
						alt="Volunteers working with CCCD students"
						width="600"
						height="600"
						class="rounded-lg shadow-md"
					/>
				</div>
				<div class="text-md font-semibold">
					<p class="mb-4">We offer various volunteering opportunities for those who want to make a difference:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Short-term mission trips</li>
						<li>Skills-based volunteering (e.g., IT, maintenance, healthcare)</li>
						<li>Event planning and fundraising</li>
						<li>Virtual volunteering options</li>
					</ul>
					<a href="/contact" class="inline-block bg-green-800 text-white text-lg font-extrabold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">Sign Up to Volunteer</a>
					<p class="text-md text-black mt-4">Volunteering with CCCD Jamaica is a rewarding experience that allows you to make a positive impact on the lives of the Deaf community.</p>
					<h3 class="text-2xl font-semibold mb-4 pt-6 text-red-900">US Peace Corps Volunteer Opportunities</h3>
					<p class="text-md text-black mb-4">The US Peace Corps Virtual Service Pilot is a program that allows Americans to serve in Jamaica remotely. Visit the US Peace Corps website to learn about any opportunities available in Jamaica.</p>
					<a href="https://www.peacecorps.gov/volunteer/virtual-service-pilot/" target="_blank" rel="noopener noreferrer" aria-label="Inquire about the US Peace Corps Virtual Service Pilot opportunities for Jamaica" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">US Peace Corps Virtual Service Pilot</a>
					<div class="mt-4">
						<CldImage
							src="https://res.cloudinary.com/shinkirin/image/upload/v1726614247/cccd/pcjamaica-logo.webp"
							alt="US Peace Corps Jamaica Logo"
							width="300"
							height="165"
							class="rounded-lg border shadow-md p-4 shadow-blue-500/40"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Learn Jamaican Sign Language -->
		<div class="mb-16">
			<h2 class="text-2xl font-semibold mb-6 text-red-900">Volunteer and Learn Jamaican Sign Language (JSL)</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="text-md font-semibold">
					<p class="mb-4">Enhance your ability to communicate with the Deaf community by learning JSL:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Online courses for beginners to advanced learners</li>
						<li>In-person workshops at our campuses</li>
						<li>Cultural immersion programs</li>
						<li>Certification opportunities</li>
					</ul>
					<a href="/resources" class="inline-block bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Start Learning JSL</a>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1720369822/cccd/volunteercccdjamaica.webp"
						alt="Missionary teaching at CCCD Jamaica"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Donation and Sponsorship -->
		<div id="donate">
			<h2 class="text-2xl font-semibold mb-6 text-red-900">Donate or Sponsor a Student</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="text-md font-semibold">
					<p class="mb-4">Your financial support can make a lasting impact:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Sponsor a student's education</li>
						<li>Contribute to our building and maintenance fund</li>
						<li>Support our vocational training programs</li>
						<li>Help fund our community outreach initiatives</li>
					</ul>
					<div class="flex space-x-4">
						<a href="/fundraising" class="inline-block bg-red-900 text-white text-lg font-extrabold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Donate Now</a>
						<a href="/fundraising#sponsor" class="inline-block bg-purple-600 text-white text-lg font-extrabold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Sponsor a Student</a>
					</div>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1720369820/cccd/donate.jpg"
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
