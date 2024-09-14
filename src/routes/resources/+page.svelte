<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
</script>

<svelte:head>
	<title>Jamaican Sign Language Resources</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h1 class="text-4xl font-bold text-center mb-8">Jamaican Sign Language Resources</h1>
		
		<!-- Online Resources -->
		<div class="mb-16">
			<h2 class="text-3xl font-semibold mb-6">Online Learning Materials</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<p class="mb-4">Explore our collection of online resources to start learning Jamaican Sign Language (JSL) from the comfort of your home:</p>
					<ul class="list-disc list-inside mb-4">
						<li>JSL Video Dictionary</li>
						<li>Interactive Lessons for Beginners</li>
						<li>Downloadable JSL Alphabet Charts</li>
						<li>Practice Quizzes and Games</li>
					</ul>
					<a href="#" class="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
						Access Online Resources
					</a>
				</div>
				<div>
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="Student learning JSL online"
						width="600"
						height="400"
						class="rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>

		<!-- JSL Programs -->
		<div>
			<h2 class="text-3xl font-semibold mb-6">JSL Programs: In-Person and Virtual</h2>
			<p class="mb-4">Join our comprehensive JSL programs designed for various skill levels and learning preferences:</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
				<!-- In-Person Programs -->
				<div class="bg-gray-100 p-6 rounded-lg">
					<h3 class="text-xl font-semibold mb-2">In-Person JSL Classes</h3>
					<p class="mb-4">Attend our immersive in-person classes at CCCD campuses:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Beginner, Intermediate, and Advanced levels</li>
						<li>Small group sessions for personalized attention</li>
						<li>Cultural immersion experiences</li>
						<li>Interaction with native JSL users</li>
					</ul>
					<a href="#" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Learn More About In-Person Classes
					</a>
				</div>
				<!-- Virtual Programs -->
				<div class="bg-gray-100 p-6 rounded-lg">
					<h3 class="text-xl font-semibold mb-2">Virtual JSL Courses</h3>
					<p class="mb-4">Join our flexible online JSL courses from anywhere in the world:</p>
					<ul class="list-disc list-inside mb-4">
						<li>Live virtual classes with expert instructors</li>
						<li>Self-paced learning modules</li>
						<li>One-on-one virtual tutoring sessions</li>
						<li>Online community for practice and support</li>
					</ul>
					<a href="#" class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Explore Virtual JSL Courses
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Additional JSL Resources</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">JSL Literature</h3>
				<p class="mb-4">Explore our collection of JSL stories, poems, and literature to enhance your language skills and cultural understanding.</p>
				<a href="#" class="text-blue-600 hover:underline">Browse JSL Literature</a>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">JSL Community Events</h3>
				<p class="mb-4">Join our regular community events to practice JSL, meet native signers, and immerse yourself in Deaf culture.</p>
				<a href="#" class="text-blue-600 hover:underline">View Upcoming Events</a>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4">JSL Research and Publications</h3>
				<p class="mb-4">Access academic resources and publications related to Jamaican Sign Language linguistics and education.</p>
				<a href="#" class="text-blue-600 hover:underline">Explore JSL Research</a>
			</div>
		</div>
	</div>
</section>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<figure class="text-center">
			<CldImage
				src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
				alt="JSL students learning and interacting"
				width="1200"
				height="600"
				class="w-full h-auto rounded-lg shadow-lg mx-auto"
			/>
			<figcaption class="mt-4 text-lg text-gray-600">
				JSL students engaging in interactive learning sessions at CCCD
			</figcaption>
		</figure>
	</div>
</section>
