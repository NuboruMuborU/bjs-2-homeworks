"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	if (a == 0) {
		return "Ошибка а=0 недопустимое значение!";
	}
	let D = b * b - 4 * a * c;
	let x1, x2;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	} else if (D == 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S = amount - contribution;
	let rate = percent / 100 / 12;
	let monthPay = S * (rate + (rate / (((1 + rate) ** countMonths) - 1)));
	let result = (monthPay * countMonths);
	if (result != 0) {
		return Number(result.toFixed(2));
	} else {
		return result;
	}
}