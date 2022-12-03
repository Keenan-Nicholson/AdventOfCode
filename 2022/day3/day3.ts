import { readFile } from "../utils.js";

const file = readFile("./day3/ruckSack.txt");
const arr = file.split("\n");

let sum = 0;

let splitArr = [];
for (let elem of arr) {
  let split1 = elem.slice(0, elem.length / 2);
  let split2 = elem.slice(elem.length / 2, elem.length);
  splitArr.push([split1.split(""), split2.split("")]);
}

for (let elem of splitArr) {
  for (let i = 0; i < elem[0].length; i++) {
    if (elem[1].includes(elem[0][i])) {
      let l = elem[0][i].toString();
      if (l.toUpperCase() === l) {
        sum += 26 + l.charCodeAt(0) - 64;
      } else {
        sum += l.charCodeAt(0) - 96;
      }
      break;
    }
  }
}

let groups = [],
  size = 3;

let badgeSum = 0;

while (arr.length > 0) {
  groups.push(arr.splice(0, size));
}

for (let elem of groups) {
  for (let i = 0; i < elem[0].length; i++) {
    if (elem[1].includes(elem[0][i]) && elem[2].includes(elem[0][i])) {
      let l = elem[0][i].toString();
      if (l.toUpperCase() === l) {
        badgeSum += 26 + l.charCodeAt(0) - 64;
      } else {
        badgeSum += l.charCodeAt(0) - 96;
      }
      break;
    }
  }
}

console.log({ Part1: sum, Part2: badgeSum });
