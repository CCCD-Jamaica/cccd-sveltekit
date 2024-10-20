<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$lib/Support.svelte';	
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	export let data
</script>

<MetaTags
    title="Support Our Cause - Caribbean Christian Centre for the Deaf"
    description="Support the mission of Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Your donations help us provide education and support to the Deaf community in Jamaica."
    canonical="https://cccd.org.jm/fundraising"
    openGraph={{
        url: 'https://cccd.org.jm/fundraising',
        title: 'Support CCCD Jamaica - Empower the Deaf Community',
        description: 'Make a difference in the lives of Deaf individuals in Jamaica. Your support enables us to provide quality education, vocational training, and community support.',
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
        "@type": "DonateAction",
        name: "Donate to CCCD Jamaica",
        description: "Support the mission of Caribbean Christian Centre for the Deaf by making a donation.",
        url: "https://cccd.org.jm/fundraising",
        recipient: {
            "@type": "NGO",
            name: "Caribbean Christian Centre for the Deaf",
            url: "https://cccd.org.jm"
        }
    }}
/>

<!-- Accessibility Checks
	1. silktide: WCAG 2.2 AA Compliance on 2024-09-22.
-->

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Support Our Mission</h2>
		
		<!-- Standard Donations -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold mb-6 text-red-800">Be a part of the amazing things God is doing!</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="bg-gold-100 p-6 rounded-lg text-black font-bold text-md shadow-md">
					<p class="mb-4">You are the reason we are here. Your gifts make our outreach to the Deaf possible. The Caribbean Christian Centre for the Deaf could not exist without the generous donations we receive from you and all our supporters. Feel free to contact us if you have any questions.</p>
					<p class="mb-4">Student sponsorship with the CCCD is such a rewarding experience. It's just USD $35 a month to change the life of a Deaf child in our care.</p>

					<p class="mb-4">When you sponsor a student you will receive letters and updates throughout the year. We encourage all of our sponsors to write back to their student(s), interact, and have a relationship.</p>

					<p class="mb-4">It is not often that you are able to touch a life in such a tangible way. Sponsoring a child through CCCD will provide education, lodging, and meals for a child in need. Your monthly gift will allow you to invest in their physical well being, and most importantly, their spiritual well being. Each child receives instruction in Bible and will be taught about God's plan of salvation.</p>
					<a href="https://www.cccdjamaica.org/donate/" target="_blank" rel="noopener noreferrer" aria-label="Donate Now" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
						Donate Now
					</a>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726955376/cccd/cccdDeaffacts1.webp"
						alt="CCCD students benefiting from donations"
						width="600"
						height="600"
						class="rounded-lg shadow-md border border-blue-800 shadow-blue-800"
					/>
				</div>
			</div>
		</div>

		<!-- Student a Deaf Student -->
		<div id="sponsor" class="bg-gold-100 p-6 rounded-lg text-black font-bold text-md shadow-md">
			<h3 class="text-2xl font-semibold mb-6 text-red-900">Sponsor a Deaf Student</h3>
			<p class="mb-4 text-lg font-semibold">Change a life by sponsoring a Deaf student. Your monthly contribution provides education, accommodation, and support for a student in need.</p>
			<ul role="list" class="mx-auto mt-10 mb-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
				{#if data?.Sponsor?.length}
					{#each data.Sponsor.sort(() => 0.5 - Math.random()).slice(0, 3) as student}
					<li class="flex flex-col gap-6 xl:flex-row rounded-lg shadow-lg shadow-blue-900 relative">
						<img class="w-full h-96 aspect-[4/5] xl:w-52 xl:h-auto flex-none rounded-t-lg sm:rounded-l-lg object-cover object-top mx-auto" src="{PUBLIC_DIRECTUS_URL}/assets/{student.studentPhoto}" alt={student.studentName}>
						<div class="flex-auto p-4 bg-white">
							<h3 class="text-lg font-semibold leading-8 tracking-tight text-black uppercase">{student.studentName}</h3>
							<p class="text-md leading-7 text-black">Birthday: {student.studentBirthday}</p>
							<p class="text-md leading-7 text-black">Age: {student.Age}</p>
							<p class="text-md leading-7 text-black">{student.studentCampus}</p>						
							<div class="mt-6 text-md leading-7 text-black font-semibold">
								{student.studentSummary.split(' ').slice(0, 12).join(' ')}...
							</div>
						</div>
					</li>
					{/each}
				{:else}
					<p>Loading...</p>
				{/if}
			</ul>
			<div class="text-center mt-8">
				<a href="/sponsor-a-student" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
					Learn more about these Deaf Students and how you can sponsor them or other Deaf Students at CCCD
				</a>
			</div>
		</div>
</section>
<section id="social-enterprise" class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Social Enterprise Projects</h2>
		<p class="text-lg text-center mb-8 font-semibold">
			Help promote CCCD projects and support the Deaf community in Jamaica by contributing to our sustainable initiatives.
		</p>
	
			<p class="mb-4 text-lg font-semibold">
				<div class="max-w-5xl mx-auto">
					<p class="mb-4 text-lg font-semibold">
						In order to generate sustained income streams to achieve its vision, mission, and objectives, CCCD operates various business/enterprise activities. These include:
					</p>
					<ul class="list-disc list-inside text-lg font-semibold mb-6 pl-4">
					<li>Facility Rental</li>
					<li>Textile and Sewing Projects</li>
					<li>Business Lease Opportunities for Local Businesses</li>
					<li>Agriculture - Crops and Livestock Production</li>
					<li>Deaf Handmade Craft</li>
								</ul>
				</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="bg-gray-100 p-6 rounded-lg">
				<CldImage
					src="https://res.cloudinary.com/shinkirin/image/upload/c_scale,w_1188/v1726956647/cccd/cows.webp"
					alt="Deaf Village Retreat"
					width="700"
					height="400"
					class="w-full object-cover rounded-lg mb-4 shadow-md shadow-blue-800"
				/>
				<h3 class="text-xl font-semibold mb-4">Deaf Village Retreat</h3>
				<p class="mb-4">
					Support our eco-friendly lodging project that provides employment opportunities for Deaf individuals while offering unique cultural experiences to visitors.
				</p>
				<button class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
					Learn More (Coming Soon)
				</button>
			</div>
			<div class="bg-gray-100 p-6 rounded-lg">
				<CldImage
					src="https://res.cloudinary.com/shinkirin/image/upload/c_scale,w_1035/v1726956594/cccd/crafts.webp"
					alt="CCCD Handmade Crafts"
					width="700"
					height="400"
					class="w-full object-cover rounded-lg mb-4 shadow-md shadow-blue-800"
				/>
				<h3 class="text-xl font-semibold mb-4">CCCD Handmade Craft</h3>
				<p class="mb-4">
					Purchase handmade crafts created by our talented Deaf artisans. Your support helps provide sustainable income and preserves traditional Jamaican craftsmanship.
				</p>
				<button class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
					Shop Now (Coming Soon)
				</button>
			</div>
		</div>
		<div class="mt-8 text-center">
			<h3 class="text-2xl font-semibold mb-4 text-red-800">How You Can Help</h3>
			<ul class="list-disc list-inside text-left max-w-2xl mx-auto text-lg font-semibold">
				<li>Spread the word about our social enterprise projects on social media</li>
				<li>Volunteer your skills to help develop and grow our initiatives</li>
				<li>Partner with us to create new sustainable opportunities for the Deaf community</li>
				<li>Make a donation to support the expansion of our social enterprise programs</li>
			</ul>
		</div>
	</div>
</section>


<Support />
