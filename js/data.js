export default class Data {
	_bankList;

	constructor() {
		this._bankList = [];
	}

	set bankList(bankInfo) {
		this._bankList = bankInfo;
	}

	get bankList() {
		return this._bankList;
	}
}
