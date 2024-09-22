<script>
    import Support from '$components/Support.svelte';
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<MetaTags
    title="Accessibility Statement - Caribbean Christian Centre for the Deaf"
    description="Read our accessibility statement and learn about our commitment to digital inclusivity at Caribbean Christian Centre for the Deaf (CCCD) Jamaica."
    canonical="https://cccd.org.jm/accessibility"
    openGraph={{
        url: 'https://cccd.org.jm/accessibility',
        title: 'CCCD Jamaica Accessibility Statement',
        description: 'Our commitment to digital accessibility for all users, including those with disabilities. Learn about our accessibility standards and practices.',
    }}
    twitter={{
        handle: '@CCCDJamaica',
        site: '@CCCDJamaica',
        cardType: 'summary',
    }}
/>

<JsonLd
    schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Accessibility Statement",
        description: "Caribbean Christian Centre for the Deaf (CCCD) Jamaica's commitment to digital accessibility and inclusivity.",
        url: "https://cccd.org.jm/accessibility",
        inLanguage: "en-US",
        isAccessibleForFree: "True",
        publisher: {
            "@type": "Organization",
            name: "Caribbean Christian Centre for the Deaf",
            logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
            }
        }
    }}
/>

<section class="bg-white py-12">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-red-900">Accessibility Statement</h2>
        
        <div class="max-w-3xl mx-auto">
            <p class="mb-4">Caribbean Christian Centre for the Deaf (CCCD) Jamaica is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Compliance Status</h3>
            <p class="mb-4">CCCD Jamaica will comply to meet WCAG 2.1 AA but strives to meet WCAG 2.1 AAA whenever possible. We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Measures to Support Accessibility</h3>
            <p class="mb-4">CCCD Jamaica takes the following measures to ensure accessibility of our website:</p>
            <ul class="list-disc list-inside mb-4 pl-4">
                <li>Include accessibility as part of our mission statement</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Assign clear accessibility goals and responsibilities</li>
                <li>Employ formal accessibility quality assurance methods</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Feedback</h3>
            <p class="mb-4">We welcome your feedback on the accessibility of the CCCD Jamaica website. Please let us know if you encounter accessibility barriers on our website:</p>
            <ul class="list-disc list-inside mb-4 pl-4">
                <li>Phone: (876) 619-8487</li>
                <li>E-mail: info@cccd.org.jm</li>
                <li>Postal Address: 4 Cassia Park Rd, Kingston, Jamaica</li>
            </ul>
            <p class="mb-4">We try to respond to feedback within 5 business days.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Assessment Approach</h3>
            <p class="mb-4">CCCD Jamaica assessed the accessibility of this website by the following approaches:</p>
            <ul class="list-disc list-inside mb-4 pl-4">
                <li>Self-evaluation</li>
                <li>External evaluation</li>
            </ul>
            <p class="mb-4">We use various tools to help us identify and fix accessibility issues. While these tools are not perfect, they assist us in complying with at least <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aaa" class="text-blue-600 hover:text-blue-800 underline">WCAG 2.1 AA standards</a>, which are dictated by the US Department of Justice for compliance. The tools we use include:</p>
            <ul class="list-disc list-inside mb-4 pl-4">
                <li><a href="https://www.deque.com/axe/" class="text-blue-600 hover:text-blue-800 underline">AxeDevTools</a></li>
                <li><a href="https://wave.webaim.org/" class="text-blue-600 hover:text-blue-800 underline">WAVE Evaluation Tool</a></li>
                <li><a href="https://pa11y.org/" class="text-blue-600 hover:text-blue-800 underline">pa11y</a></li>
                <li><a href="https://webaim.org/resources/contrastchecker/" class="text-blue-600 hover:text-blue-800 underline">WCAG Contrast Checker</a></li>
                <li><a href="https://ainspector.github.io/" class="text-blue-600 hover:text-blue-800 underline">AInspector</a></li>
                <li><a href="https://siteimprove.com/en-us/accessibility/" class="text-blue-600 hover:text-blue-800 underline">Siteimprove Accessibility Checker</a></li>
            </ul>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Contact Us</h3>
            <p class="mb-4">If you have any questions about our accessibility efforts or if you need assistance, please <a href="/contact" class="text-blue-600 hover:text-blue-800 underline">contact us</a>. We're here to help and are committed to making our website accessible to all users.</p>

            <p class="mt-8 text-md font-semibold text-blue-900">Last updated: 2024-07-22</p>
        </div>
    </div>
</section>

<Support />
