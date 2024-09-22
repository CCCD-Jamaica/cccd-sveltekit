<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<MetaTags
    title="Education Programs - Caribbean Christian Centre for the Deaf"
    description="Explore the education programs offered by Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Empowering Deaf students through quality education and skill development."
    canonical="https://cccd.org.jm/education"
    openGraph={{
        url: 'https://cccd.org.jm/education',
        title: 'CCCD Jamaica Education Programs',
        description: 'Discover our comprehensive education programs for Deaf students in Jamaica. From primary education to vocational training, we\'re committed to empowering the Deaf community.',
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
        "@type": "EducationalOrganization",
        name: "Caribbean Christian Centre for the Deaf",
        description: "Providing quality education and vocational training for Deaf students in Jamaica.",
        url: "https://cccd.org.jm/education",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kingston",
            addressRegion: "St. Andrew",
            addressCountry: "Jamaica"
        },
        sameAs: [
            "https://www.facebook.com/cccdjamaica",
            "https://www.instagram.com/cccdjamaica/"
        ]
    }}
/>

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Education for the Deaf in Jamaica</h2>
		
		<!-- Educational Programs Section -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold mb-6">Educational Programs</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="text-md font-semibold">
					<p class="mb-4">Our educational programs are designed to empower deaf students in Jamaica with knowledge and skills for a brighter future. We offer a comprehensive curriculum that includes:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Primary and Secondary Education</li>
						<li>Jamaican Sign Language (JSL) instruction</li>
						<li>English literacy and numeracy</li>
						<li>Science and Technology courses</li>
						<li>Arts and Cultural studies</li>
					</ul>
					<div class="flex justify-center mt-4 p-4">
						<CldImage
							src="https://res.cloudinary.com/shinkirin/image/upload/v1720369815/cccd/cccd-deaf-students-kingston.webp"
							alt="CCCD Jamaica Deaf Students in a computer lab"
							width="600"
							height="300"
							class="rounded-lg shadow-md shadow-blue-500/50"
						/>
					</div>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726611097/cccd/cccdbacktoschool.jpg"
						alt="CCCD Jamaica Deaf Student in Classroom"
						width="600"
						height="600"
						class="rounded-lg shadow-lg shadow-blue-500/50"
					/>
				</div>
			</div>
		</div>

		<!-- Dormitories and Support Section -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold mb-6">Dormitories and Support</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726611090/cccd/lifeskills.png"
						alt="CCCD Jamaica Deaf Students in Dormitory"
						width="600"
						height="600"
						class="rounded-lg shadow-lg shadow-blue-500/50"
					/>
				</div>
				<div class="text-md font-semibold">
					<p class="mb-4">We provide a nurturing environment for our students with:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Comfortable dormitories for boarding students</li>
						<li>Nutritious meals and health services</li>
						<li>Counseling and mental health support</li>
						<li>Extracurricular activities and sports programs</li>
						<li>Mentorship opportunities with deaf role models</li>
						<li>Life skills training (laundry, cooking, cleaning)</li>
					</ul>
					<p class="mt-4">As CCCD students grow, they learn life skills like laundry, cooking, and cleaning. This helps ensure they receive instructions in their own language: Jamaican Sign Language.</p>
					<p class="mt-4">So if you walk by on campus and see smiling faces like these, you'll know these girls are hanging out, doing their laundry, and probably laughing together.</p>
					<p class="mt-4">Be sure to wave a big hello!</p>
				</div>
			</div>
		</div>

		<!-- Vocational Training Section -->
		<div>
			<h3 class="text-2xl font-semibold mb-6">Vocational Training Programs</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="text-md font-semibold">
					<p class="mb-4">Our vocational training programs aim to make deaf individuals marketable in Jamaica's job market. We offer training in:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>Information Technology and Computer Skills</li>
						<li>Culinary Arts and Hospitality</li>
						<li>Carpentry and Woodworking</li>
						<li>Tailoring and Fashion Design</li>
						<li>Agriculture and Horticulture</li>
					</ul>
					<p>These programs are designed to equip our students with practical skills that are in demand, increasing their employability and independence.</p>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726612156/cccd/cccdvotech.webp"
						alt="CCCD Jamaica Deaf Student in Vocational Training"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>
		<!-- Graduate Success Stories Section -->
		<div class="mt-16">
			<h3 class="text-2xl font-semibold mb-6">Graduate Success Stories</h3>
			<p class="text-lg mb-8 font-semibold">Our graduates have gone on to achieve great things. Here are just a few of their photos:</p>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Graduate 1 -->
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726612157/cccd/graduatesfromcccd.webp"
						alt="CCCD Graduate group photo"
						width="600"
						height="600"
						class="w-full h-64 object-cover shadow-md shadow-blue-500/50"
					/>
				</div>
				<!-- Graduate 2 -->
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726612399/cccd/cccdgraduate3.jpg"
						alt="Male CCCD Deaf Student at Graduation"
						width="600"
						height="600"
						class="w-full h-64 object-cover"
					/>
				</div>
				<!-- Graduate 3 -->
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726612399/cccd/cccdgraduate2.jpg"
						alt="Female CCCD Deaf Student at her graduation"
						width="600"
						height="600"
						class="w-full h-64 object-cover shadow-md shadow-blue-500/50"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<Support />
