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

		this.moveMenu();
	}

	createDailyCost(date, cost) {
		const transaction = `
			<div class="daily-cost">${date}
				<span class="cost">
					<span class="cost-sum">${cost.toLocaleString()}</span> 원 지출
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
					<span class="item-cost ${income}">${price.toLocaleString()}</span>
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

	moveMenu() {
		const upButton = document.querySelector('.wrap-button');
		const transaction = document.querySelector('.transaction');
		const {y, height} = transaction.getBoundingClientRect();
		const upButtonRect = upButton.getBoundingClientRect();

		upButton.onmousedown = function(event) {

			let shiftY = event.clientY - transaction.getBoundingClientRect().top;
		
			transaction.style.position = 'absolute';
			transaction.style.zIndex = 1000;
			document.body.append(transaction);
		
			moveAt(event.pageY);
		
			// 초기 이동을 고려한 좌표 (pageX, pageY)에서
			// 공을 이동합니다.
			function moveAt(pageY) {
				let top = pageY - shiftY;
				if (top < 124) {
					top = 124
				} else if (top > y ) {
					top = y;
				}
				const newHeight = height +  y - top;
				transaction.style.top = `${top}px`;
				transaction.style.height = `${newHeight}px`;
			}
		
			function onMouseMove(event) {
				const {pageY} = event;
				const {y} = upButtonRect;
				moveAt(pageY);
				// if (pageY < 124 || pageY > y + 10) {
				// 	document.removeEventListener('mousemove', onMouseMove);
				// }
			}
		
			// mousemove로 공을 움직입니다.
			document.addEventListener('mousemove', onMouseMove);
		
			// 공을 드롭하고, 불필요한 핸들러를 제거합니다.
			// upButton.onmouseup = function() {
			// 	document.removeEventListener('mousemove', onMouseMove);
			// 	upButton.onmouseup = null;
			// };
			
			document.onmouseup = function() {
				document.removeEventListener('mousemove', onMouseMove);
				document.onmouseup = null;
			}
		};

		
		upButton.ondragstart = function() {
			return false;
		};
	}
}

