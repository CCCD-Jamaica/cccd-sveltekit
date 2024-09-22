<script>
    import Support from '$components/Support.svelte';
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
    <title>Privacy Policy - Caribbean Christian Centre for the Deaf</title>
    <meta name="description" content="Read our privacy policy to understand how Caribbean Christian Centre for the Deaf (CCCD) Jamaica collects, uses, and protects your personal information." />
</svelte:head>

<MetaTags
    title="Privacy Policy - Caribbean Christian Centre for the Deaf"
    description="Read our privacy policy to understand how Caribbean Christian Centre for the Deaf (CCCD) Jamaica collects, uses, and protects your personal information."
    canonical="https://cccd.org.jm/privacy-policy"
    openGraph={{
        url: 'https://cccd.org.jm/privacy-policy',
        title: 'CCCD Jamaica Privacy Policy',
        description: 'Our commitment to protecting your privacy and personal information. Learn about our data collection and usage practices.',
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
        name: "Privacy Policy",
        description: "Privacy policy for Caribbean Christian Centre for the Deaf (CCCD) Jamaica website.",
        url: "https://cccd.org.jm/privacy-policy",
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
        <h2 class="text-3xl font-bold mb-8 text-center text-red-900">Privacy Policy</h2>
        
        <div class="max-w-3xl mx-auto">
            <p class="mb-4">At Caribbean Christian Centre for the Deaf (CCCD) Jamaica, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Information We Collect</h3>
            <p class="mb-4">We may collect personal information such as your name, email address, and phone number when you contact us through our website, make a donation, or sign up for our newsletter.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">How We Use Your Information</h3>
            <ul class="list-disc list-inside mb-4 pl-4">
                <li>To respond to your inquiries and provide you with information about our services</li>
                <li>To process donations and send you receipts</li>
                <li>To send you updates about our work and upcoming events (if you've opted in)</li>
                <li>To improve our website and services</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Data Protection</h3>
            <p class="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Third-Party Services</h3>
            <p class="mb-4">We use Mailgun for email communications and may use other third-party services for donation processing. These services have their own privacy policies, and we encourage you to review them.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Your Rights</h3>
            <p class="mb-4">You have the right to access, correct, or delete your personal information. If you would like to exercise these rights or have any questions about our privacy practices, please contact us at info@cccd.org.jm.</p>

            <h3 class="text-xl font-semibold mb-2 text-red-900">Changes to This Policy</h3>
            <p class="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

            <p class="mt-8 text-md font-semibold text-blue-900">Last updated: 2024-07-22.</p>
        </div>
    </div>
</section>

<Support />
