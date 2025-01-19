<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/Support.svelte';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	export let data;
	const { pageBy, boardOfDirectors, cccdHistories } = data;
	const aboutContent = pageBy?.aboutPageContent || {};
	let shouldAnimate = false;
	import { onMount } from 'svelte';
	onMount(() => {
		shouldAnimate = true;
	});
</script>

<!-- Accessibility Checks
	1. WCAG ContrastChecker: WCAG 2.0 AA & AAA Compliance on 2024-12-29.
	2. Siteimprove: WCAG 2.0 AA and WCAG 2.0 AAA Compliance on 2024-12-29.
	3. axe DevTools: WCAG 2.1 AA Compliance on 2024-12-29.
	5. Alnspector: WCAG 2.2 AA Compliance on 2024-12-29.
	6. Wave Evaluation Tool: WCAG 2.2 AA and WCAG 2.2 AAA Compliance on 2024-12-29.
-->

<svelte:head>
	<title>{pageBy.title} Jamaica</title>
	<meta name="description" content="About CCCD Jamaica - Our Mission, Vision, and Beliefs" />
</svelte:head>

<MetaTags
    title="About Us - Caribbean Christian Centre for the Deaf"
    description="Learn about the mission, vision, and history of Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Discover how we're empowering the Deaf community through education and support."
    canonical="https://cccd.org.jm/about"
    openGraph={{
        url: 'https://cccd.org.jm/about',
        title: 'About CCCD Jamaica - Empowering the Deaf Community',
        description: 'Discover the mission and impact of Caribbean Christian Centre for the Deaf. Learn how we\'re transforming lives through education and support for the Deaf in Jamaica.',
        images: [
            {
                url: 'https://res.cloudinary.com/shinkirin/image/upload/v1726612157/cccd/graduatesfromcccd.webp',
                width: 800,
                height: 600,
                alt: 'CCCD Jamaica Deaf Students'
            }
        ],
    }}
    twitter={{
        handle: '@CCCDJamaica',
        site: '@CCCDJamaica',
        cardType: 'summary_large_image',
    }}
/>

<JsonLd
    schema={{
        "@context": "https://schema.org",
        "@type": "NGO",
        name: "Caribbean Christian Centre for the Deaf",
        alternateName: "CCCD Jamaica",
        url: "https://cccd.org.jm",
        logo: "https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp",
        sameAs: [
            "https://www.facebook.com/cccdjamaica",
            "https://www.instagram.com/cccdjamaica/",
            "https://www.youtube.com/@caribbeanchristiancentre"
        ],
        description: "Caribbean Christian Centre for the Deaf (CCCD) is dedicated to empowering the Deaf community in Jamaica through education, vocational training, and spiritual nurturing.",
    }}
/>
{#if pageBy} <!-- If pageBy is defined, show the content -->
<!-- About Header Component-->
<section class="bg-white py-20">
	<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
		<img src="{aboutContent.headerimage.node.sourceUrl}" alt="{aboutContent.headerimage.node.altText}" aria-describedby="{aboutContent.headerimage.node.altText}" class="absolute inset-0 -z-10 size-full object-cover brightness-85 saturate-200 contrast-125 bg-blend-multiply bg-blue-700">
		<p id="{aboutContent.headerimage.node.altText}" class="sr-only bg-white text-black">{aboutContent.headerimage.node.description}</p>
		<div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
			<div class="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#991b1b] to-[#1e3a8a] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
		<div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
			<div class="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#991b1b] to-[#1e3a8a] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
		</div>
		<div class="mx-auto max-w-5xl bg-blue-950/90 pt-8 rounded-lg backdrop-blur-sm" role="banner">
			<div class="flex items-center gap-8 px-8">
				<div class="relative w-24 h-24">
					<img 
						src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp" 
						alt="CCCD Logo" 
						class="w-24 h-24 rounded-md {shouldAnimate ? 'animate-[zoom_1s_ease-out] motion-reduce:animate-none' : ''}"
						style="animation-iteration-count: 1;"
					/>
					<style>
						@keyframes zoom {
							0% { transform: scale(1); }
							50% { transform: scale(1.5); }
							100% { transform: scale(1); }
						}
					</style>
				</div>
				<h1 class="flex-1 text-4xl font-bold tracking-tight text-white text-center sm:text-6xl uppercase" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5)">{pageBy.title}</h1>
			</div>
			<p class="mt-8 text-lg font-bold text-pretty text-white text-center bg-red-800 p-4 rounded-bl-lg rounded-br-lg backdrop-blur-sm sm:text-xl/8 leading-relaxed">{aboutContent.quotes}</p>
		</div>
	</div>
