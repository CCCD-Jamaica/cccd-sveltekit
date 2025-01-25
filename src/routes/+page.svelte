<script>
	import { CldImage } from 'svelte-cloudinary';
	import Icon from '@iconify/svelte';
	import Support from '$components/Support.svelte';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<!-- Accessibility Checks
	1. WCAG ContrastChecker: Does not meet Compliance due to video component.
	2. Siteimprove: WCAG 2.0 AA and WCAG 2.0 AAA Compliance on 2024-12-29.
	3. axe DevTools: Does not meet Compliance due to video component.
	5. Alnspector: Does not meet Compliance do to video component due to Back to Top Circle Button.
	6. Wave Evaluation Tool: WCAG 2.2 AA and WCAG 2.2 AAA Compliance on 2024-12-29.
-->

<MetaTags
	title="Caribbean Christian Centre for the Deaf"
	titleTemplate="%s | CCCD Jamaica"
	description="Caribbean Christian Centre for the Deaf (CCCD) exists to reach, teach, and nurture the Deaf of Jamaica. Join us in our mission to provide education and vocational training to the Deaf community."
	canonical="https://cccd.org.jm/"
	openGraph={{
		url: 'https://cccd.org.jm',
		title: 'Caribbean Christian Centre for the Deaf - Empowering the Deaf Community',
		description: 'CCCD Jamaica provides education, vocational training, and support to the Deaf community in Jamaica. Learn how you can get involved and make a difference.',
		images: [
		{
			url: 'https://res.cloudinary.com/shinkirin/image/upload/c_crop,h_600,w_800/v1726612157/cccd/graduatesfromcccd.webp',
			width: 800,
			height: 600,
			alt: 'CCCD Jamaica Deaf Student Graduation'
		},
		{
			url: 'https://res.cloudinary.com/shinkirin/image/upload/c_crop,h_800,w_900/v1726612157/cccd/graduatesfromcccd.webp',
			width: 900,
			height: 800,
			alt: 'Young CCCD Deaf Jamaican Student Graduation'
		}
		],
		siteName: 'CCCD Jamaica'
	}}
	twitter={{
		handle: '@CCCDJamaica',
		site: '@CCCDJamaica',
		cardType: 'summary_large_image',
		title: 'Caribbean Christian Centre for the Deaf - Empowering the Deaf in Jamaica',
		description: 'CCCD Jamaica provides education, vocational training, and support to the Deaf community. Learn how you can get involved and make a difference.',
		image: 'https://res.cloudinary.com/shinkirin/image/upload/c_crop,h_800,w_900/v1726612157/cccd/graduatesfromcccd.webp',
		imageAlt: 'CCCD Jamaica Deaf Student at her Graduation'
	}}
/>

<JsonLd
	schema={{
		'@type': 'Organization',
		'@id': 'https://cccd.org.jm',
		name: 'Caribbean Christian Centre for the Deaf',
		url: 'https://cccd.org.jm',
		logo: 'https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp',
		sameAs: [
			'https://www.facebook.com/cccdjamaica',
			'https://www.instagram.com/cccdjamaica/',
			'https://www.youtube.com/@caribbeanchristiancentre',
			'https://Deafjamaica.dev/',
			'https://cccdjamaica.org'
		],
		description: 'Caribbean Christian Centre for the Deaf (CCCD) exists to reach, teach, and nurture the Deaf of Jamaica. We provide education, vocational training, and support to the Deaf community.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '4 Manchester Road',
			addressLocality: 'Knockpatrick',
			addressRegion: 'Manchester',
			postalCode: 'JMMAN07',
			addressCountry: 'JM'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+1-876-904-3501',
			contactType: '	support',
			email: 'info@cccdjamaica.org'
		}
	}}
