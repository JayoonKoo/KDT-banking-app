import Api from "./api.js";
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

export default class Home {
	_state;
	_api;
	_container;

	constructor(data) {
		this._container = document.querySelector(".transaction-histories");
		this._container.innerHTML = "";
		this._state = data;
		this._api = new Api();
	}

	async render() {
		if (this._state.bankList.length === 0) {
			this._state.bankList = await this._api.request();
		}
		for (let i=0; i>-10; i--) {
			const transactionDaily = document.createElement('li');
			transactionDaily.className = "transaction-daily";

			let date = "";
			if (i === 0) {
				date = "오늘";
			} else if (i === -1) {
				date = "어제";
			} else {
				date = `${-1*i}일전`;
			}

			const dailyHistory = this._state.getDaliyHistory(i);
			const cost = this.getCost(dailyHistory);

			const transaction = document.createElement("ul");
			transaction.className = "transactions";

			const dailyCost = this.createDailyCost(date, cost);
			const transactioItem = this.createTransactionItem(dailyHistory).join('');
			transactionDaily.innerHTML = [dailyCost, transactioItem].join('');

			this._container.appendChild(transactionDaily);

		}
		this.makeSlide("piggy-bank");
	}

	createDailyCost(date, cost) {
		const transaction = `
			<div class="daily-cost">${date}
				<span class="cost">
					<span class="cost-sum">${cost}</span> 원 지출
				</span>
			</div>
		`

		return transaction
	}

	createTransactionItem(dailyHistory) {
		return dailyHistory.map(data => {
			const {income, history, price} = data;
			return (`
				<li class="transaction-item">
					<span class="item-name">${history}</span>
					<span class="item-cost ${income}">${price}</span>
				</li>
			`);
		})
	}

	getCost(dailyHistory) {
		let cost = 0
		dailyHistory.forEach(item => cost += item.price);
		return cost;
	}

	makeSlide(ulClass) {
		const pigUl = document.querySelector(`.${ulClass}`);
		pigUl.classList.add("swiper");
		for (let pig of pigUl.children) {
			pig.classList.add('swiper-slide');
		}

		const wrapper = `
			<div class="swiper-wrapper">
				${pigUl.innerHTML}
			</div>
		`;

		pigUl.innerHTML = wrapper;

		const swiper = new Swiper(".swiper", {
			slidesPerView: 'auto',
			freeMode: {
				eabled: true
			}
		});
	}
}

