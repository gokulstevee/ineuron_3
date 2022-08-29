//1! + 4! + 5!= 1+24+120 = 145

const prompt = require("prompt-sync")();

const givenNumber = prompt(
  "Enter any number to check whether it is a special number..."
);

function factorial(num) {
  let factnum = 1;
  for (let i = 1; i <= num; i++) {
    factnum = factnum * i;
  }
  return factnum;
}

function specialNumber(num) {
  let numberArray = num.toString().split("");
  let sum = 0;

  for (i in numberArray) {
    sum += factorial(Number(numberArray[i]));
  }
  return sum.toString();
}

let specialNum = specialNumber(givenNumber);

console.log(
  specialNum === givenNumber
    ? "It is a special number"
    : "It is not a special number"
);