/>
<section>
	<div class="relative bg-white">
		<div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
			<div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
				<div class="mx-auto max-w-lg lg:mx-0">
				<img class="h-36 rounded-md border-2 border-blue-900" src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp" alt="CCCD Jamaica Logo">
				<div class="hidden sm:mt-32 sm:flex lg:mt-16">
					<div class="relative rounded-full px-3 py-1 text-lg text-blue-900 ring-1 ring-blue-900 hover:ring-red-800">
					<span class="absolute inset-0" aria-hidden="true"></span>Learn Jamaican Sign Language With Us <a href="/resources#jsl-programs" class="font-bold whitespace-nowrap text-red-800"><span aria-hidden="true">&rarr;</span></a>
					</div>
				</div>
				<h1 class="mt-24 text-4xl font-semibold tracking-tight text-pretty text-blue-900 sm:mt-10 sm:text-6xl">Empowering the Deaf Community</h1>
				<p class="mt-8 text-lg font-medium text-pretty text-blue-900 sm:text-xl/8">Caribbean Christian Centre for the Deaf exists to reach, teach, and nurture the Deaf of Jamaica. Join us in our mission to provide education, vocational training, transitional services and discipleship training to the Deaf community.</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a href="/fundraising" class="rounded-md bg-red-800 px-3.5 py-2.5 text-md font-bold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 uppercase">Donate Now</a>
					<a href="/get-involved" class="text-md font-bold text-blue-900 hover:text-red-800">Get Involved <span aria-hidden="true">→</span></a>
				</div>
				</div>
			</div>
			<div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
				<CldImage
				src="v1726012729/cccd_wordpress/cccd-Deaf-graduate-jamaica.webp"
				alt="CCCD Jamaica Deaf Student at her Graduation"
				width="2102"
				height="1400"
				class="aspect-3/2 w-full bg-gray-50 object-top lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
				/>
			</div>
		</div>
	</div>
</section>
<section class="border-t-2 border-blue-900">
	<div class="overflow-hidden bg-gold-50 py-32">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
		<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
			<h2 class="text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">Nuturing Our Deaf Students</h2>
			<p class="mt-6 text-lg leading-8 text-black">It is not often that you can touch a life in such a tangible way. Your contributions will allow you to invest in their physical and, most importantly, spiritual well-being.</p>
			<p class="mt-6 text-lg leading-7 text-black">Here&apos;s your opportunity to touch the life of a Deaf student in a meaningful and tangible way. Your contributions allow you to invest in the mental, physical social and, most importantly, spiritual well-being of a Deaf student of your choosing or the collective Deaf population.</p>
			<div class="mt-10 flex">
			<a href="/get-involved" class="rounded-md bg-red-800 hover:bg-red-700 transition duration-300 px-3.5 py-2.5 text-md font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">Help Nurture our Deaf Students' Future <span aria-hidden="true">&rarr;</span></a>
			</div>
		</div>
		<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
			<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
			<img src="https://res.cloudinary.com/shinkirin/image/upload/v1726017431/cccd_wordpress/Deafjamaicangirl.webp" alt="CCCD Jamaica Deaf Student giving the peace sign" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover border-4 border-red-800">
			</div>
			<div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
			<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1722901476/cccd_wordpress/cccdfixers-kitchen.webp" alt="CCCD Jamaica Deaf Students preparing in the renovated kitchen at the Kingston campus" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover border-4 border-red-800">
			</div>
			<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/c_scale,w_1291/v1726017899/cccd_wordpress/Fellowship_with_JDV_Community.webp" alt="CCCD Jamaica Deaf Students and visitors at the Jamaica Deaf Village Community" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover border-4 border-red-800">
			</div>
			<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
				<img src="https://res.cloudinary.com/shinkirin/image/upload/v1720369815/cccd/cccd-Deaf-students-kingston.webp" alt="CCCD Jamaica Deaf Students working on a computer" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover border-4 border-red-800">
			</div>
			</div>
		</div>
		</div>
	</div>
</div>
</section>
<section 
    class="bg-green-900 py-16 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iY3Jvc3NQYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTQwIDEwIEw2MCAxMCBMNjAgNDAgTDkwIDQwIEw5MCA2MCBMNjAgNjAgTDYwIDkwIEw0MCA5MCBMNDAgNjAgTDEwIDYwIEwxMCA0MCBMNDAgNDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjcm9zc1BhdHRlcm4pIi8+PC9zdmc+')] bg-repeat" 
    aria-labelledby="jsl-heading"
    aria-describedby="section-description"
