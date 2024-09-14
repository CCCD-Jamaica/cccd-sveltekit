<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/support.svelte';
</script>

<svelte:head>
	<title>Stories of Hope and Transformation</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8">Stories of Hope and Transformation</h1>
		
		<!-- Sarah's Story -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Sarah's Journey to Independence</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Sarah came to CCCD at the age of 8, unable to communicate effectively. Today, at 18, she's preparing for university.</p>
					<ul class="list-disc list-inside mb-4">
						<li>Learned Jamaican Sign Language in her first year</li>
						<li>Discovered a passion for mathematics</li>
						<li>Became a peer tutor in her final year</li>
						<li>Accepted to University of the West Indies</li>
					</ul>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="Sarah at her CCCD graduation"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Michael's Story -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Michael's Culinary Dreams</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<CldImage
						src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
						alt="Michael in CCCD's culinary program"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
				<div>
					<p class="mb-4">Michael discovered his love for cooking at CCCD's vocational training program. His journey includes:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Overcoming communication barriers in the kitchen</li>
						<li>Winning a local cooking competition</li>
						<li>Interning at a top Kingston restaurant</li>
						<li>Planning to open his own deaf-friendly café</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Community Impact Story -->
		<div>
			<h2 class="text-3xl font-semibold mb-6">CCCD Alumni: Changing Communities</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Our alumni are making waves in their communities. Here's how they're creating change:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Teaching JSL to hearing community members</li>
						<li>Advocating for deaf rights in local government</li>
						<li>Starting businesses that employ deaf workers</li>
						<li>Mentoring current CCCD students</li>
					</ul>
					<p>These stories showcase how CCCD is not just educating individuals, but transforming entire communities.</p>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD alumni at a community event"
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
