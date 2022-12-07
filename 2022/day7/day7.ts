import { readFile } from "../utils.js";

const file = readFile("./day7/file_system.txt");
const fileSystem = file.split("\n");

let sum = 0;
let depth = 1;
for (let elem of fileSystem) {
  if (
    elem[2] + elem[3] == "cd" &&
    elem != "$ cd .." &&
    elem != "$ cd dpllhlcv" &&
    elem != "$ cd /"
  ) {
    depth += 1;
  }

  if (elem == "$ cd ..") {
    depth -= 1;
  }

  if (!isNaN(parseInt(elem[0]))) {
    if (parseInt(elem.split(" ")[0]) <= 100000) {
      sum += depth * parseInt(elem.split(" ")[0]);
    }
  }
}

console.log(sum);
