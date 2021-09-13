const BANKING_URL = 'https://syoon0624.github.io/json/test.json';

export default class Api {
	_url;

	constructor() {
		this._url = BANKING_URL;
	}

	async request() {
		const response = await fetch(this._url);
		return await response.json();
	}
}
