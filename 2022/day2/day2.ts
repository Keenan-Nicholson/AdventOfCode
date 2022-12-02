import { readFile } from "../utils.js";

const file = readFile("./day2/rps.txt");
const arr = file.split("\n");

const myWin = ["C X", "A Y", "B Z"];
const tie = ["A X", "B Y", "C Z"];

let myScoreChoice = 0;
let myScoreWins = 0;

for (let elem of arr) {
  if (elem.includes("X")) {
    myScoreChoice += 1;
  }
  if (elem.includes("Y")) {
    myScoreChoice += 2;
  }
  if (elem.includes("Z")) {
    myScoreChoice += 3;
  }

  if (myWin.includes(elem)) {
    myScoreWins += 6;
  }
  if (tie.includes(elem)) {
    myScoreWins += 3;
  }
}

let part2Score = 0;

for (let elem of arr) {
  if (elem.includes("X") && elem.includes("A")) {
    part2Score += 3;
  }
  if (elem.includes("X") && elem.includes("B")) {
    part2Score += 1;
  }
  if (elem.includes("X") && elem.includes("C")) {
    part2Score += 2;
  }
  if (elem.includes("Y") && elem.includes("A")) {
    part2Score += 4;
  }
  if (elem.includes("Y") && elem.includes("B")) {
    part2Score += 5;
  }
  if (elem.includes("Y") && elem.includes("C")) {
    part2Score += 6;
  }
  if (elem.includes("Z") && elem.includes("A")) {
    part2Score += 8;
  }
  if (elem.includes("Z") && elem.includes("B")) {
    part2Score += 9;
  }
  if (elem.includes("Z") && elem.includes("C")) {
    part2Score += 7;
  }
}

console.log({ Part1: myScoreChoice + myScoreWins, Part2: part2Score });
