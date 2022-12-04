import { readFile } from "../utils.js";

const file = readFile("./day4/assignments.txt");
const arr = file.split("\n");

let cleanArr = [];
for (let elem of arr) {
  let cleanElem = elem.replaceAll("-", ",");

  let arrOfInts = cleanElem.split(",").map((element) => {
    // Make comma separated string of ints and array of integers
    return Number(element);
  });

  cleanArr.push(arrOfInts);
}

let sum1 = 0;
let sum2 = 0;
for (let elem of cleanArr) {
  if (
    (elem[0] <= elem[2] && elem[1] >= elem[3]) ||
    (elem[2] <= elem[0] && elem[3] >= elem[1])
  ) {
    sum1 += 1;
  }

  if (
    (elem[2] <= elem[1] && elem[2] >= elem[0]) ||
    (elem[2] <= elem[1] && elem[3] >= elem[0])
  ) {
    sum2 += 1;
  }
}

console.log({ first: sum1, second: sum2 });