</section>
<!-- End of About Header Component-->
<!-- Our Mission and Vision Component-->
<div class="relative overflow-hidden bg-white pb-16">
    <h2 class="text-4xl font-bold text-center mb-8 text-red-800">{aboutContent.mainHeader}</h2>
    <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:flex lg:flex-col lg:justify-center">
                <div class="mt-6">
                    <h2 class="text-3xl font-bold tracking-tight text-center text-blue-800 uppercase">{aboutContent.leftHeading2}</h2>
                    <div class="mt-4 text-lg font-semibold text-white text-center bg-red-800 p-4 rounded-lg border-2 border-gold-800">
                        {@html aboutContent.leftContent}
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <img 
                        src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
                        alt="CCCD Logo"
                        class="w-48 h-48"
                    />
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:flex lg:items-center">
                <div class="lg:relative lg:m-0">
                    <CldImage
                        src="{aboutContent.leftImage.node.sourceUrl}"
                        aria-label="{aboutContent.leftImage.node.altText}"
                        width="600"
                        height="600"
                        class="w-full rounded-xl ring-2 shadow-xl ring-gold-800"
                    />
                    <p class="mt-4 text-base text-white font-semibold text-center bg-blue-800 p-2 rounded-md">{@html aboutContent.leftImage.node.caption}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-24">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div class="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:flex lg:flex-col lg:justify-center">
                <div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-bold tracking-tight text-center text-blue-800 uppercase">{aboutContent.rightHeading2}</h2>
                        <div class="mt-4 text-lg font-semibold text-white text-center bg-red-800 p-4 rounded-lg border-2 border-gold-800">
                            {aboutContent.rightContent}
                        </div>
                    </div>
                    <div class="flex justify-center mt-4">
                        <img 
                            src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
                            alt="CCCD Logo"
                            class="w-48 h-48"
                        />
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0 lg:flex lg:items-center">
                <div class="lg:relative lg:m-0">
                    <CldImage
                        src="{aboutContent.rightImage.node.sourceUrl}"
                        aria-label="{aboutContent.rightImage.node.altText}" 
                        width="600"
                        height="600"
                        class="w-full rounded-xl ring-2 shadow-xl ring-gold-800"
                    />
                    <p class="mt-4 text-base text-white font-semibold text-center bg-blue-800 p-2 rounded-md">{@html aboutContent.rightImage.node.caption}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End of Our Mission and Vision Component-->
<!-- Statement of Faith Component-->
<div class="overflow-hidden bg-gold-50 py-12 sm:py-16 border-t-2 border-blue-800">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			<div class="lg:ml-auto lg:pt-4 lg:pl-4">
				<div class="lg:max-w-lg prose prose-lg prose-li:list-none prose-li:relative prose-li:pl-9">
					<h2 class="text-4xl font-bold text-center text-red-900">{aboutContent.secondComponentHeader}</h2>
					<h3 class="text-xl text-gold-900 uppercase font-bold">{aboutContent.weBelieve}</h3>
					<div class="mt-4 max-w-xl space-y-4 text-base font-semibold text-blue-900 lg:max-w-none">
						{@html aboutContent.beliefsContent.replace(/<li>/g, '<li><svg class="absolute top-1 left-1 size-5 text-red-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>')}
					</div>
				</div>
			</div>
			<div class="flex flex-col items-start justify-end lg:order-first">
				<CldImage
					src="{aboutContent.beliefsImage.node.sourceUrl}"
					aria-label="{aboutContent.beliefsImage.node.altText}"
					width="600"
					height="600"
					class="w-[48rem] max-w-none rounded-xl ring-2 shadow-3xl ring-red-900 sm:w-[57rem]"
				/>
				<div class="flex justify-center w-full mt-4">
					<img 
						src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
						alt="CCCD Logo"
						class="w-48 h-48 rounded-md border border-blue-800"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- End of Statement of Faith Component-->
