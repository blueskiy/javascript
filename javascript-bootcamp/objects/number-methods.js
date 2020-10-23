// let num = 103.941;

// console.log(num.toFixed(2));

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

let min = 1;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

// Challenge area
// 1 - 5 | true if correct - false if not correct

let makeGuess = function (guess) {
  const min = 1;
  const max = 5;

  return guess === Math.floor(Math.random() * (max - min + 1)) + min;

  // if (guess === Math.floor(Math.random() * (max - min + 1)) + min) {
  //   return 'vacilo';
  // } else {
  //   return 'kkkkk';
  // }
};

console.log(makeGuess(2));
