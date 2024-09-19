<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
</script>

<svelte:head>
	<title>Stories of Hope (Coming Soon)</title>
	<meta name="description" content="Stories of Hope and Transformation" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8 text-red-900">Stories of Hope (Coming Soon)</h1>
		
		<!-- Story of our Deaf Students -->
		<div class="mb-16 bg-gold-100 border-2 border-red-800 p-4 rounded-lg shadow-md">
			<h2 class="text-3xl font-semibold mb-6">Stories of our Deaf Students</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4 text-md font-semibold">We are gathering stories from our deaf students and alumni. They are inspiring.</p>
					<p class="mb-4 text-md font-semibold">If you have a story to share, please contact us at <a href="mailto:info@cccd.edu.jm">info@cccd.edu.jm</a>.</p>
					<p class="mb-4 text-md font-semibold">We will feature your story here.</p>
					<p class="mb-4 text-md font-semibold">Please check back soon.</p>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726536326/cccd/cccdstudents4.jpg"
						alt="Two deaf students at CCCD"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Graduate's Story -->
		<div class="mb-16 bg-gold-100 border-2 border-red-800 p-4 rounded-lg shadow-md">
			<h2 class="text-3xl font-semibold mb-6">Stories of our Graduates</h2>
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
						<li>Planning innovative businesses that serve both deaf and hearing communities</li>
					</ul>
					<p class="mb-4 text-md font-semibold">Check back soon to read about the amazing journeys of our CCCD graduates!</p>
				</div>
			</div>
		</div>

		<!-- Alumni's Story -->
		<div class="mb-16 bg-gold-100 border-2 border-red-800 p-4 rounded-lg shadow-md">
			<h2 class="text-3xl font-semibold mb-6">CCCD Alumni: Changing Jamaica</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4 text-md font-semibold">Our future alumni will make waves in their communities. Here's how we envision them creating change:</p>
					<ul class="list-disc list-inside mb-4 pl-4 text-md font-semibold">
						<li>Teaching JSL to hearing community members</li>
						<li>Advocating for deaf rights in local government</li>
						<li>Starting businesses that employ deaf workers</li>
						<li>Mentoring future CCCD students</li>
					</ul>
					<p class="mb-4 text-md font-semibold">These potential stories showcase how CCCD will not just educate individuals, but transform entire communities.</p>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
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
