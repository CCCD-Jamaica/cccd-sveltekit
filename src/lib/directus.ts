import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

function getDirectusInstance(fetch?: typeof globalThis.fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_DIRECTUS_URL).with(rest(options));
	return directus;
}

export default getDirectusInstance;
