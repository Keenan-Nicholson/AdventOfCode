import { readFile } from "../utils.js";

const file = readFile("./day1/calories.txt");

const arr = file.split(/\r?\n/);

let arrOfSums: number[] = [];
let sum = 0;

for (let elem of arr) {
  if (elem != "") {
    sum += parseInt(elem);
  } else {
    arrOfSums.push(sum);
    sum = 0;
  }
}

arrOfSums.sort((a, b) => a - b).reverse();

const [first, second, third] = arrOfSums;

console.log({ part1: first, part2: first + second + third });
