<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/1Support.svelte';
</script>

<svelte:head>
	<title>Education</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8">Education for the Deaf in Jamaica</h1>
		
		<!-- Educational Programs Section -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Educational Programs</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Our educational programs are designed to empower deaf students in Jamaica with knowledge and skills for a brighter future. We offer a comprehensive curriculum that includes:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Primary and Secondary Education</li>
						<li>Jamaican Sign Language (JSL) instruction</li>
						<li>English literacy and numeracy</li>
						<li>Science and Technology courses</li>
						<li>Arts and Cultural studies</li>
					</ul>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD Jamaica Deaf Student in Classroom"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- Dormitories and Support Section -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Dormitories and Support</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<CldImage
						src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
						alt="CCCD Jamaica Deaf Students in Dormitory"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
				<div>
					<p class="mb-4">We provide a nurturing environment for our students with:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Comfortable dormitories for boarding students</li>
						<li>Nutritious meals and health services</li>
						<li>Counseling and mental health support</li>
						<li>Extracurricular activities and sports programs</li>
						<li>Mentorship opportunities with deaf role models</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Vocational Training Section -->
		<div>
			<h2 class="text-3xl font-semibold mb-6">Vocational Training Programs</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Our vocational training programs aim to make deaf individuals marketable in Jamaica's job market. We offer training in:</p>
					<ul class="list-disc list-inside mb-4">
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
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD Jamaica Deaf Student in Vocational Training"
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
