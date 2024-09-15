<script>
	import { CldImage } from 'svelte-cloudinary';
	import Icon from '@iconify/svelte';
	import Support from '$components/Support.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Caribben Christian Center for the Deaf in Jamaica" />
</svelte:head>

<section class="relative h-[900px]">
	<div class="absolute inset-0 flex">
		<div class="w-1/2 bg-white"></div>
		<div class="w-1/2">
			<CldImage
				src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
				alt="CCCD Jamaica Deaf Student at her Graduation"
				width="1348"
				height="1117"
				class="w-full h-full object-cover"
			/>
		</div>
	</div>
	<div class="absolute inset-0 z-10 flex">
		<div class="w-1/2 p-8">
			<!-- Main content for the first column -->
			<!-- No content -->
		</div>
		<div class="w-1/2"></div>
	</div>
	<div class="absolute inset-0 z-20 flex items-center justify-center">
		<div class="w-full md:w-2/3 flex flex-col md:flex-row bg-opacity-65 md:bg-opacity-90 rounded-lg overflow-hidden">
			<div class="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white opacity-75">
				<!-- Content for the first column of the new centered layer -->
				<h3 class="text-xl text-red-900 font-semibold mb-3 uppercase">Empowering the Deaf Community</h3>
				<h4 class="text-lg text-black font-semibold mb-3">Reach Teach and Nurture</h4>
				<p>Caribbean Christian Centre for the Deaf exists to reach, teach, and nurture the Deaf of Jamaica. Join us in our mission to provide education and vocational training to the Deaf 					community in Jamaica. Together, we 	can create opportunities and foster a supportive environment for all.
				</p>
				<h5 class="text-lg text-black font-semibold mb-3 mt-4">Purpose:</h5>
				<p class="mb-4 italic text-md sm:text-lg text-black font-semibold">To Steward God&apos;s Resources for His Glory - 1 Peter 4:7-11</p>
				<div class="mt-4 flex justify-start space-x-4">
					<a href="/fundraising" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
						Donate Now
					</a>
					<a href="/resources#jsl-programdas" class="inline-block bg-green-600 text-yellow-300 font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Learn Jamaican Sign Language
					</a>
				</div>
			</div>
			<div class="w-full md:w-1/2 flex justify-center items-center">
				<!-- Content for the second column of the new centered layer -->
				<CldImage
					src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
					alt="Young CCCD Deaf Jamaican Student smiling"
					width="1400"
					height="1035"
					class="w-auto h-3/4 rounded-r-lg"
				/>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="overflow-hidden bg-gold-50 py-32">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
		<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
			<h2 class="text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">Nuturing Our Deaf Students</h2>
			<p class="mt-6 text-xl leading-8 text-black">It is not often that you can touch a life in such a tangible way. Your contributions will allow you to invest in their physical and, most importantly, spiritual well-being.</p>
			<p class="mt-6 text-lg leading-7 text-black">In Jamaica, we nurture the deaf students through specialized education, loving care, and spiritual guidance. We ensure that each child receives a quality education tailored to their unique needs. Through Bible lessons and Christian fellowship, we instill the values of faith, hope, and love, empowering them to embrace their God-given potential and become beacons of light within their communities.</p>
			<div class="mt-10 flex">
			<a href="/get-involved" class="rounded-md bg-red-800 hover:bg-red-700 transition duration-300 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">Help Nurture our Deaf Students' Future <span aria-hidden="true">&rarr;</span></a>
			</div>
		</div>
		<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
			<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
			<img src="https://res.cloudinary.com/shinkirin/image/upload/v1726017431/cccd_wordpress/deafjamaicangirl.webp" alt="CCCD Jamaica Deaf Student giving the peace sign" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover">
			</div>
			<div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
			<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1722901476/cccd_wordpress/cccdfixers-kitchen.webp" alt="CCCD Jamaica Deaf Students preparing in the renovated kitchen at the Kingston campus" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
			</div>
			<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/c_scale,w_1291/v1726017899/cccd_wordpress/Fellowship_with_JDV_Community.webp" alt="Group photo of CCCD Jamaica Deaf Students and visitors at the Jamaica Deaf Village Community" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
			</div>
			<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369815/cccd/cccd-deaf-students-kingston.webp" alt="CCCD Jamaica Deaf Students working on a computer" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover">
			</div>
			</div>
		</div>
		</div>
	</div>
