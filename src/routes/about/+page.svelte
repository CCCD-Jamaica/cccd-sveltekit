<script>
	import { CldImage } from 'svelte-cloudinary';
	import Support from '$components/1Support.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Our Mission and Vision</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
				<p class="text-gray-700">
					At CCCD Jamaica, our mission is to Reach, Teach, and Nurture the Deaf community across the island. We strive to provide comprehensive education, vocational training, and spiritual guidance to ensure that every Deaf individual can lead a fulfilling and independent life.
				</p>
				<div class="mt-4 flex flex-col items-center">
					<CldImage
						src="v1726012729/cccd_wordpress/cccd-deaf-graduate-jamaica.webp"
						alt="CCCD Jamaica Deaf Student"
						width="400"
						height="300"
						class="w-full h-auto rounded-lg"
					/>
					<p class="text-sm text-gray-600 mt-2">Our students achieving their goals through education</p>
				</div>
			</div>
			<div>
				<h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
				<p class="text-gray-700">
					Our vision is a Jamaica where the Deaf community is fully integrated, empowered, and able to contribute meaningfully to society. We believe in the potential of every Deaf person and are committed to creating opportunities for growth and development.
				</p>
				<div class="mt-4 flex flex-col items-center">
					<CldImage
						src="v1722901498/cccd_wordpress/cccd-deafstudents.webp"
						alt="CCCD Jamaica Deaf Students"
						width="400"
						height="300"
						class="w-full h-auto rounded-lg"
					/>
					<p class="text-sm text-gray-600 mt-2">Empowering the Deaf community for a brighter future</p>
				</div>
			</div>
		</div>
		<div class="mt-8">
			<blockquote class="text-gray-700 text-center italic border-l-4 border-gray-300 pl-4 py-2">
				Through our dedicated programs and initiatives, we aim to break down barriers and build a more inclusive and supportive environment for the Deaf in Jamaica.
			</blockquote>
		</div>
	</div>
</section>
<section class="bg-blue-50 py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Our Beliefs</h2>
		<div class="flex flex-col md:flex-row items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/christ-image.webp"
					alt="Image of Christ"
					width="400"
					height="600"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3 prose max-w-none">
				<p class="mb-4">We believe:</p>
				<ul class="list-disc pl-6 space-y-4">
					<li>In One God, who has revealed Himself in Scripture through the Old and New Testaments as three Persons; Father, Son and Holy Spirit</li>
					<li>God is Creator and Sustainer of all seen and unseen. God is eternal, unchanging, all-knowing, and good. God is continually at work guiding His creation.</li>
					<li>In God the Father - who loves each of us with unconditional and eternal love.</li>
					<li>In Jesus - the Son of God, Word became flesh. Jesus is our Savior - He came to earth fully God and fully man - He suffered, died, was buried, and rose victorious over sin and death. Through Jesus and His perfect obedience to God, we are offered forgiveness and redemption.</li>
					<li>In the Holy Spirit - sent by the Father and Son to convict and renew. Counselor, teacher, comforter, helper, advocate - uniting us for the glory of God.</li>
					<li>That following Jesus Christ brings new life and we are empowered to live as we were created to as sons and daughters of God, accomplishing all for His glory.</li>
					<li>In the promises of God giving us a hope and future, both now and life everlasting – Where someday every tribe, tongue, and nation will join together to worship God and enjoy Him forever!</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="bg-gray-100 py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Our Board Members</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-lg shadow-md">
				<CldImage
					src="v1234567890/cccd_wordpress/board-member-1.webp"
					alt="Board Member 1"
					width="300"
					height="300"
					class="w-full h-auto rounded-full mb-4"
				/>
				<h3 class="text-xl font-semibold mb-2">John Doe</h3>
				<p class="text-gray-600">Chairman</p>
				<p class="mt-2 text-sm text-gray-700">John has been with CCCD for over 20 years and is passionate about deaf education.</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<CldImage
					src="v1234567890/cccd_wordpress/board-member-2.webp"
					alt="Board Member 2"
					width="300"
					height="300"
					class="w-full h-auto rounded-full mb-4"
				/>
				<h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
				<p class="text-gray-600">Treasurer</p>
				<p class="mt-2 text-sm text-gray-700">Jane brings 15 years of financial expertise to ensure CCCD's sustainable growth.</p>
			</div>
			<div class="bg-white p-6 rounded-lg shadow-md">
				<CldImage
					src="v1234567890/cccd_wordpress/board-member-3.webp"
					alt="Board Member 3"
					width="300"
					height="300"
					class="w-full h-auto rounded-full mb-4"
				/>
				<h3 class="text-xl font-semibold mb-2">Michael Johnson</h3>
				<p class="text-gray-600">Secretary</p>
				<p class="mt-2 text-sm text-gray-700">Michael, a CCCD alumnus, now serves on the board to give back to the community.</p>
			</div>
		</div>
	</div>
