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

<!-- Accessibility Checks
	1. WCAG ContrastChecker: WCAG 2.0 AA & AAA Compliance on 2024-12-29.
	2. Siteimprove: WCAG 2.0 AA and WCAG 2.0 AAA Compliance on 2024-12-29.
	3. axe DevTools: WCAG 2.1 AA Compliance on 2024-12-29.
	5. Alnspector: WCAG 2.2 AA Compliance on 2024-12-29.
	6. Wave Evaluation Tool: WCAG 2.2 AA and WCAG 2.2 AAA Compliance on 2024-12-29.
-->

<section class="bg-white py-12">
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-8 text-center text-red-900">Accessibility Statement</h1>
        
        <div class="max-w-3xl mx-auto">
            <p class="mb-4">Caribbean Christian Centre for the Deaf (CCCD) Jamaica is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>

            <h2 class="text-xl font-semibold mb-2 text-red-900">Compliance Status</h2>
            <p class="mb-4">CCCD Jamaica strives to meet WCAG 2.0 AA/AAA compliance up to WCAG 2.2 AA/AAA whenever possible. We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Measures to Support Accessibility</h3>
            <p class="mb-4">CCCD Jamaica takes the following measures to ensure accessibility of our website:</p>
            <ul role="list" aria-label="Measures to Support Accessibility" class="list-disc list-inside mb-4 pl-4">
                <li>Include accessibility as part of our mission statement</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Assign clear accessibility goals and responsibilities</li>
                <li>Employ formal accessibility quality assurance methods</li>
            </ul>

            <h2 class="text-xl font-semibold mb-2 text-red-900">Feedback</h2>
            <p class="mb-4">We welcome your feedback on the accessibility of the CCCD Jamaica website. Please let us know if you encounter accessibility barriers on our website:</p>
            <ul role="list" aria-label="Contact Information" class="list-disc list-inside mb-4 pl-4">
                <li>Phone: (876) 619-8487</li>
                <li>E-mail: info@cccd.org.jm</li>
                <li>Postal Address: 4 Cassia Park Rd, Kingston, Jamaica</li>
            </ul>
            <p class="mb-4">We try to respond to feedback within 5 business days.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Assessment Approach</h3>
            <p class="mb-4">CCCD Jamaica assessed the accessibility of this website by the following approaches:</p>
            <ul role="list" aria-label="Assessment Approaches" class="list-disc list-inside mb-4 pl-4">
                <li>Self-evaluation</li>
                <li>External evaluation</li>
            </ul>
            <p class="mb-4">We use various tools to help us identify and fix accessibility issues. While these tools are not perfect, they assist us in complying with at least <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&levels=aaa" class="text-blue-800 font-bold hover:text-red-800 underline">WCAG 2.0 AA standards</a>, which are dictated by the US Department of Justice for compliance. The tools we use include:</p>
            <ul role="list" aria-label="Accessibility Tools" class="list-disc font-extrabold list-inside mb-4 pl-4">
                <li><a href="https://www.deque.com/axe/" class="pt-4 pb-4 text-blue-800 hover:text-red-800 underline">AxeDevTools</a></li>
                <li><a href="https://wave.webaim.org/" class="pt-4 pb-4 text-blue-800 hover:text-red-800 underline">WAVE Evaluation Tool</a></li>
                <li><a href="https://pa11y.org/" class="pt-4 pb-4 text-blue-800 hover:text-red-800 underline">pa11y</a></li>
                <li><a href="https://webaim.org/resources/contrastchecker/" class="pt-4 pb-4 text-blue-800 hover:text-red-800 underline">WCAG Contrast Checker</a></li>
                <li><a href="https://ainspector.github.io/" class="pt-4 pb-4 text-blue-800 hover:text-red-800 underline">AInspector</a></li>
                <li><a href="https://siteimprove.com/en-us/accessibility/" class="pt-4 pb-4 text-blue-800 hover:text-red-800 underline">Siteimprove Accessibility Checker</a></li>
            </ul>
            <h4 class="text-lg font-semibold mb-2 text-red-900">Accessibility Compliance Workflow</h4>
            <p class="mb-4">We use the following workflow to ensure accessibility compliance which helps us meet the minimum WCAG 2.0 AA/AAA standards:</p>
            <ol role="list" aria-label="Accessibility Compliance Workflow" class="list-decimal list-inside mb-4 pl-4">
                <li>WAVE Evaluation Tool to start the process. This helps with find features, structural, and aria issues. It meets the minimum WCAG 2.2 AA/AAA standards.</li>
                <li>WCAG Contrast Checker helps with color contrast issues. It meets the minimum WCAG 2.0 AA/AAA standards.</li>
                <li>AInspector to ensure the website meets the minimum WCAG 2.2 AA standards. This helps with the logic and structure of the website, particularly with h1, h2, h3, and h4 tags.</li>
                <li>Siteimprove to ensure the website meets the minimum WCAG 2.0 AA/AAA standards. If we get past Siteimprove, the website will meet WCAG 2.0 AA/AAA standards.</li>
                <li>AxeDevTools is the last tool, the end of our accessibility compliance workflow. It helps with the logic and structure of the website, particularly with h1, h2, h3, and h4 tags.</li>
                <li>We do use Pa11y, time permitting.</li>
            </ol>
            <p class="mb-4">If other accessibility tools are available, we will use them. We are always looking for ways to improve the accessibility of our website.</p>
            <h3 class="text-xl font-semibold mb-2 text-red-900">Homepage Accessibility Issues</h3>
            <p class="mb-4">The homepage has a video component which is not compliant with WCAG 2.0 AA/AAA standards. We are working on a solution to make the video component compliant. The issue is related to the video provider, not the website itself.</p>
            <h3 class="text-xl font-semibold mb-2 text-red-900">Contact Us</h3>
            <p class="mb-4">If you have any questions about our accessibility efforts or if you need assistance, please <a href="/contact" class="text-blue-800 font-bold hover:text-red-800 underline">contact us</a>. We're here to help and are committed to making our website accessible to all users.</p>

            <p class="mt-8 text-md font-semibold text-blue-900">Last updated: 2024-12-29</p>
        </div>
    </div>
</section>

<Support />
