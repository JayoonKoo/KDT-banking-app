export default class Data {
	_isModal;
	_bankList;
	static _labels;
	_dailyData;
	_categoryData;

	constructor() {
		this._isModal = false;
		this._bankList = [];
		Data._labels = [];
		for (let i=2; i<=30; i+=2) {
			Data._labels.push(String(i).padStart(2, "0"));
		}
		this._dailyData = [];
		this._categoryData = [];
	}


	getDaliyHistory(ago, now=new Date()) {
		const queryDate = this.getQueyrDate(ago, now);
		return this._bankList.bankList.filter(e=> {
			if (e.date === queryDate) {
				return true;
			}
		})
	}

	getQueyrDate(ago, now) {
		const [year, month, date] = [now.getFullYear(), now.getMonth(), now.getDate()];

		const agoDate = new Date(year, month, date + ago);
		const [agoYear, agoMonth, agoDay] = [agoDate.getFullYear(), agoDate.getMonth(), agoDate.getDate()]
		const queryDate = `${agoYear}-${String(agoMonth + 1).padStart(2, "0")}-${String(agoDay).padStart(2, "0")}`;

		return queryDate
	}

	calcDailyDataPerMonth(month) {
		const now = new Date(2021, month);
		const lastDay = new Date(2021, month + 1, 0).getDate();
		
		this._dailyData = Data._labels.map(day => {
			day = Number(day);
			if (day === 30 && lastDay === 31) {
				return (
					this.getDaliyHistory(day+1, now).reduce((cost, item) => cost + item.price , 0) + 
					this.getDaliyHistory(day, now).reduce((cost, item) => cost + item.price , 0) + 
					this.getDaliyHistory(day-1, now).reduce((cost, item) => cost + item.price, 0)
				);
			} else {
				return (
					this.getDaliyHistory(day, now).reduce((cost, item) => cost + item.price , 0) + 
					this.getDaliyHistory(day-1, now).reduce((cost, item) => cost + item.price, 0)
					)
			}
		});
	}

	calcCategoryDataPerMonth(month) {
		const dateMonth = `2021-${String(month+1).padStart(2, "0")}`;

		const monthBank = this._bankList.bankList.filter(item => {
			const compare = item.date.split('-')
			compare.pop();
			return compare.join('-') === dateMonth;
		})

		this._categoryData = monthBank.reduce((data, item) => {
			if (!data[item.classify]) {
				data[item.classify] = item.price;
			} else {
				data[item.classify] += item.price;
			}
			return data;
		}, {})

		console.log(this._categoryData);
	}

	get categoryData() {
		return this._categoryData;
	}

	static get labels() {
		return Data._labels;
	}

	set bankList(bankInfo) {
		this._bankList = bankInfo;
	}

	get bankList() {
		return this._bankList;
	}

	get dailyData() {
		return this._dailyData;
	}
}
