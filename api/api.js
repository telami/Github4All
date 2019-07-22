import {
	http
} from '@/utils/index.js'

/**
 * Get repositories
 */
export function getRepositories(language, since) {
	console.log(language + since)
	let data = {
		language: language === undefined ? '' : language,
		since: since === undefined ? '' : since,
	}
	console.log(data)
	return http.get('/repositories', data).then(res => res.data)
}

/**
 *
 */
export function getLanguages() {
	return http.get('/languages').then(res => res.data)
}