>
    <span id="section-description" class="sr-only">Section with Christian cross pattern background</span>
	<div class="absolute inset-0 z-0" aria-hidden="true">
		<div class="w-full h-full bg-gradient-to-br from-green-800 via-yellow-500 to-black opacity-20"></div>
	</div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="flex justify-start mb-8">
			<img 
				src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
				alt="Caribbean Christian Centre for the Deaf Logo" 
				class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-md border-2 border-black"
				width="144"
				height="144"
				loading="lazy"
			>
		</div>
		<div class="flex flex-wrap items-center">
			<div class="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
				<h2 id="jsl-heading" class="text-4xl font-extrabold text-yellow-300 mb-6" tabindex="0">Learn Jamaican Sign Language</h2>
				<p class="text-white text-xl leading-relaxed font-medium mb-8" tabindex="0">
					The ability to communicate with the Deaf community in Jamaica is crucial to improving and expanding opportunities for their integration and creating awareness among the Hearing. Why not take the next step and learn Jamaican Sign Language?
				</p>
				<div class="flex flex-wrap gap-6 justify-center md:justify-start" role="navigation" aria-label="JSL Resources">
					<a 
						href="/resources#jsl-programs" 
						class="inline-block bg-black text-yellow-300 font-bold py-4 px-8 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-yellow-300 focus:outline-none transition duration-300 uppercase"
						aria-label="Learn Jamaican Sign Language Programs"
					>
						Learn JSL Now
					</a>
					<a 
						href="/resources" 
						class="inline-block bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-black focus:outline-none transition duration-300 uppercase"
						aria-label="Access Jamaican Sign Language Resources"
					>
						Visit our JSL Resources
					</a>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1726420106/cccd/dall-e-jsl-girl.webp" 
					alt="Jamaican student using sign language generated by DALL-E 3" 
					class="rounded-lg shadow-lg w-full h-auto border-4 border-white"
					loading="lazy"
					width="800"
					height="600"
				>
			</div>
		</div>
	</div>
