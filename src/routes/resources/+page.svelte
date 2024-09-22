<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Jamaican Sign Language Resources</h2>
		
		<!-- Online Resources -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold mb-6">Online Learning Materials</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="bg-gold-100 p-6 rounded-lg border-2 border-red-900 font-semibold text-md">
					<p class="mb-4">Explore our collection of online resources to start learning Jamaican Sign Language (JSL) from the comfort of your home:</p>
					<ul class="list-disc list-inside mb-4 pl-4">
						<li>JSL Video Dictionary</li>
						<li>Interactive Lessons for Beginners</li>
						<li>Downloadable JSL Alphabet Charts</li>
						<li>Practice Quizzes and Games</li>
					</ul>
					<p class="mt-4 mb-2 font-bold text-red-900">Benefits of our online resources:</p>
					<ul class="list-disc list-inside pl-4 pb-4">
						<li><span class="font-bold">Visual Learning:</span> Our JSL Video Dictionary provides demonstrations of signs, aiding visual learners.</li>
						<li><span class="font-bold">Structured Learning:</span> Interactive Lessons for Beginners offer a step-by-step approach to learning JSL basics.</li>
						<li><span class="font-bold">Reference Material:</span> Downloadable JSL Alphabet Charts offer a handy reference for learning the JSL alphabet.</li>
						<li><span class="font-bold">Active Learning:</span> Practice Quizzes and Games make learning JSL more interactive and engaging.</li>
					</ul>
					<button class="inline-block bg-red-900 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
						Access Online Resources - Coming Soon
					</button>
				</div>
				<div>
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726612156/cccd/cccdsigning2.webp"
						alt="CCCD chef signing"
						width="600"
						height="600"
						class="rounded-lg shadow-md w-full h-auto shadow-red-900"
					/>
				</div>
			</div>
		</div>

		<!-- JSL Programs -->
		<div id="jsl-programs">
			<h2 class="text-2xl font-semibold mb-6 text-red-900">JSL Programs: In-Person and Virtual</h2>
			<p class="mb-4 font-semibold text-md">Join our comprehensive JSL programs designed for various skill levels and learning preferences:</p>
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
					<button class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Learn More About In-Person Classes (coming soon)
					</button>
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
					<button class="block w-full bg-green-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Explore Virtual JSL Courses (coming soon)
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-red-900">Additional JSL Resources</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4 text-red-900">JSL Literature</h3>
				<p class="mb-4 font-semibold text-md">Explore our collection of JSL stories, poems, and literature to enhance your language skills and cultural understanding.</p>
				<p class="text-blue-600">Browse JSL Literature (coming soon)</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4 text-red-900">JSL Community Events</h3>
				<p class="mb-4 font-semibold text-md">Join our regular community events to practice JSL, meet native signers, and immerse yourself in Deaf culture.</p>
				<p class="text-blue-600">View Upcoming Events (coming soon)</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<h3 class="text-xl font-semibold mb-4 text-red-900">JSL Research and Publications</h3>
				<p class="mb-4 font-semibold text-md">Access academic resources and publications related to Jamaican Sign Language linguistics and education.</p>
				<p class="text-blue-600">Explore JSL Research (coming soon)</p>
			</div>
		</div>
	</div>
</section>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<CldImage
				src="https://res.cloudinary.com/shinkirin/image/upload/v1726612156/cccd/cccdsigning.webp"
				alt="Female Jamaican signing"
				width="400"
				height="400"
				class="w-full h-auto rounded-lg shadow-lg mx-auto border-2 border-blue-800 shadow-blue-800/50"
			/>
			<CldImage
				src="https://res.cloudinary.com/shinkirin/image/upload/v1726612156/cccd/cccdsigning3.webp"
				alt="Two male Jamaicans signing with each other"
				width="400"
				height="400"
				class="w-full h-auto rounded-lg shadow-lg mx-auto border-2 border-blue-800 shadow-blue-800/50"
			/>
			<CldImage
				src="https://res.cloudinary.com/shinkirin/image/upload/v1726612156/cccd/cccdsigning4.webp"
				alt="Male student signing"
				width="400"
				height="400"
				class="w-full h-auto rounded-lg shadow-lg mx-auto border-2 border-blue-800 shadow-blue-800/50"
			/>
		</div>
	</div>
</section>
<section class="bg-gold-100 py-12 border-t-2 border-b-2 border-red-800">
	<div class="container mx-auto px-4">
		<div class="aspect-w-16 aspect-h-9 relative">
			<CldImage
				src="https://res.cloudinary.com/shinkirin/image/upload/o_69/v1726621785/cccd/200343_Image_of_Jesus_Christ_in_Jamaica_with_Jamaican_dea_xl-1024-v1-0.webp"
				alt="Group of Jamaican students signing together"
				width="1920"
				height="864"
				class="w-full h-full object-cover rounded-lg shadow-lg border-2 border-blue-800 opacity-55"
			/>
			<div class="absolute top-4 left-4 md:w-40 md:h-40 w-20 h-20 bg-white rounded-md p-2 border-2 border-blue-800">
				<CldImage
					src="https://res.cloudinary.com/shinkirin/image/upload/v1720371983/cccd/android-chrome-512x512.webp"
					alt="CCCD Logo"
					width="250"
					height="250"
					class="w-full h-full object-contain rounded-md"
				/>
			</div>
		</div>
		<p class="text-center mt-4 text-lg text-gray-700 font-semibold">Embracing the beauty of Jamaican Sign Language, a gift from God, in our community</p>
	</div>
</section>
