<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	export let data
</script>

<MetaTags
    title="Sponsor a Jamaican Deaf Student"
    description="Support the mission of Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Your donations help us provide education and support to the Deaf Students community in Jamaica."
    canonical="https://cccd.org.jm/fundraising"
    openGraph={{
        url: 'https://cccd.org.jm/fundraising',
        title: 'Sponsor a Jamaican Deaf Student',
        description: 'Support the mission of Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Your donations help us provide education and support to the Deaf Students community in Jamaica.',
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
        "@type": "DonateAction",
        name: "Sponsor a Jamaican Deaf Student",
        description: "Support the mission of Caribbean Christian Centre for the Deaf (CCCD) Jamaica. Your donations help us provide education and support to the Deaf Students community in Jamaica",
        url: "https://cccd.org.jm/sponsor-a-student",
        recipient: {
            "@type": "NGO",
            name: "Caribbean Christian Centre for the Deaf",
            url: "https://cccd.org.jm"
        }
    }}
/>

<div class="bg-white py-12 sm:py-24">
	<div class="mx-auto w-full px-6 lg:px-8">
		<div class="mt-6 text-lg leading-8 text-black w-full px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col md:flex-row gap-8">
				<div class="md:w-1/3">
					<CldImage
						src="https://res.cloudinary.com/shinkirin/image/upload/v1726536326/cccd/cccdstudents4.jpg"
						alt="Two CCCD Deaf Students standing in front of the campus"
						width="400"
						height="400"
						class="rounded-lg shadow-lg w-full h-auto shadow-blue-900"
					/>
				</div>
				<div class="md:w-2/3 bg-gold-100 p-4 rounded-lg border-2 border-red-900">
					<h2 class="sm:mb-8 mb-4 text-2xl font-bold tracking-tight text-red-900 sm:text-3xl sm:text-center">Sponsor a Jamaican Deaf Student</h2>
					<div class="font-bold text-lg">
						<p class="mb-4">
							Student sponsorship with the CCCD is such a rewarding experience. It's just $35 a month to change the life of a Deaf child in our care.
						</p>
						<p class="mb-4">
							When you sponsor a student you will receive letters and updates throughout the year. We encourage all of our sponsors to write back to their student(s), interact, and have a relationship.
						</p>
						<p>
							It is not often that you are able to touch a life in such a tangible way. Sponsoring a child through CCCD will provide education, lodging, and meals for a child in need. Your monthly gift will allow you to invest in their physical well being, and most importantly, their spiritual well being. Each child receives instruction in Bible and will be taught about God's plan of salvation.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-8 text-center">
			<p class="text-lg font-semibold text-red-900 bg-gold-100 inline-block px-4 py-2 rounded-lg border-2 border-red-900 uppercase">
				To sponsor a student, hover or select their photos to click the sponsor button.
			</p>
		</div>
		<ul role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
			{#if data?.Sponsor?.length}
				{#each data.Sponsor.sort(() => 0.5 - Math.random()).slice(0, 9) as student}
				<li class="flex flex-col gap-6 xl:flex-row rounded-lg shadow-lg shadow-blue-900 sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-105 sm:hover:z-10 sm:hover:shadow-red-900 relative group">
					<img class="w-full h-96 aspect-[4/5] xl:w-52 xl:h-auto flex-none rounded-t-lg sm:rounded-l-lg object-cover object-top mx-auto" src="{PUBLIC_DIRECTUS_URL}/assets/{student.studentPhoto}" alt={student.studentName}>
					<div class="flex-auto p-4">
						<h3 class="text-lg font-semibold leading-8 tracking-tight text-black uppercase">{student.studentName}</h3>
						<p class="text-lg leading-7 text-black">Birthday: {student.studentBirthday}</p>
						<p class="text-lg leading-7 text-black">Age: {student.Age}</p>
						<p class="text-lg leading-7 text-black">{student.studentCampus}</p>
						<div class="mt-2">
							<div class="relative pt-1">
								<div class="flex mb-2 items-center justify-between">
									<div>
										<span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-red-900">
											Funded
										</span>
									</div>
									<div class="text-right">
										<span class="text-lg font-semibold inline-block text-red-900">
											{student.percentFunded}%
										</span>
									</div>
								</div>
								<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
									<div style="width:{student.percentFunded}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
								</div>
							</div>
						</div>
						<div class="mt-6 text-lg leading-7 text-black font-semibold">
							{student.studentSummary}
						</div>
					</div>
					
					<div class="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 rounded-b-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0">
						<p class="text-center text-black font-bold italic mb-2">"Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done." - Proverbs 19:17</p>
						<a href="/sponsor-form?student={student.studentName}" class="block w-full text-center bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded transition duration-300 uppercase">
							Sponsor {student.studentName}
						</a>
					</div>
					
				</li>
				{/each}
			{:else}
				<p>Loading...</p>
			{/if}
		</ul>
	</div>	
</div>