</section>
<section aria-labelledby="about-heading">
	<div class="overflow-hidden bg-white py-24 sm:py-32 relative">
		<div class="absolute inset-0 p-4" aria-hidden="true">
			<div class="w-full h-full bg-no-repeat bg-contain bg-center opacity-20" style="background-image: url('https://res.cloudinary.com/shinkirin/image/upload/v1737844004/cccd/jamaica.webp');" role="presentation"></div>
		</div>
		<div class="mx-auto max-w-7xl md:px-6 lg:px-8 relative">
			<div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
				<div class="px-6 lg:px-0 lg:pt-4 lg:pr-4">
					<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl bg-gold-50 rounded-xl p-8 border-2 border-blue-800">
						<h2 id="about-heading" class="text-3xl font-bold tracking-tight text-red-800 sm:text-5xl" tabindex="0">About CCCD Jamaica</h2>
						<p class="mt-6 text-lg/8 text-gold-800" tabindex="0">Caribbean Christian Centre for the Deaf exists to reach, teach, and nurture the Deaf of Jamaica to experience the joy of knowing Jesus, personal and professional development and wholesome integration into the wider society and the world. We accomplish this by operating three residential schools spread geographically across the island (Kingston, Manchester and St. James) and a centrally located Jamaica Deaf Village (Manchester), which ministers to the adult Deaf and their families.</p>
						<dl class="mt-10 max-w-xl space-y-8 text-md text-gold-800 lg:max-w-none">
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gold-800" tabindex="0">
									<Icon icon="mdi:book-cross" class="absolute top-1 left-1 size-5 text-red-800" aria-hidden="true" />
									Statement of Faith
								</dt>
								<dd class="inline" tabindex="0">In One God, who has revealed Himself in Scripture through the Old and New Testaments as three Persons; Father, Son and Holy Spirit.</dd>
							</div>
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gold-800" tabindex="0">
									<Icon icon="material-symbols:church" class="absolute top-1 left-1 size-5 text-blue-800" aria-hidden="true" />
									Our Purpose
								</dt>
								<dd class="inline" tabindex="0">CCCD exists to reach, teach, and nurture the Deaf of Jamaica so that they can experience the joy of knowing Jesus and serving within their community.</dd>
							</div>
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gold-800" tabindex="0">
									<Icon icon="material-symbols:emoji-people-rounded" class="absolute top-1 left-1 size-5 text-gold-800" aria-hidden="true" />
									Our Board and Staff
								</dt>
								<dd class="inline" tabindex="0">Learn more about our dedicated board and staff that work tirelessly to ensure the mission's success to nurture Deaf students in Jamaica.</dd>
							</div>
						</dl>
					</div>
				</div>
				<div class="sm:px-6 lg:px-0">
					<div class="relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
						<div class="mx-auto max-w-none w-full">
							<img 
								src="https://res.cloudinary.com/shinkirin/image/upload/v1727028682/cccd/IMG-20240623-WA0054.webp" 
								alt="Leon Samms and the founder of CCCD Jamaica" 
								class="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 border-4 border-blue-800"
								width="800"
								height="600"
								loading="lazy"
							>
							<img 
								src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
								alt="Caribbean Christian Centre for the Deaf Logo"
								class="w-36 h-36 mx-auto mt-8 border-2 border-blue-800 rounded-md"
								width="144"
								height="144"
								loading="lazy"
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="relative bg-blue-50 border-t-2 border-red-800">
	<div class="relative h-80 overflow-hidden bg-blue-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
		<img class="size-full object-top sm:object-cover" src="https://res.cloudinary.com/shinkirin/image/upload/o_69/v1726621785/cccd/200343_Image_of_Jesus_Christ_in_Jamaica_with_Jamaican_dea_xl-1024-v1-0.webp" alt="Jesus Christ with Jamaican Deaf students behind Him generated by DALL-E 3">
		<svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
			<path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" />
			<defs>
				<linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
					<stop stop-color="#1E40AF" />
					<stop offset="1" stop-color="#B45309" />
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32 bg-blue-50">
			<h2 class="text-base/7 font-semibold text-blue-800">Nurturing Through Christ's Love</h2>
			<p class="mt-2 text-4xl font-semibold tracking-tight text-red-800 sm:text-5xl">Nurture Deaf Students Through Christ's Love</p>
			<p class="mt-6 text-base/7 text-gold-800">"And whoever welcomes one such child in my name welcomes me." - Matthew 18:5</p>
			<p class="mt-6 text-base/7 text-blue-800">Join us in our mission to reach, teach, and nurture Deaf students in Jamaica. Your support will make a lasting impact in their lives and spread God's love.</p>
			<div class="mt-8">
				<a href="/get-involved" class="inline-flex rounded-md bg-red-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-md hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 uppercase">Become a Mission Partner</a>
			</div>
		</div>
	</div>
