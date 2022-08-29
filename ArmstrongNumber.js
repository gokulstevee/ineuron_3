// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27

const prompt = require("prompt-sync")();

let number = prompt(
  "Enter any number to check whether it is an armstrong number..."
);

function armstrongNumber(num) {
  let nums = num.toString().split("");

  let sum = 0;

  for (i in nums) {
    sum += Number(nums[i]) ** 3;
  }

  return sum.toString();
}

let armstrongnum = armstrongNumber(number);

console.log(
  armstrongnum === number
    ? "It is an armstrong number"
    : "It is not an armstrong number"
);
