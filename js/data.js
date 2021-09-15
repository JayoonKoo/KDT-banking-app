export default class Data {
	_isModal;
	_bankList;

	constructor() {
		this._isModal = false;
		this._bankList = [];
	}

	set bankList(bankInfo) {
		this._bankList = bankInfo;
	}

	get bankList() {
		return this._bankList;
	}

	getDaliyHistory(ago) {
		const queryDate = this.getQueyrDate(ago);
		return this._bankList.bankList.filter(e=> {
			if (e.date === queryDate) {
				return true;
			}
		})
	}

	getQueyrDate(ago) {
		const now = new Date();
		const [year, month, date] = [now.getFullYear(), now.getMonth(), now.getDate()];

		const agoDate = new Date(year, month, date + ago);
		const [agoYear, agoMonth, agoDay] = [agoDate.getFullYear(), agoDate.getMonth(), agoDate.getDate()]
		const queryDate = `${agoYear}-${String(agoMonth + 1).padStart(2, "0")}-${String(agoDay).padStart(2, "0")}`;

		return queryDate
	}
}