</div>
<section class="bg-white py-24 sm:py-32 border-t-2 border-red-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
			<div class="w-full lg:max-w-lg lg:flex-auto">
				<h2 class="text-3xl font-bold tracking-tight text-red-800 sm:text-5xl">How you can help</h2>
				<p class="mt-6 text-lg leading-8 text-black">Your support can make a significant difference in the lives of Deaf students in Jamaica. Whether through volunteering, donations, or becoming a missionary, every contribution helps us reach, teach, and nurture the Deaf community.</p>
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1726434833/cccd/backtoschoolcccd.webp" 
					alt="Back to school with four CCCD Jamaica Deaf Students" 
					class="mt-16 w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 border-4 border-blue-800"
					width="800"
					height="600"
					loading="lazy"
				>
			</div>
			<div class="w-full lg:max-w-xl lg:flex-auto relative">
				<div class="absolute inset-0 bg-no-repeat bg-center opacity-20" style="background-image: url('https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp'); background-size: 75%; background-position: center;"></div>
				<div class="relative z-10">
					<h3 class="sr-only">Ways to Help</h3>
					<ul class="-my-8 divide-y divide-gold-300">
						<li class="py-8">
							<dl class="relative flex flex-wrap gap-x-3">
								<dt class="sr-only">Role</dt>
								<dd class="w-full flex-none text-lg font-semibold tracking-tight text-red-900">
									<a href="/get-involved#volunteer" class="hover:text-red-700">
										Volunteer Opportunities
										<span class="absolute inset-0" aria-hidden="true"></span>
									</a>
								</dd>
								<dt class="sr-only">Description</dt>
								<dd class="mt-2 w-full flex-none text-base leading-7 text-black">Join us in Jamaica to help with teaching, mentoring, or supporting our various programs. Your skills and time can make a lasting impact on our students' lives.</dd>
								<dt class="sr-only">Duration</dt>
								<dd class="mt-4 text-base font-semibold leading-7 text-blue-800">Short-term and long-term options available</dd>
								<dt class="sr-only">Location</dt>
								<dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-black">
									<svg viewBox="0 0 2 2" class="h-1 w-1 flex-none fill-gold-300" aria-hidden="true">
										<circle cx="1" cy="1" r="1" />
									</svg>
									Various locations in Jamaica
								</dd>
							</dl>
						</li>
						<li class="py-8">
							<dl class="relative flex flex-wrap gap-x-3">
								<dt class="sr-only">Role</dt>
								<dd class="w-full flex-none text-lg font-semibold tracking-tight text-red-900">
									<a href="/get-involved#missionary" class="hover:text-red-700">
										Missionary Opportunities
										<span class="absolute inset-0" aria-hidden="true"></span>
									</a>
								</dd>
								<dt class="sr-only">Description</dt>
								<dd class="mt-2 w-full flex-none text-base leading-7 text-black">Serve as a full-time missionary, dedicating your skills and passion to our mission of reaching and teaching the Deaf in Jamaica. Experience personal growth while making a difference.</dd>
								<dt class="sr-only">Commitment</dt>
								<dd class="mt-4 text-base font-semibold leading-7 text-blue-800">Long-term commitment required</dd>
								<dt class="sr-only">Location</dt>
								<dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-black">
									<svg viewBox="0 0 2 2" class="h-1 w-1 flex-none fill-gold-300" aria-hidden="true">
										<circle cx="1" cy="1" r="1" />
									</svg>
									Jamaica
								</dd>
							</dl>
						</li>
						<li class="py-8">
							<dl class="relative flex flex-wrap gap-x-3">
								<dt class="sr-only">Role</dt>
								<dd class="w-full flex-none text-lg font-semibold tracking-tight text-red-900">
									<a href="/get-involved#donate" class="hover:text-red-700">
										Make a Donation
										<span class="absolute inset-0" aria-hidden="true"></span>
									</a>
								</dd>
								<dt class="sr-only">Description</dt>
								<dd class="mt-2 w-full flex-none text-base leading-7 text-black">Your financial support helps us provide education, resources, and opportunities for Deaf students in Jamaica. Every contribution, big or small, makes a difference in their lives.</dd>
								<dt class="sr-only">Options</dt>
								<dd class="mt-4 text-base font-semibold leading-7 text-blue-800">One-time or recurring donations</dd>
								<dt class="sr-only">Method</dt>
								<dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-black">
									<svg viewBox="0 0 2 2" class="h-1 w-1 flex-none fill-gold-300" aria-hidden="true">
										<circle cx="1" cy="1" r="1" />
									</svg>
									Secure online payment options
								</dd>
							</dl>
						</li>
					</ul>
					<div class="mt-8 flex border-t border-gold-300 pt-8">
						<a href="/get-involved" class="inline-flex rounded-md bg-red-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-md hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 uppercase">Explore all ways to help&nbsp;<span aria-hidden="true">&rarr;</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="bg-white py-12 sm:py-16 border-t-2 border-b-2 border-red-900">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold mb-12 text-center text-red-900">Latest News &amp; Updates</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="bg-gray-50 rounded-lg overflow-hidden shadow-md border-2 border-red-800">
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1726436148/cccd/cccdteam.webp" 
					alt="CCCD Jamaica team members and visitors gathered at the Jamaica Deaf Village" 
					class="w-full h-48 object-cover"
					loading="lazy"
				>
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2 text-blue-900">Jamaica Deaf Village Experience</h3>
					<p class="text-black font-medium mb-4 text-base">Going to JDV for the first time is an experience that has forever impacted my life...</p>
					<a 
						href="https://www.facebook.com/cccdjamaica/posts/pfbid023y6z6EX4TwpF8udRZCeCMtdtobjJoPRg6VXHg5Kr4rRXdxqTegNv6XoEsYnPrBVMl" 
						target="_blank" 
						rel="noopener noreferrer" 
						class="text-blue-800 hover:text-red-800 font-semibold inline-flex items-center"
						aria-label="Read more about the Jamaica Deaf Village Experience (opens in new tab)"
					>
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
			<div class="bg-gray-50 rounded-lg overflow-hidden shadow-md border-2 border-red-800">
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1726435830/cccd/dormrenovation-cccd.webp" 
					alt="Volunteers working on renovating the student dormitory at CCCD Knockpatrick campus" 
					class="w-full h-48 object-cover"
					loading="lazy"
				>
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2 text-blue-900">Knockpatrick Dorm Renovation</h3>
					<p class="text-black font-medium mb-4 text-base">Getting ready for students!! This summer we had the opportunity to re-vamp the student dorms...</p>
					<a 
						href="https://www.facebook.com/cccdjamaica/posts/pfbid02nL7WRrYcviDJaZUpgvqPzPdrfdu8kUZoaFiwUpXkUEZSXkUg8wyuvzZxoFqbhFgDl" 
						target="_blank" 
						rel="noopener noreferrer" 
						class="text-blue-800 hover:text-red-800 font-semibold inline-flex items-center"
						aria-label="Read more about the Knockpatrick Dorm Renovation (opens in new tab)"
					>
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
			<div class="bg-gray-50 rounded-lg overflow-hidden shadow-md border-2 border-red-800">
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1726436298/cccd/cadeprogram.webp" 
					alt="Students participating in the CADE Program activities in Montego Bay" 
					class="w-full h-48 object-cover"
					loading="lazy"
				>
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2 text-blue-900">CADE Program</h3>
					<p class="text-black font-medium mb-4 text-base">August is here, and that means our campuses are getting ready for students this fall...</p>
					<a 
						href="https://www.facebook.com/cccdjamaica/posts/pfbid02fXKT2SpSi7wam7YWv3zqQ52UrFm5otLMxA6nBaNoQkjTX7iFB8NQZexG2R7ZeXjnl" 
						target="_blank" 
						rel="noopener noreferrer" 
						class="text-blue-800 hover:text-red-800 font-semibold inline-flex items-center"
						aria-label="Read more about the CADE Program (opens in new tab)"
					>
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
			<div class="bg-gray-50 rounded-lg overflow-hidden shadow-md border-2 border-red-800">
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1726435386/cccd/berylcleanupcccde.webp" 
					alt="CCCD community members working together on campus cleanup after Hurricane Beryl" 
					class="w-full h-48 object-cover"
					loading="lazy"
				>
				<div class="p-6">
					<h3 class="text-xl font-semibold mb-2 text-blue-900">Hurricane Beryl Cleanup</h3>
					<p class="text-black font-medium mb-4 text-base">Check your email for an update on the cleanup and repairs from Hurricane Beryl. Our campuses are receiving help from teams, funds from generous donors...</p>
					<a 
						href="https://www.facebook.com/cccdjamaica/posts/pfbid0Hhnw7vD8MXR8JxfMLaD1aHEw5Y2AayFv1vjKDwtwD4j3KZP3p4tv2T1zCbcwTSkNl" 
						target="_blank" 
						rel="noopener noreferrer" 
						class="text-blue-800 hover:text-red-800 font-semibold inline-flex items-center"
						aria-label="Read more about the Hurricane Beryl Cleanup (opens in new tab)"
					>
						Read more
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="mt-12 text-center">
			<a 
				href="https://www.facebook.com/cccdjamaica" 
				target="_blank" 
				rel="noopener noreferrer" 
				class="inline-flex items-center rounded-md bg-red-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 uppercase"
				aria-label="View all news and updates on Facebook (opens in new tab)"
			>
				View All News &amp; Updates
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>
</section>
<section 
    class="py-12 sm:py-16 relative"
    aria-labelledby="fixers-heading"
