<script lang="ts">
import { env } from '$env/dynamic/public';
import { onMount } from 'svelte';

interface ComponentImage {
node: {
	altText: string;
	caption: string;
	description: string;
	title: string;
	sourceUrl: string;
}
}

interface ComponentFields {
bgImage: ComponentImage;
buttonLabel: string;
buttonUrl: string;
}

interface Component {
content: string;
title: string;
componentFields: ComponentFields;
}

let componentBy: Component | null = null;
let loading = true;
let error: string | null = null;

const query = `
query GetSupportPage {
	componentBy(uri: "support-our-mission") {
	content
	title
	componentFields {
		bgImage {
		node {
			altText
			caption
			description
			title
			sourceUrl
		}
		}
		buttonLabel
		buttonUrl
	}
	}
}
`;

async function fetchData() {
try {
	const response = await fetch(import.meta.env.VITE_HUBAPI_URL, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	body: JSON.stringify({ query }),
	});

	if (!response.ok) {
	throw new Error(`HTTP error! status: ${response.status}`);
	}

	const { data, errors } = await response.json();
	if (errors) {
	throw new Error(errors[0].message);
	}
	
	componentBy = data.componentBy;
} catch (err) {
	if (err instanceof Error) {
	error = err.message;
	} else {
	error = 'An unknown error occurred';
	}
	console.error('Error fetching support data:', err);
} finally {
	loading = false;
}
}

$: bgImageUrl = componentBy?.componentFields?.bgImage?.node?.sourceUrl ?? '';

onMount(() => {
fetchData();
});
</script>

{#if loading}
<div class="flex justify-center items-center py-12">
<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-900"></div>
</div>
{:else if error}
<div class="text-red-900 text-center py-12">Error loading support content: {error}</div>
{:else if componentBy}
<section class="bg-gold-300 py-12 relative border-t-2 border-b border-red-900">
<div 
	class="absolute inset-0 bg-cover bg-center opacity-30" 
	style="background-image: url('{bgImageUrl}');">
</div>
<div class="container mx-auto px-4 relative z-10">
	<div class="p-4 text-center">
	<span class="text-4xl font-extrabold mb-4 text-red-800">{componentBy.title}</span>
	</div>
	<div class="flex flex-col items-center">
	<div class="mb-6">
		<img
		class="rounded-lg shadow-lg w-1/3 h-auto mx-auto border-2 border-white"
		src={componentBy.componentFields.bgImage.node.sourceUrl}
		alt={componentBy.componentFields.bgImage.node.altText}
		>
	</div>
	<div class="max-w-2xl text-center bg-red-800 p-4 rounded-lg border-2 border-blue-800">
		<div class="prose prose-lg prose-invert max-w-none">
			{@html componentBy.content}
		</div>
	</div>
	</div>
	<div class="flex justify-center pt-4">
	<a
		href={componentBy.componentFields.buttonUrl}
		class="bg-white text-red-800 hover:text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 uppercase"
	>
		{componentBy.componentFields.buttonLabel}
	</a>
	</div>
</div>
</section>
{/if}
