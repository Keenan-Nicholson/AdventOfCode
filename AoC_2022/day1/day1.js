const { readFileSync, promises: fsPromises } = require("fs");

function readFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);

  return arr;
}

let arr = readFile("./calories.txt");

arrOfSums = [];
let sum = 0;

for (let elem of arr) {
  if (elem != "") {
    sum += parseInt(elem);
  } else {
    arrOfSums.push(sum);
    sum = 0;
  }
}

arrOfSums.sort(function (a, b) {
  return a - b;
});

lastItem = arrOfSums[arrOfSums.length - 1];
secondLast = arrOfSums[arrOfSums.length - 2];
thirdLast = arrOfSums[arrOfSums.length - 3];

console.log(lastItem);
console.log(lastItem + secondLast + thirdLast);