>
    <div class="absolute inset-0 z-0">
        <img 
            src="https://res.cloudinary.com/shinkirin/image/upload/v1726434621/cccd/fixers-cccd.webp" 
            alt="" 
            class="w-full h-full object-cover opacity-20"
            role="presentation"
        >
    </div>
    <div class="container mx-auto px-4 relative z-10">
        <h2 
            id="fixers-heading" 
            class="text-3xl font-bold mb-8 text-center text-gray-900"
            tabindex="0"
        >
            CCCD meets The Fixers
        </h2>
        <p 
            class="text-xl font-bold mb-12 max-w-3xl mx-auto text-center text-red-900"
            tabindex="0"
        >
            The Fixers recently collaborated with CCCD Kingston to renovate the old manager's house into a new culinary space for students. It looks great! We are excited to see how this benefits our students and grows their hospitality & culinary skills.
        </p>
        <div 
            class="aspect-w-16 aspect-h-9 max-w-6xl mx-auto"
            role="region"
            aria-label="Video player"
        >
            <iframe 
                class="w-full h-full shadow-lg rounded-xl border-4 border-red-900"
                src="https://www.byutv.org/embeddedPlayer/?content-id=f90808a9-897b-4c5c-877b-acae2d51803c&autoplay=false&playbackrate=1" 
                title="The Fixers renovate CCCD Kingston's manager's house into a culinary space"
                aria-description="Video showing The Fixers team working with CCCD Kingston to transform the old manager's house into a modern culinary training facility for Deaf students"
                loading="lazy"
                frameborder="0"
                allow="clipboard-write; encrypted-media; picture-in-picture"
                allowfullscreen
            >
                <p>Your browser doesn't support iframes. View the video on <a href="https://www.byutv.org/player/f90808a9-897b-4c5c-877b-acae2d51803c">BYUtv's website</a>.</p>
            </iframe>
            <div class="sr-only">
                <p>Video controls are available at the bottom of the player. You can:</p>
                <ul>
                    <li>Play and pause the video</li>
                    <li>Adjust volume</li>
                    <li>Enable closed captions</li>
                    <li>View in full screen</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="bg-white py-12 sm:py-16 border-t-2 border-blue-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-4xl font-bold tracking-tight text-red-800 sm:text-5xl">Our Locations</h2>
		<p class="mt-6 text-lg leading-8 text-black">Caribbean Christian Centre for the Deaf operates multiple campuses and offices across Jamaica and the United States to serve the Deaf community through education, vocational training, and support services.</p>
		</div>
		<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 lg:mx-0 lg:max-w-none lg:grid-cols-4">
		<div class="mx-auto w-full text-left">
			<h3 class="border-l border-blue-900 pl-6 font-semibold text-red-800">US Office</h3>
			<address class="border-l border-gray-200 pt-2 pl-6 text-black not-italic">
			<p>100 South Pine St., Suite 283</p>
			<p>Zeeland, MI 49464</p>
			<p>United States</p>
			<p class="mt-2 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+16167486020" class="text-blue-800 hover:text-blue-600">(616) 748-6020</a>
			</p>
			</address>
		</div>
		<div class="mx-auto w-full text-left">
			<h3 class="border-l border-blue-900 pl-6 font-semibold text-red-800">Jamaica Head Office</h3>
			<address class="border-l border-gray-200 pt-2 pl-6 text-black not-italic">
			<p>4 Cassia Park Road</p>
			<p>Kingston 10, Jamaica, W.I.</p>
			<p class="mt-2 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18766198487" class="text-blue-800 hover:text-blue-600">(876) 619-8487</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18765565125" class="text-blue-800 hover:text-blue-600">(876) 556-5125</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
				</svg>
				<a href="mailto:info@cccd.org.jm" class="text-blue-800 hover:text-blue-600">info@cccd.org.jm</a>
			</p>
			</address>
		</div>
		<div class="lg:col-span-2 flex justify-center">
			<img 
				src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp" 
				alt="CCCD Logo" 
				aria-describedby="cccd-logo"
				class="h-36 w-auto rounded-md border-2 border-blue-900"
				loading="lazy"
			/>
			<p id="cccd-logo" class="sr-only">CCCD Logo with Carribean Christian Centre for the Deaf wrapped around three people each with a different color of the CCCD. The slogan "Reach, Teach, and Nurture" is written below the logo. 1 Peter 4:7-11 is written below the slogan.</p>
		</div>
		<div class="mx-auto w-full text-left">
			<h3 class="border-l border-blue-900 pl-6 font-semibold text-red-800">Knockpatrick Campus</h3>
			<address class="border-l border-gray-200 pt-2 pl-6 text-black not-italic">
			<p>Knockpatrick District</p>
			<p>P.O. Box 14</p>
			<p>Manchester, Jamaica, W.I</p>
			<p class="mt-2 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18769049092" class="text-blue-800 hover:text-blue-600">(876) 904-9092</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
				</svg>
				<a href="mailto:knockpatrick@cccdjamaica.org" class="text-blue-800 hover:text-blue-600">knockpatrick@cccdjamaica.org</a>
			</p>
			</address>
		</div>
		<div class="mx-auto w-full text-left">
			<h3 class="border-l border-blue-900 pl-6 font-semibold text-red-800">Montego Bay Campus</h3>
			<address class="border-l border-gray-200 pt-2 pl-6 text-black not-italic">
			<p>PO Box 24, Granville Road</p>
			<p>St. James, Jamaica, W.I.</p>
			<p class="mt-2 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18769799153" class="text-blue-800 hover:text-blue-600">(876) 979-9153</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
				</svg>
				<a href="mailto:montegobay@cccdjamaica.org" class="text-blue-800 hover:text-blue-600">montegobay@cccdjamaica.org</a>
			</p>
			</address>
		</div>
		<div class="mx-auto w-full text-left">
			<h3 class="border-l border-blue-900 pl-6 font-semibold text-red-800">Kingston Campus</h3>
			<address class="border-l border-gray-200 pt-2 pl-6 text-black not-italic">
			<p>4 Cassia Park Road</p>
			<p>Kingston 10, Jamaica, W.I.</p>
			<p class="mt-2 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18766799687" class="text-blue-800 hover:text-blue-600">(876) 679-9687</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18767588155" class="text-blue-800 hover:text-blue-600">(876) 758-8155</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
				</svg>
				<a href="mailto:kingston@cccdjamaica.org" class="text-blue-800 hover:text-blue-600">kingston@cccdjamaica.org</a>
			</p>
			</address>
		</div>
		<div class="mx-auto w-full text-left">
			<h3 class="border-l border-blue-900 pl-6 font-semibold text-red-800">Jamaica Deaf Village</h3>
			<address class="border-l border-gray-200 pt-2 pl-6 text-black not-italic">
			<p>5954 Shooters Hill</p>
			<p>Mandeville, Manchester</p>
			<p>Jamaica, W.I</p>
			<p class="mt-2 flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18766033773" class="text-blue-800 hover:text-blue-600">(876) 603-3773</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
				</svg>
				<a href="tel:+18764947501" class="text-blue-800 hover:text-blue-600">(876) 494-7501</a>
			</p>
			<p class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
				</svg>
				<a href="mailto:info@cccdjamaica.org" class="text-blue-800 hover:text-blue-600">info@cccdjamaica.org</a>
			</p>
			</address>
		</div>
		</div>
		<div class="mt-16 rounded-lg overflow-hidden border-4 border-red-800">
		<iframe 
			title="Map of Jamaica with CCCD Campus Locations and the Deaf Village"
			src="https://www.google.com/maps/d/embed?mid=1iGR3Kgk-dO1KF9HhzxbN2D40ciahZwc&ll=18.23223017483946%2C-77.28366071703978&z=9" 
			width="100%" 
			height="450" 
			style="border:0;" 
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			loading="lazy"
			aria-label="Interactive map showing CCCD campus locations across Jamaica">
		</iframe>
		</div>
	</div>
</section>

<Support />