<!-- Board of Directors Component-->
<section id="board" class="bg-white py-12 md:py-16 border-t-2 border-blue-800">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
		<div class="max-w-2xl xl:col-span-2">
			<h2 class="text-4xl font-semibold tracking-tight text-pretty text-red-900">{boardOfDirectors.edges[0].node.bod.bodHeader}</h2>
			<p class="mt-6 text-md font-semibold text-gray-900">{@html boardOfDirectors.edges[0].node.bod.bodDescription}</p>
			<div class="mt-8 flex justify-center">
				<img 
					src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
					alt="CCCD Logo"
					class="w-64 h-64"
				/>
			</div>
		</div>
		<ul role="list" class="-mt-12 space-y-12 divide-y divide-blue-800 xl:col-span-3">
			{#each boardOfDirectors.edges.sort((a, b) => a.node.bod.listOrder - b.node.bod.listOrder) as { node }}
				<li class="flex flex-col gap-10 pt-12 sm:flex-row">
					<CldImage
						src={node.bod.bodPhoto.node.sourceUrl}
						alt={node.bod.bodPhoto.node.altText}
						width="208"
						height="260"
						class="aspect-4/5 w-52 flex-none rounded-2xl object-cover border border-blue-800"
					/>
					<div class="max-w-xl flex-auto">
						<h3 class="text-lg font-semibold tracking-tight text-blue-900">{node.title}</h3>
						<p class="text-base font-semibold text-red-900">{node.bod.bodTitle}</p>
						<p class="mt-6 text-base font-semibold text-gray-900">{@html node.content}</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							{#if node.bod.linkedin}
							<li>
								<a href="{node.bod.linkedin}" class="text-blue-900 hover:text-red-900">
									<span class="sr-only">LinkedIn</span>
									<svg class="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
									</svg>
								</a>
							</li>
							{/if}
							{#if node.bod.instagram}
							<li>
								<a href="{node.bod.instagram}" class="text-blue-900 hover:text-red-900">
									<span class="sr-only">Instagram</span>
									<svg class="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
									</svg>
								</a>
							</li>
							{/if}
						</ul>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
<!-- End of Board of Directors Component-->
<!-- History Component-->
<section class="bg-gold-100 py-12 border-t-2 border-blue-800">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-8 text-red-900">{cccdHistories.nodes[0].categories.nodes[0].name}</h2>
		
		{#each cccdHistories.nodes.filter(h => h.history?.historyOrder >= 1 && h.history?.historyOrder <= 6).sort((a, b) => {
			return (a.history?.historyOrder ?? 0) - (b.history?.historyOrder ?? 0);
		}) as history}
			<div class="mb-8">
				<div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
					{#if history.history.historyOrder % 2 === 0}
						<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:flex lg:flex-col lg:justify-center">
							{#if history.categories.nodes.length > 0}
								<h3 class="text-3xl font-semibold mb-4 text-red-800">{history.title}</h3>
							{/if}
							<div class="prose prose-lg font-semibold prose-headings:text-blue-900 prose-p:text-gray-900 prose-a:text-red-800 hover:prose-a:text-red-900 prose-strong:text-blue-900 prose-em:text-red-800 prose-li:text-gray-700 prose-li:marker:text-red-800 max-w-none">
								{@html history.content}
							</div>
						</div>
						<div class="mt-12 sm:mt-16 lg:mt-0 lg:flex lg:items-center">
							<div class="lg:relative lg:m-0">
								<CldImage
									src={history.history.historyImage.node.sourceUrl}
									alt={history.history.historyImage.node.altText}
									width="600"
									height="600"
									class="w-full rounded-xl ring-2 shadow-xl ring-gold-800"
								/>
								{#if history.history.historyImage.node.caption}
									<p class="mt-4 text-base text-white font-semibold text-center bg-red-800 p-2 rounded-md">{@html history.history.historyImage.node.caption}</p>
								{/if}
							</div>
						</div>
					{:else}
						<div class="mt-12 sm:mt-16 lg:mt-0 lg:flex lg:items-center">
							<div class="lg:relative lg:m-0">
								<CldImage
									src={history.history.historyImage.node.sourceUrl}
									alt={history.history.historyImage.node.altText}
									width="600"
									height="600"
									class="w-full rounded-xl ring-2 shadow-xl ring-gold-800"
								/>
								{#if history.history.historyImage.node.caption}
									<p class="mt-4 text-base text-white font-semibold text-center bg-red-800 p-2 rounded-md">{@html history.history.historyImage.node.caption}</p>
								{/if}
							</div>
						</div>
						<div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:flex lg:flex-col lg:justify-center">
							{#if history.categories.nodes.length > 0}
								<h3 class="text-3xl font-semibold mb-4 text-red-800">{history.title}</h3>
							{/if}
							<div class="prose prose-lg prose-li:list-none prose-li:relative prose-li:pl-9 font-semibold prose-headings:text-blue-900 prose-p:text-gray-900 prose-a:text-red-800 hover:prose-a:text-red-900 prose-strong:text-blue-900 prose-em:text-red-800 prose-li:text-gray-700 max-w-none">
								{@html history.content}
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
<!-- End of History Component-->
<!-- Support Component-->
<Support />
<!-- End of Support Component-->
{/if} <!-- End of if pageBy -->
