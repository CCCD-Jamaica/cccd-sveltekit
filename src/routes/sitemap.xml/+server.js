import { PUBLIC_DOMAIN } from '$env/static/public';

export async function GET() {
    const pages = [
        "",
        "about",
        "contact",
        "accessibility",
        "privacy-policy",
        "get-involved",
        "fundraising",
        "resources",
        "education",
        "stories"
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((page) => `
    <url>
        <loc>${PUBLIC_DOMAIN}/${page}</loc>
        <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
        <priority>${page === "" ? "1.0" : "0.7"}</priority>
    </url>
    `).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
        'Content-Type': 'application/xml'
        }
    });
    }
