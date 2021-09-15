import Data from "./data.js";
import Api from "./api.js";

class Mangement {
	_api;
	_state;
	_dailyReport;
	_categoryReport;

	constructor(data, dailyReport, categoryReport) {
		this._dailyReport = document.getElementById(dailyReport);
		this._categoryReport = document.getElementById(categoryReport);
		this._state = data;
		this._api = new Api();
	}

	renderReport() {
		const {dailyData} = this._state;
		const data = {
			labels: Data.labels,
			datasets: [{
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: dailyData,
			}]
		}
		const config = {
			type: 'line',
			data: data,
			options: {}
		}
		new Chart(this._dailyReport, config);
	}

	renderCategory() {
		const {cate} = this._state;
		const data = {
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)'
				],
				hoverOffset: 4
			}]
		}
		const config =  {
			type: 'doughnut',
			data: data
		}
		new Chart(this._categoryReport, config);
	}


	async render() {
		if (this._state.bankList.length === 0) {
			this._state.bankList = await this._api.request();
		}
		const month = new Date().getMonth();
		this._state.calcDailyDataPerMonth(month);
		this._state.calcCategoryDataPerMonth(month);
		this.renderReport();
		this.renderCategory();
	}

}

const state = new Data();

const man = new Mangement(state, 'myChart', 'month-chart');
man.render()