</div>
</section>
<section class="bg-green-600 py-16 relative border-t-4 border-b-4 border-black">
	<div class="absolute inset-0 z-0">
		<div class="w-full h-full bg-gradient-to-br from-green-600 via-yellow-400 to-black opacity-20"></div>
	</div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="flex flex-wrap items-center">
			<div class="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
				<h2 class="text-4xl font-bold text-yellow-300 mb-6">Learn Jamaican Sign Language</h2>
				<p class="text-white text-lg mb-8">
					The ability to communicate with the Deaf community in Jamaica is crucial to expanding their opportunities. Why not take the next step and learn Jamaican Sign Language.
				</p>
				<div class="flex flex-wrap gap-4 justify-center md:justify-start">
					<a href="/resources#jsl-programs" class="inline-block bg-black text-yellow-300 font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300">
						Learn JSL Now
					</a>
					<a href="/resources" class="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300">
						Visit our JSL Resources
					</a>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1726420106/cccd/dall-e-jsl-girl.webp" alt="Jamaican student using sign langauge generated by DALL-E 3" class="rounded-lg shadow-lg w-full h-auto border-4 border-white">
			</div>
		</div>
	</div>
</section>
<section>
	<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
	<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369817/cccd/cccd-jamaica-kingston.webp" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
	<div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
		<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>
	<div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
		<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">About CCCD Jamaica</h2>
		<p class="mt-6 text-xl leading-8 text-white">Caribbean Christian Centre for the Deaf exists to reach, teach, and nurture the Deaf of Jamaica to experience the joy of knowing Jesus and serving within their community. We accomplish this by operating three residential schools spread geographically across the island (Kingston, Knockpatrick, and Montego Bay) and a centrally located Jamaica Deaf Village (Mandeville), which ministers to the adult Deaf and their children.</p>
		</div>
		<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
		<div class="flex gap-x-4 rounded-xl bg-white/80 p-6 ring-2 ring-inset ring-white/10 hover:ring-red-800 transition-all duration-300">
			<Icon icon="mdi:book-cross" width="56" height="56" class="text-red-800" />
			<div class="text-base leading-7">
			<h3 class="font-semibold text-red-800">Statement of Faith</h3>
			<a href="about#statement-of-faith">
				<p class="mt-2 text-black">In One God, who has revealed Himself in Scripture through the Old and New Testaments as three Persons; Father, Son and Holy Spirit.</p>
			</a>
			</div>
		</div>
		<div class="flex gap-x-4 rounded-xl bg-blue-800/80 p-6 ring-1 ring-inset ring-white/10 hover:ring-white hover:ring-2 transition-all duration-300">
			<Icon icon="material-symbols:church" width="56" height="56" class="text-white" />
			<div class="text-base leading-7">
			<h3 class="font-semibold text-white">Our Purpose</h3>
			<a href="/about">
				<p class="mt-2 text-white">CCCD exists to reach, teach, and nurture the Deaf of Jamaica so that they can experience the joy of knowing Jesus and serving within their community.</p>
			</a>
			</div>
		</div>
		<div class="flex gap-x-4 rounded-xl bg-gold-800/80 p-6 ring-1 ring-inset ring-white/10 hover:ring-yellow-400 hover:ring-2 transition-all duration-300">
			<Icon icon="material-symbols:emoji-people-rounded" width="56" height="56" class="text-white" />
			<div class="text-base leading-7">
			<h3 class="font-semibold text-white">Our Board and Staff</h3>
			<a href="/about#board">
				<p class="mt-2 text-gray-200">Learn more about our dedicated board and staff that work tirelessly to ensure the mission's success to nurture deaf students in Jamaica.</p>
			</a>
			</div>
		</div>
		</div>
	</div>
	</div>
