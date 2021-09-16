import Data from "./data.js";
import Api from "./api.js";

class Mangement {
	_api;
	_state;
	_dailyReport;
	_categoryReport;

	constructor(data, dailyReport, categoryReport, categoryClass) {
		this._dailyReport = document.getElementById(dailyReport);
		this._categoryReport = document.getElementById(categoryReport);
		this._categories = document.querySelector(categoryClass);
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
		const {categoryData: {
			oiling,
			health,
			eatout,
			shopping,
			mart,
		}} = this._state;
		const categoryData = [oiling, health, eatout, shopping, mart,];
		const data = {
			labels: [
				'주유비',
				'건강관리비',
				'외식비',
				'장보기',
				'상점',
			],
			datasets: [{
				data: categoryData,
				backgroundColor: [
					'rgb(202, 66, 102)',
					'rgb(253, 184, 56)',
					'rgb(236, 90, 73)',
					'rgb(0, 80, 177)',
					'rgb(164, 195, 84)',
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

	renderCategoryList() {
		const {categoryData: {
			health,
			eatout,
			mart,
			shopping,
			oiling,
		}} = this._state;
		const template = `
		<li class="category-item">
              <div class="category-info">
                <img
                  src="./assets/images/car.svg"
                  alt="주유비"
                  class="category-image"
                />
                <span class="category-name">주유비</span>
              </div>
              <span class="category-cost"><span>${oiling}</span>원</span>
            </li>
						<li class="category-item">
              <div class="category-info">
                <img
                  src="./assets/images/health.svg"
                  alt="건강관리비"
                  class="category-image"
                />
                <span class="category-name">건강관리비</span>
              </div>
              <span class="category-cost"><span>${health}</span>원</span>
            </li>
						<li class="category-item">
              <div class="category-info">
                <img
                  src="./assets/images/eat.svg"
                  alt="주유비"
                  class="category-image"
                />
                <span class="category-name">외식비</span>
              </div>
              <span class="category-cost"><span>${eatout}</span>원</span>
            </li>
						<li class="category-item">
              <div class="category-info">
                <img
                  src="./assets/images/basket.svg"
                  alt="장보기"
                  class="category-image"
                />
                <span class="category-name">장보기</span>
              </div>
              <span class="category-cost"><span>${mart}</span>원</span>
            </li>
						<li class="category-item">
              <div class="category-info">
                <img
                  src="./assets/images/shop.svg"
                  alt="상점"
                  class="category-image"
                />
                <span class="category-name">상점</span>
              </div>
              <span class="category-cost"><span>${shopping}</span>원</span>
            </li>
		`;

		this._categories.innerHTML = template;
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
		this.renderCategoryList();
	}

}

const state = new Data();

const man = new Mangement(state, 'myChart', 'month-chart', '.categories');
man.render()

