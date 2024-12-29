/** @type {import('./$types').PageServerLoad} */
import getDirectusInstance from '$lib/directus'
import { readItems } from '@directus/sdk'
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch) 
	const assets = directus.assets
	return {
		support: await directus.request(readItems('support')),
		assets
	}
}