</section>
<section class="py-32 md:py-48 relative border-t-4 border-b-4 border-gold-300">
	<div class="absolute inset-0 z-0 overflow-hidden">
		<img src="https://res.cloudinary.com/shinkirin/image/upload/v1726422208/cccd/christ-dall-e-jamaica-background.webp" alt="Background image of Jesus Christ with Jamaican deaf students behind Him generated by DALL-E 3" class="w-full h-full object-cover object-top opacity-20">
	</div>
	<div class="container mx-auto px-4 text-center relative z-10">
		<h2 class="text-4xl font-bold mb-8 text-blue-800">Nurture Deaf Students Through Christ's Love</h2>
		<p class="text-xl mb-10 max-w-2xl mx-auto text-black">
			"And whoever welcomes one such child in my name welcomes me." - Matthew 18:5
		</p>
		<p class="mb-10 text-xl text-black">
			Join us in our mission to reach, teach, and nurture deaf students in Jamaica. Your support can make a lasting impact in their lives and spread God's love.
		</p>
		<a href="/get-involved" class="bg-blue-700 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-800 transition duration-300 inline-block text-lg">
			Become a Mission Partner
		</a>
	</div>
</section>
<section>
	<div class="bg-white py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
			<div class="w-full lg:max-w-lg lg:flex-auto">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How you can help</h2>
				<p class="mt-6 text-xl leading-8 text-gray-600">Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.</p>
				<img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
			</div>
			<div class="w-full lg:max-w-xl lg:flex-auto">
				<h3 class="sr-only">Job openings</h3>
				<ul class="-my-8 divide-y divide-gray-100">
				<li class="py-8">
					<dl class="relative flex flex-wrap gap-x-3">
					<dt class="sr-only">Role</dt>
					<dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
						<a href="#">
						Full-time designer
						<span class="absolute inset-0" aria-hidden="true"></span>
						</a>
					</dd>
					<dt class="sr-only">Description</dt>
					<dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.</dd>
					<dt class="sr-only">Salary</dt>
					<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$75,000 USD</dd>
					<dt class="sr-only">Location</dt>
					<dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
						<svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
						<circle cx="1" cy="1" r="1" />
						</svg>
						San Francisco, CA
					</dd>
					</dl>
				</li>
				<li class="py-8">
					<dl class="relative flex flex-wrap gap-x-3">
					<dt class="sr-only">Role</dt>
					<dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
						<a href="#">
						Laravel developer
						<span class="absolute inset-0" aria-hidden="true"></span>
						</a>
					</dd>
					<dt class="sr-only">Description</dt>
					<dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.</dd>
					<dt class="sr-only">Salary</dt>
					<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$125,000 USD</dd>
					<dt class="sr-only">Location</dt>
					<dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
						<svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
						<circle cx="1" cy="1" r="1" />
						</svg>
						San Francisco, CA
					</dd>
					</dl>
				</li>
				<li class="py-8">
					<dl class="relative flex flex-wrap gap-x-3">
					<dt class="sr-only">Role</dt>
					<dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
						<a href="#">
						React Native developer
						<span class="absolute inset-0" aria-hidden="true"></span>
						</a>
					</dd>
					<dt class="sr-only">Description</dt>
					<dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.</dd>
					<dt class="sr-only">Salary</dt>
					<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">$105,000 USD</dd>
					<dt class="sr-only">Location</dt>
					<dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
						<svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
						<circle cx="1" cy="1" r="1" />
						</svg>
						San Francisco, CA
					</dd>
					</dl>
				</li>
				</ul>
				<div class="mt-8 flex border-t border-gray-100 pt-8">
				<a href="#" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">View all openings <span aria-hidden="true">&rarr;</span></a>
				</div>
			</div>
			</div>
		</div>
		</div>
