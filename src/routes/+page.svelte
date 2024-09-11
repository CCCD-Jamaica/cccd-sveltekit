<script>
	import { CldImage } from 'svelte-cloudinary';
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
				alt="CCCD Jamaica Deaf Student Graduation"
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
				<p>Caribbean Christian Centre for the Deaf exists to reach, teach, and nurture the Deaf of Jamaica. Join us in our mission to provide education and vocational training to the Deaf community in Jamaica. Together, we 					can create opportunities and foster a supportive environment for all.<br>
					<br>
					<span class="font-bold italic">Purpose: To Steward God&apos;s Resources for His Glory - 1 Peter 4:7-11</span>
				</p>
				<div class="mt-4 flex justify-start">
					<a href="/donate" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
						Donate Now
					</a>
				</div>
			</div>
			<div class="w-full md:w-1/2 flex justify-center items-center">
				<!-- Content for the second column of the new centered layer -->
				<CldImage
					src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
					alt="CCCD Jamaica Deaf Student Graduation"
					width="1400"
					height="1035"
					class="w-auto h-3/4 rounded-r-lg"
				/>
			</div>
		</div>
	</div>
</section>
<section class="pt-1 bg-red-900">
	<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
	<CldImage
		src="v1722901455/cccd_wordpress/IMG_0234.jpg"
		alt="CCCD Jamaica Deaf Student Graduates"
		width="2016"
		height="1512"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
	/>
	<div class="mx-auto max-w-7xl px-6 lg:px-8 bg-blue-900 bg-opacity-35 p-8 rounded-lg">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">About CCCD Jamaica</h2>
			<p class="mt-6 text-lg leading-8 text-gray-300">Caribbean Christian Centre for the Deaf exists to reach, teach, and nurture the Deaf of Jamaica to experience the joy of knowing Jesus and serving within their community. We accomplish this by operating three residential schools spread geographically across the island (Kingston, Knockpatrick, and Montego Bay) and a centrally located Jamaica Deaf Village (Mandeville), which ministers to the adult Deaf and their children.</p>
		</div>
		<div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
				<a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
			</div>
			<dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
				<div class="flex flex-col-reverse">
				<dt class="text-base leading-7 text-gray-300">Offices worldwide</dt>
				<dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
				</div>
				<div class="flex flex-col-reverse">
				<dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt>
				<dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
				</div>
				<div class="flex flex-col-reverse">
				<dt class="text-base leading-7 text-gray-300">Hours per week</dt>
				<dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
				</div>
				<div class="flex flex-col-reverse">
				<dt class="text-base leading-7 text-gray-300">Paid time off</dt>
				<dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
				</div>
			</dl>
		</div>
	</div>	
</div>
</section>
