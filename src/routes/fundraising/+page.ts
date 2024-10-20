import { dev } from '$app/environment'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true

/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus'
import { readItems } from '@directus/sdk'

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch)
	const Sponsor = await directus.request(readItems('Sponsor'))

	return {
		Sponsor
	}
}
