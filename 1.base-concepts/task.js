"use strict";
function solveEquation(a, b, c) {
  let arr = [];
    if(a==0){
      return "Ошибка а=0 недопустимое значение!";
  }
  let D = b*b-4*a*c;
  let x1, x2;
    if(D>0) {
     x1 = (-b + Math.sqrt(D) )/(2*a);
     x2 = (-b - Math.sqrt(D) )/(2*a);
     arr.push(x1);
     arr.push(x2);
     return arr;
  } 
    else if(D==0) {
     x1=-b/(2*a);
     arr.push(x1);
      return arr;
  } 
    else if(D<0) {
      return arr;
  }

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent * 100 / 10000;
  let S = amount - contribution;
  let rate = interestRate * 1 / 12;
  let monthPay = S * (rate + (rate / (((1 + rate)**countMonths) - 1)));
  let result = (monthPay * 12).toFixed(2);
  return result;
} 