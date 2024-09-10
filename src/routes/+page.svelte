<script>
	import { CldImage } from 'svelte-cloudinary';
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Caribben Christian Center for the Deaf in Jamaica" />
</svelte:head>

<section class="relative h-screen">
	<div class="absolute inset-0 flex">
		<div class="w-1/2 bg-white"></div>
		<div class="w-1/2">
			<CldImage
				src="v1722901480/cccd_wordpress/cccdjamaica-6.webp"
				alt="CCCD Jamaica Deaf Student Graduation"
				width="1600"
				height="900"
				class="w-full h-full object-cover"
			/>
		</div>
	</div>
	<div class="relative z-10 flex h-full">
		<div class="w-1/2 p-8">
			<!-- Main content for the first column -->
			<!-- No content -->
		</div>
		<div class="w-1/2"></div>
	</div>
	<div class="absolute inset-0 z-20 flex items-center justify-center">
		<div class="w-full md:w-2/3 h-auto md:h-1/2 flex flex-col md:flex-row bg-white bg-opacity-90 rounded-lg overflow-hidden">
			<div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
				<!-- Content for the first column of the new centered layer -->
				<h3 class="text-xl font-semibold mb-3">New Layer Content</h3>
				<p>Add your content for the first column of the new centered layer here.</p>
			</div>
			<div class="w-full md:w-1/2 p-8 bg-gray-100 flex flex-col justify-center">
				<!-- Content for the second column of the new centered layer -->
				<h3 class="text-xl font-semibold mb-3">New Layer Content</h3>
				<p>Add your content for the second column of the new centered layer here.</p>
			</div>
		</div>
	</div>
</section>
