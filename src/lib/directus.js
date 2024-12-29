import { createDirectus, rest } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PRIVATE_DIRECTUS_ASSETS_URL, PRIVATE_DIRECTUS_URL } from '$env/static/private';

function getDirectusInstance(fetch) {
	const options = fetch
		? { Sponsors: { fetch }, supports: { fetch } }
		: {};
	const directus = createDirectus(PRIVATE_DIRECTUS_URL, options).with(rest());
	return {
		request: directus.request,
		assets: PRIVATE_DIRECTUS_ASSETS_URL
	};
}

export default getDirectusInstance;
