function getArrayParams(...arr) {
  let min = arr[0], max = arr[0], sum = 0, avg = 0;

  for (let element of arr) {
      if(element > max) max = element;
      if(element < min) min = element;
      sum += element;
  }

  avg = sum / arr.length;
  avg = Math.round(avg * 100) / 100

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  
  for (let element of arr) {
    sum += element;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0], max = arr[0];

  if(arr.length < 1) return 0;

  for (let element of arr) {
    if(element > max) max = element;
    if(element < min) min = element;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, sumOddElement = 0;

  if(arr.length < 1) return 0;

  for (let element of arr) {
    if(element % 2 == 0) sumEvenElement += element;
    else sumOddElement += element;
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0, countEvenElement = 0;

  if(arr.length < 1) return 0;

  for (let element of arr) {
    if(element % 2 == 0) {
      sumEvenElement += element;
      countEvenElement++;
    }

  }

  return sumEvenElement / countEvenElement;

}

function makeWork (arrOfArr, func) {

}