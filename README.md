# KDT Bank App

๐ต ์ง์ถ์ ๋ํ ์ ๋ณด๋ฅผ ๋ฐ์์์ ๋ ์ง ๋ณ ์ง์ถ ๊ธฐ๋ก ๋ฐ ์ฐจํธ๋ฅผ ๋ณด์ฌ์ฃผ๋ ์น ์ดํ๋ฆฌ์ผ์ด์

๋ฐฐํฌ : [https://jayoonkoo.github.io/KDT-banking-app/](https://jayoonkoo.github.io/KDT-banking-app/)

### ์ฌ์ฉ ๊ธฐ์ 

<p align='center'>
    <img src="https://img.shields.io/badge/Javascript-yellow"/>
    <img src="https://img.shields.io/badge/HTML-red?">
    <img src="https://img.shields.io/badge/CSS-blue?">
    <img src="https://img.shields.io/badge/Swiper.js-green">
    <img src="https://img.shields.io/badge/Chart.js-orange">
</p>

<br />

## ์คํ ํ๊ฒฝ ๋ฐ ์คํ

ํ๋ฉด์ ๊ฐ๋จํ๊ฒ ๊พธ๋ฏธ๋ ํ ์ด ํ๋ก์ ํธ์๊ธฐ ๋๋ฌธ์ VSCode์ Live Server ๊ธฐ๋ฅ์ ํ์ํ๋ค.

Vscode์ Live Server ์ต์คํ์์ ์ค์นํ ์ดํ์ index.html ํ์ผ์ ์ด๊ณ 

- `cmd + L cmd + O`
  ๋ฅผ ํ๊ฑฐ๋
- ์ฐํด๋ฆญ ํ `Open With Live Server`๋ฅผ ํด๋ฆญํ๋ฉด ๋๋ค.

๋ชจ๋ฐ์ผ ํ๋ฉด์ ๊ธฐ์ค์ผ๋ก ์ ์ํ์ผ๋ก ๊ตฌ์ฑํ์๊ธฐ ๋๋ฌธ์ ํ๋ฉด์ ๋๊ฒ ํด๋ ์ข์ผ๋ Width๋ฅผ 400px๋ก ๋ง์ถ๊ธฐ๋ฅผ ๊ถ์ฅํ๋ค.

<br />

## ๊ตฌํ

- ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํ๋ค.
- ์๋ฒ์์ ์ง์ถ์ ๋ํ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์์ UI๋ฅผ ๊ทธ๋ฆฌ๋ ์ํฉ์ ๋ง๋ค๊ธฐ ์ํด์ [https://syoon0624.github.io/json/test.json](https://syoon0624.github.io/json/test.json) ์ ๋ฐ์ดํฐ๋ฅผ fetch๋ฅผ ์ด์ฉํ์ฌ ๋ฐ์ ์๋ค.


```json
//https://syoon0624.github.io/json/test.json ๋ฐ์ดํฐ ์์
{
  "bankList": [
    {
      "date": "2021-09-01",
      "income": "in",
      "classify": "",
      "history": "์ฉ๋",
      "price": 20000
    },
    {
      "date": "2021-09-01",
      "income": "out",
      "classify": "health",
      "history": "์๋ฌ๋",
      "price": 10000
    }
  ]
}
```

- ์ ๊ธํต์ ์์ผ๋ก ์ค์์ดํ ํ๋ UI๋ฅผ ๊ตฌํํ๊ธฐ ์ํด์ Swiper.js๋ฅผ ์ฌ์ฉํ๋ค.
- ์ฐจํธ๋ฅผ ๊ทธ๋ฆฌ๊ธฐ ์ํด์ Chart.js๋ฅผ ์ฌ์ฉํ์๋ค.
- reset.css๋ฅผ ์ฌ์ฉํ์๋ค.
- JS๋ ํ์ด์ง ๋ณ๋ก ํด๋์ค๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํ์๊ณ , ๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ Data ํด๋์ค๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด์ ๊ธฐ๋ฅ์ ๊ตฌํํ์๋ค.
- CSS๋ ํ์ด์ง ๋ณ๋ก ์คํ์ผ์ ๊ตฌ์ฑํ๊ณ  ๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ common.css๋ฅผ ์ฌ์ฉํ์ฌ ๊ณตํต ์์๋ฅผ ๋ฌถ์๋ค.
- git flow๋ฅผ ์ฌ์ฉํ์ฌ ๊ธฐ๋ฅ๋ณ๋ก feature๋ฅผ ๋๋์ด์ develop์ ๋จธ์งํ๋ ๋ฐฉ๋ฒ์ ์ฌ์ฉํ์๋ค.
- gitHub Pages๋ฅผ ์ฌ์ฉํ์ฌ ๋ฐฐํฌํ์๋ค.

<br/>

## ์ฃผ์ ๊ธฐ๋ฅ

### ์ ๊ธํต ์ฌ๋ผ์ด๋

<p align="center"><img src="./README/swiper.gif" width="200"></p>

- swiper.js ์ฌ์ฉํ์ฌ ๊ตฌํ

### Daily ์ง์ถ ํํฉ ๋๋๊ทธ

<p align="center"><img src="./README/drag.gif" width="200"></p>

- DOM mounes ์ด๋ฒคํธ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํ

### Daily ์ง์ถํํฉ ์คํฌ๋กค

<p align="center"><img src="./README/scroll_1.gif" width="200"></p>

- ์กฐํํ ๋ ์ง(ํ์  ๋ ์ง) ๊ธฐ์ค -1 ~ -10 ์ผ ๊น์ง์ ๊ฒฐ๊ณผ๋ฅผ ๋ฆฌ์คํธ๋ก ๋ณด์ฌ์ค.
- Array ๋ฉ์๋๋ฅผ ๊ณจ๊ณ ๋ฃจ ์ฌ์ฉํด ๋ณด๊ธฐ ์ํด์ `forEach`, `map`, `filter`, `reduce` ๋ฅผ ์ ์ ํ ์ฌ์ฉํจ.

### Chart

<p align="center"><img src="./README/chart.gif" width="200"></p>

- ์ง์ถ๊ด๋ฆฌ ์์ด์ฝ์ ์ด์ฉํ์ฌ ์ง์ถ๊ด๋ฆฌ ํ์ด์ง๋ก ์ด๋

<p align="center"><img src="./README/dailyChart.png" width="200"></p>

- Chart.js๋ฅผ ์ด์ฉํ์ฌ ๊ตฌํ
- ๋ฐ์ดํฐ ์ค์์ ๋ฌ ๊ธฐ์ค ๋ฐ์ดํฐ๋ฅผ ๋ชจ์ผ๊ณ  2์ผ ์ฉ ํฉ์ฐํ์ฌ ๊ณ์ฐ.
- Array ๋ฉ์๋๋ฅผ ๊ณจ๊ณ ๋ฃจ ์ฌ์ฉํด ๋ณด๊ธฐ ์ํด์ `forEach`, `map`, `filter`, `reduce` ๋ฅผ ์ ์ ํ ์ฌ์ฉํจ.

<p align="center"><img src="./README/category.png" width="200"></p>

- Chart.js๋ฅผ ์ด์ฉํ์ฌ ๊ธฐ์ค
- ์นดํ๊ณ ๋ฆฌ๋ณ ์ ์ง์ถ์ ๋ณด์ฌ์ค.
