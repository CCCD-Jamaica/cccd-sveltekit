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
					<span class="font-bold italic">Purpose: <br>&quot;To Steward God&apos;s Resources for His Glory&quot;<br> 1 Peter 4:7-11</span>
				</p>
				<div class="mt-4 flex justify-start space-x-4">
					<a href="/donate" class="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
						Donate Now
					</a>
					<a href="/learn-jsl" class="inline-block bg-green-600 text-yellow-300 font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
						Learn Jamaican Sign Language
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
<section>
	<div class="overflow-hidden bg-gold-50 py-32">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
		<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuturing Our Deaf Students</h2>
			<p class="mt-6 text-xl leading-8 text-gray-600">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</p>
			<p class="mt-6 text-base leading-7 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</p>
			<div class="mt-10 flex">
			<a href="#" class="rounded-md bg-red-800 hover:bg-red-700 transition duration-300 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">Help Nurture our Deaf Students' Future <span aria-hidden="true">&rarr;</span></a>
			</div>
		</div>
		<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
			<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
			<img src="https://res.cloudinary.com/shinkirin/image/upload/v1726017431/cccd_wordpress/deafjamaicangirl.webp" alt="CCCD Jamaica Deaf Student" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover">
			</div>
			<div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
			<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1722901476/cccd_wordpress/cccdfixers-kitchen.webp" alt="CCCD Jamaica Deaf Student" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
			</div>
			<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/c_scale,w_1291/v1726017899/cccd_wordpress/Fellowship_with_JDV_Community.webp" alt="CCCD Jamaica Deaf Student" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
			</div>
			<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369815/cccd/cccd-deaf-students-kingston.webp" alt="CCCD Jamaica Deaf Student" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover">
			</div>
			</div>
		</div>
		</div>
	</div>
</div>

</section>
<section>
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
