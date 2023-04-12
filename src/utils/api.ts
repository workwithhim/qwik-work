// import { server$ } from '@builder.io/qwik-city';
// import { isBrowser } from '@builder.io/qwik/build';
import { ENV_VARIABLES } from '~/env';

const FOURKITES_Tracking_URL = 'https://tracking-api.fourkites.com/api/v1/tracking';

export const onGetSamsara = async (requestURL: string) => {
	const options = { method: 'GET', headers: createSamsaraHeaders() };
	try {
		const response = await fetch(requestURL, options);
		const res = await response.json();
		return res.data;
	} catch (error) {
		console.log("Error occurs:", error);
		return undefined;
	}
};
export const onGetFourkitesTracking = async (page: number) => {
	const options = { method: 'GET', headers: createFourkitesHeaders() };
	try {
		const response = await fetch(`${FOURKITES_Tracking_URL}?page=${page}`, options);
		const res = await response.json();
		return {
			data: res.loads,
			pagination: res.pagination
		};
	} catch (error) {
		console.log("Error occurs:", error);
		return undefined;
	}
};

const createSamsaraHeaders = () => {
	let headers: Record<string, string> = { 'Content-Type': 'application/json' };
	headers = { ...headers, Authorization: `Bearer ${ENV_VARIABLES.VITE_SAMSARA_API_KEY}` };
	return headers;
};

const createFourkitesHeaders = () => {
	let headers: Record<string, string> = { 'Content-Type': 'application/json' };
	headers = { ...headers, Authorization: `Basic ${ENV_VARIABLES.VITE_FOURKITES_API_KEY}` };
	return headers;
};

// const executeOnTheServer = server$(async (requestURL, options) => executeRequest(requestURL, options));

// const executeRequest = async (requestURL: string, options: any) => {
// 	const httpResponse = await fetch(requestURL, options);
// 	const { data } = await httpResponse.json();
// 	return data;
// };