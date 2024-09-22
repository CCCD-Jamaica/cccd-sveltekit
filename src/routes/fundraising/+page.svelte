<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
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

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Support Our Mission</h2>
		
		<!-- Standard Donations -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold mb-6 text-red-800">Be a part of the amazing things God is doing!</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="bg-gold-100 p-6 rounded-lg text-black font-bold text-md shadow-md">
					<p class="mb-4">You are the reason we are here. Your gifts make our outreach to the Deaf possible. The Caribbean Christian Centre for the Deaf could not exist without the generous donations we receive from you and all our supporters. Feel free to contact us if you have any questions.</p>
					<p class="mb-4">Student sponsorship with the CCCD is such a rewarding experience. It's just $35 a month to change the life of a Deaf child in our care.</p>

					<p class="mb-4">When you sponsor a student you will receive letters and updates throughout the year. We encourage all of our sponsors to write back to their student(s), interact, and have a relationship.</p>

					<p class="mb-4">It is not often that you are able to touch a life in such a tangible way. Sponsoring a child through CCCD will provide education, lodging, and meals for a child in need. Your monthly gift will allow you to invest in their physical well being, and most importantly, their spiritual well being. Each child receives instruction in Bible and will be taught about God's plan of salvation.</p>
					<a href="https://www.cccdjamaica.org/donate/" target="_blank" rel="noopener noreferrer" aria-label="Donate Now" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
						Donate Now
					</a>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726955376/cccd/cccddeaffacts1.webp"
						alt="CCCD students benefiting from donations"
						width="600"
						height="600"
						class="rounded-lg shadow-md border border-blue-800 shadow-blue-800"
					/>
				</div>
			</div>
		</div>

		<!-- Student Sponsorship -->
		<div id="sponsor">
			<h3 class="text-2xl font-semibold mb-6 text-red-800">Sponsor a Deaf Student</h3>
			<p class="mb-4 text-lg font-semibold">Change a life by sponsoring a deaf student. Your monthly contribution provides education, accommodation, and support for a student in need.</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
				<!-- Student Mickaylia -->
				<div class="bg-gold-100 p-6 rounded-lg shadow-md shadow-blue-800">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726955665/cccd/mickaylia-robinson.webp"
						alt="Mickaylia Robinson, a CCCD student"
						width="300"
						height="400"
						class="rounded-xl mx-auto mb-4 border border-blue-800 shadow-md shadow-blue-800"
					/>
					<h3 class="text-xl font-semibold mb-2 text-center">Mickaylia Robinson</h3>
					<p class="text-center mb-4 font-semibold">Birthday: January 19th</p>
					<p class="text-center mb-4 font-semibold">Campus: Knockpatrick</p>
					<p class="mb-4 font-semibold">Mickaylia lives with her grandmother and has one brother. She loves breakfast time with tea and her favorite Bible story is Joseph's coat of many colors. Her dream is to become a doctor.</p>
					<p class="mb-4 font-semibold">Mickaylia's favorites include the color blue, vegetables, and running. She loves spending time with her grandparents, learning new words in sign language, and enjoys math class.</p>
					<p class="mb-4 font-semibold">At CCCD's Knockpatrick Campus, Mickaylia receives an education, learns sign language, and is taught the Word of God.</p>
					<a href="https://www.cccdjamaica.org/sponsor-a-student/mickaylia-robinson/" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Mickaylia" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mb-2">
						Sponsor Mickaylia
					</a>
				</div>
				<!-- Student D'Andrew -->
				<div class="bg-gold-100 p-6 rounded-lg shadow-md shadow-blue-800">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726955844/cccd/dandrew-treasure.webp"
						alt="D'Andrew Treasure, a CCCD student"
						width="300"
						height="400"
						class="rounded-xl mx-auto mb-4 border border-blue-800 shadow-md shadow-blue-800"
					/>
					<h3 class="text-xl font-semibold mb-2 text-center">D'Andrew Treasure</h3>
					<p class="text-center mb-4 font-semibold">Birthday: February 26th</p>
					<p class="text-center mb-4 font-semibold">Campus: Knockpatrick</p>
					<p class="mb-4 font-semibold">D'Andrew lives with his mother, sister and brother. He enjoys hanging out with his classmates.</p>
					<p class="mb-4 font-semibold">Reading is D'Andrew's favorite subject, and he likes to play football. He attends CCCD's Knockpatrick Campus, where he receives an education, learns sign language, and is taught the Word of God.</p>
					<a href="https://www.cccdjamaica.org/sponsor-a-student/dandrew-treasure/" target="_blank" rel="noopener noreferrer" aria-label="Sponsor D'Andrew" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mb-2">
						Sponsor D'Andrew
					</a>
				</div>
				<!-- Student Ashley -->
				<div class="bg-gold-100 p-6 rounded-lg shadow-md shadow-blue-800">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726955931/cccd/ashley-gordon.webp"
						alt="Ashley Gordon, a CCCD student"
						width="300"
						height="400"
						class="rounded-xl mx-auto mb-4 border border-blue-800 shadow-md shadow-blue-800"
					/>
					<h3 class="text-xl font-semibold mb-2 text-center">Ashley Gordon</h3>
					<p class="text-center mb-4 font-semibold">Birthday: April 8th</p>
					<p class="text-center mb-4 font-semibold">Campus: Kingston</p>
					<p class="mb-4 font-semibold">Ashley is shy but friendly and likes to watch others. She lives in Saint Catherine with her mother and is an only child. They live on a farm with cows, goats, dogs, and cats.</p>
					<p class="mb-4 font-semibold">Ashley enjoys physical education, storytelling, and the Bible. Her favorite class is English, and she loves the colors pink and purple. She likes to try new foods but especially loves KFC. Ashley enjoys playing basketball and football with her friends.</p>
					<p class="mb-4 font-semibold">Ashley is gifted at dramatizing stories and has a talent for music and dance. She is a good student who tries hard and doesn't give up.</p>
					<p class="mb-4 font-semibold">At CCCD's Kingston Campus, Ashley receives an education, learns sign language, and is taught the Word of God.</p>
					<a href="https://www.cccdjamaica.org/sponsor-a-student/dandrew-treasure/" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Ashley" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 mb-2">
						Sponsor Ashley
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="social-enterprise" class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Social Enterprise Projects</h2>
		<p class="text-lg text-center mb-8 font-semibold">
			Help promote CCCD projects and support the deaf community in Jamaica by contributing to our sustainable initiatives.
		</p>
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
					Support our eco-friendly lodging project that provides employment opportunities for deaf individuals while offering unique cultural experiences to visitors.
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
					Purchase handmade crafts created by our talented deaf artisans. Your support helps provide sustainable income and preserves traditional Jamaican craftsmanship.
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
				<li>Partner with us to create new sustainable opportunities for the deaf community</li>
				<li>Make a donation to support the expansion of our social enterprise programs</li>
			</ul>
		</div>
	</div>
</section>


<Support />
