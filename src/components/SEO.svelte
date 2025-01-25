<script>
    import { MetaTags, JsonLd } from 'svelte-meta-tags'
</script>

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
