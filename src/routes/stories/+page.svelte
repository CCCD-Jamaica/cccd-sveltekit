<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<MetaTags
    title="Success Stories - Caribbean Christian Centre for the Deaf"
    description="Read inspiring stories from the Deaf community supported by Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Discover how education and support are transforming lives."
    canonical="https://cccd.org.jm/stories"
    openGraph={{
        url: 'https://cccd.org.jm/stories',
        title: 'CCCD Jamaica Success Stories',
        description: 'Inspiring stories of transformation and achievement from the Deaf community in Jamaica. See the impact of education and support provided by CCCD.',
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
        "@type": "CollectionPage",
        name: "CCCD Jamaica Success Stories",
        description: "A collection of inspiring stories from the Deaf community supported by Caribbean Christian Centre for the Deaf in Jamaica.",
        url: "https://cccd.org.jm/stories",
        inLanguage: "en-US",
        isAccessibleForFree: "True",
        publisher: {
            "@type": "Organization",
            name: "Caribbean Christian Centre for the Deaf",
            logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
            }
        }
    }}
/>

<!-- Accessibility Checks
	1. silktide: WCAG 2.2 AA Compliance on 2024-09-22.
-->

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Stories of Hope (Coming Soon)</h2>
		
		<!-- Story of our Deaf Students -->
		<div class="mb-16 bg-gold-100 border-2 border-red-800 p-4 rounded-lg shadow-md">
			<h3 class="text-2xl font-semibold mb-6">Stories of our Deaf Students</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4 text-md font-semibold">We are gathering stories from our Deaf students and alumni. They are inspiring.</p>
					<p class="mb-4 text-md font-semibold">If you have a story to share, please contact us at <a href="mailto:info@cccd.edu.jm">info@cccd.edu.jm</a>.</p>
					<p class="mb-4 text-md font-semibold">We will feature your story here.</p>
					<p class="mb-4 text-md font-semibold">Please check back soon.</p>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726536326/cccd/cccdstudents4.jpg"
						alt="Two Deaf students at CCCD"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Graduate's Story -->
		<div class="mb-16 bg-gold-100 border-2 border-red-800 p-4 rounded-lg shadow-md">
			<h3 class="text-2xl font-semibold mb-6">Stories of our Graduates</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726612157/cccd/graduatesfromcccd.jpg"
						alt="Graduates from CCCD"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
				<div>
					<p class="mb-4 text-md font-semibold">Our future graduates will have inspiring stories to share. Here's what we envision for them:</p>
					<ul class="list-disc list-inside mb-4 pl-4 text-md font-semibold">
						<li>Discovering their passions through our vocational training programs</li>
						<li>Overcoming challenges in their chosen fields</li>
						<li>Gaining valuable work experience through internships</li>
						<li>Planning innovative businesses that serve both Deaf and hearing communities</li>
					</ul>
					<p class="mb-4 text-md font-semibold">Check back soon to read about the amazing journeys of our CCCD graduates!</p>
				</div>
			</div>
		</div>

		<!-- Alumni's Story -->
		<div class="mb-16 bg-gold-100 border-2 border-red-800 p-4 rounded-lg shadow-md">
			<h3 class="text-2xl font-semibold mb-6">CCCD Alumni: Changing Jamaica</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4 text-md font-semibold">Our future alumni will make waves in their communities. Here's how we envision them creating change:</p>
					<ul class="list-disc list-inside mb-4 pl-4 text-md font-semibold">
						<li>Teaching JSL to hearing community members</li>
						<li>Advocating for Deaf rights in local government</li>
						<li>Starting businesses that employ Deaf workers</li>
						<li>Mentoring future CCCD students</li>
					</ul>
					<p class="mb-4 text-md font-semibold">These potential stories showcase how CCCD will not just educate individuals, but transform entire communities.</p>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-Deaf-graduate-jamaica.webp"
						alt="CCCD graduate with her diploma"
						width="600"
						height="600"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<Support />
