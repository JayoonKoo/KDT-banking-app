import Data from "./data.js";
import Api from "./api.js";

const labels = [];
for (let i=2; i<=30; i+=2) {
	labels.push(String(i).padStart(2, "0"));
}
const data = {
  labels: labels,
  datasets: [{
		label: "ddd",
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

let myChart = new Chart(document.getElementById('myChart'), config);


const monthData = {
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const monthConfig = {
  type: 'doughnut',
  data: monthData,
};

let monthChart = new Chart(document.getElementById('month-chart'), monthConfig);


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

	renderDailyReport() {
		const {dailyData} = this._state;
	}

	async render() {
		if (this._state.bankList.length === 0) {
			this._state.bankList = await this._api.request();
		}
		const month = new Date().getMonth();
		this._state.calcDailyDataPerMonth(month);

		console.log(this._state.dailyData);
	}

}

const state = new Data();

const man = new Mangement(state);
man.render()


class Report {
	_data;
	_config;

	constructor(data, option) {
		this._config = {
			
		}
	}
}