</section>
<section class="bg-white py-24 sm:py-32 border-t-2 border-b-2 border-gray-200">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold mb-12 text-center">Latest News & Blog Posts</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369817/cccd/news-1.webp" alt="News 1" class="w-full h-48 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2">New Campus Opening</h3>
					<p class="text-gray-600 mb-4">We're excited to announce the opening of our new campus in Montego Bay, expanding our reach to more students...</p>
					<a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center">
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
			<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369817/cccd/news-2.webp" alt="News 2" class="w-full h-48 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2">Student Success Story</h3>
					<p class="text-gray-600 mb-4">Meet Sarah, one of our recent graduates who has gone on to become a successful entrepreneur in the Deaf community...</p>
					<a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center">
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
			<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369817/cccd/news-3.webp" alt="News 3" class="w-full h-48 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2">Upcoming Fundraising Event</h3>
					<p class="text-gray-600 mb-4">Join us for our annual gala dinner to support CCCD Jamaica. This year's theme is "Bridging Worlds Through Sign"...</p>
					<a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center">
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
			<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369817/cccd/news-4.webp" alt="News 4" class="w-full h-48 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2">New Sign Language Course</h3>
					<p class="text-gray-600 mb-4">We're launching a new online course to teach Jamaican Sign Language to hearing individuals. Learn more and enroll...</p>
					<a href="#" class="text-indigo-600 hover:text-indigo-800 flex items-center">
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="mt-12 text-center">
			<a href="#" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">View All News & Blog Posts</a>
		</div>
	</div>
</section>
<section class="py-24 sm:py-32 relative">
	<div class="absolute inset-0 z-0">
		<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369817/cccd/cccd-jamaica-kingston.webp" alt="Background image of CCCD Jamaica" class="w-full h-full object-cover opacity-20">
	</div>
	<div class="container mx-auto px-4 relative z-10">
		<h2 class="text-3xl font-bold mb-8 text-center text-gray-900">Meet Our Fixers</h2>
		<p class="text-lg mb-12 max-w-3xl mx-auto text-center text-gray-700">
			Our Fixers are dedicated individuals who work tirelessly to improve the lives of the Deaf community in Jamaica. They are the backbone of our organization, providing essential support, education, and resources to those we serve.
		</p>
		<div class="aspect-w-16 aspect-h-9 max-w-6xl mx-auto">
			<iframe 
				class="w-full h-full shadow-lg rounded-lg"
				src="https://www.youtube.com/embed/your-video-id" 
				title="CCCD Jamaica Fixers" 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowfullscreen>
			</iframe>
		</div>
	</div>
</section>
<section class="bg-white py-24 sm:py-32">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold mb-12 text-center">Our Locations</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
		<div class="bg-gray-100 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">US Office</h3>
			<p>Address: 123 Main St, Anytown, USA</p>
			<p>Phone: (123) 456-7890</p>
		</div>
		<div class="bg-gray-100 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Jamaica Head Office</h3>
			<p>Address: 456 Jamaica Ave, Kingston, Jamaica</p>
			<p>Phone: (876) 123-4567</p>
		</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
		<div class="bg-gray-100 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Knockpatrick Campus</h3>
			<p>Address: 789 Knockpatrick Rd, Manchester, Jamaica</p>
			<p>Phone: (876) 234-5678</p>
		</div>
		<div class="bg-gray-100 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Kingston Campus</h3>
			<p>Address: 101 Kingston St, Kingston, Jamaica</p>
			<p>Phone: (876) 345-6789</p>
		</div>
		<div class="bg-gray-100 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Montego Bay Campus</h3>
			<p>Address: 202 Montego Blvd, Montego Bay, Jamaica</p>
			<p>Phone: (876) 456-7890</p>
		</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
		<div class="bg-gray-100 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Deaf Village</h3>
			<p>Address: 303 Deaf Village Rd, St. Elizabeth, Jamaica</p>
			<p>Phone: (876) 567-8901</p>
		</div>
		<div class="bg-gray-100 p-6 rounded-lg">
			<img 
			src="https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/deaf-village.jpg" 
			alt="Deaf Village" 
			class="w-full h-auto rounded-lg"
			/>
		</div>
		</div>
		<div class="mt-12">
		<iframe 
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.630107374707!2d-77.31942868513684!3d18.017013087603394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f4a9e5e9bbd%3A0x1db9b0b6b9f9b9f9!2sCaribbean%20Christian%20Centre%20for%20the%20Deaf!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
			width="100%" 
			height="450" 
			style="border:0;" 
			allowfullscreen="" 
			loading="lazy">
		</iframe>
		</div>
	</div>
</section>

<Support />