</section>
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">History of CCCD</h2>
		
		<div class="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/cccd-founders.webp"
					alt="CCCD Founders"
					width="400"
					height="300"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="text-2xl font-semibold mb-4">Founded in 1958</h3>
				<p class="mb-4">In February of 1957, Reverend Willis Ethridge and his wife, Mildred, left their home in Ontario, Canada. Their mission was to start the Christian Deaf Fellowship Center in Kingston, Jamaica. Upon arrival in Jamaica, they found a greater need than they had imagined, and felt the Lord calling them to open a school. They were soon joined by Paula Montgomery, the first Deaf American missionary.</p>
				<p>Together, the three missionaries were offered a one-year lease of a property in Manchester Parish, Jamaica, where they opened a school with eight students and a staff of three.</p>
			</div>
		</div>

		<div class="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/knockpatrick-campus.webp"
					alt="Knockpatrick Campus"
					width="400"
					height="300"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="text-2xl font-semibold mb-4">The Knockpatrick Campus</h3>
				<p>The school continued to gain momentum, and in September 1962 moved to its present location in Knockpatrick. By 1967 there were 40 students, and today this beautiful campus serves around 70 students.</p>
			</div>
		</div>

		<div class="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/montego-bay-campus.webp"
					alt="Montego Bay Campus"
					width="400"
					height="300"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="text-2xl font-semibold mb-4">The Montego Bay Campus</h3>
				<p>In 1990, a second campus was added in Montego Bay, Jamaica, built on 7.5 acres of generously donated land. This school opened in August 1994 with three children. Today it serves around 40 students in our furthering education program (CADE).</p>
			</div>
		</div>

		<div class="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/kingston-campus.webp"
					alt="Kingston Campus"
					width="400"
					height="300"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="text-2xl font-semibold mb-4">The Kingston Campus</h3>
				<p>In July 1994, the CCCD reopened the old Christian Deaf Fellowship campus in the heart of Kingston as a new CCCD school. Kingston is home to half the population of Jamaica, as well as many deaf who do not have access to the Knockpatrick and MoBay campuses. Today, the Kingston campus serves around 40 students and is home to the Deaf Can! Coffee enterprise.</p>
			</div>
		</div>

		<div class="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/jamaica-deaf-village.webp"
					alt="Jamaica Deaf Village"
					width="400"
					height="300"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="text-2xl font-semibold mb-4">The Jamaica Deaf Village</h3>
				<p class="mb-4">The three school campuses continued to run smoothly, and graduated class after class -- but the Deaf graduating from high school still struggled to find employment. Employers did not have the time or resources to devote to learning to communicate with the Deaf, and did not hire them.</p>
				<p class="mb-4">No job means no money, and no money means that, despite their education and potential, the deaf graduates were unable to provide for their own basic needs. Many turned to desperate means to obtain food, clothing, and shelter.</p>
				<p>And so in June of 1984, the CCCD ministry began development of the 100-acre Jamaica Deaf Village, which would serve as a safe place where Deaf adults and their families could live in community, attend worship, and find meaningful employment.</p>
			</div>
		</div>

		<div class="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/3">
				<CldImage
					src="v1234567890/cccd_wordpress/jdv-factory-church.webp"
					alt="Jamaica Deaf Village Factory and Church"
					width="400"
					height="300"
					class="w-full h-auto rounded-lg shadow-md"
				/>
			</div>
			<div class="w-full md:w-2/3">
				<h3 class="text-2xl font-semibold mb-4">The Factory & Church</h3>
				<p class="mb-4">The Jamaica Deaf Village (JDV) campus continued to grow with the addition of a church, a woodworking factory, apartment complexes for the Deaf, and more -- none of which could have been constructed without the assistance of mission teams.</p>
				<p class="mb-4">Finally, in 2002, after many years of miracles mixed with trying circumstances, the first villagers moved onto campus, and the first steam-bent wooden rocking chair was manufactured in the factory.</p>
				<p>Shortly thereafter, the first church service was held at the village, led by Rev. Gary Williams, who plants Deaf churches within the hearing churches of Kingston. There were nearly 60 Deaf present that Sunday, and ever since, the Deaf have been worshipping, fellowshipping, and growing in Christ Jesus at JDV.</p>
			</div>
		</div>

		<div>
			<h3 class="text-2xl font-semibold mb-4">The Future</h3>
			<p class="mb-4">We have the privilege of knowing, serving, and trusting in a God who loves us. Help us to spread the word of Jesus Christ to the Deaf in Jamaica. You can do this in many ways:</p>
			<ul class="list-disc list-inside mb-4">
				<li>Keep us operating by giving to our General Fund</li>
				<li>Sponsor one of the children on our campuses</li>
				<li>Bring a team to visit and help us continue to build and grow our campuses</li>
				<li>Continue to spread the word of the work we're doing here in Jamaica</li>
			</ul>
			<p>We hope that, with your help, the mission of the CCCD can continue to expand and grow.</p>
			<div class="mt-8 flex flex-col items-center">
				<CldImage
					src="v1234567890/cccd_wordpress/cccd-future-wide.webp"
					alt="CCCD Future Vision"
					width="1200"
					height="400"
					class="w-full max-w-4xl h-auto rounded-lg shadow-md"
				/>
				<p class="mt-2 text-sm text-gray-600 italic">Together, we can build a brighter future for the Deaf community in Jamaica</p>
			</div>
		</div>
	</div>
</section>
<Support />
