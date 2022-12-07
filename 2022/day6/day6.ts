import { readFile } from "../utils.js";

const file = readFile("./day6/packets.txt");
const packet = file;

function hasRepeats(str: string) {
  return /(.).*\1/.test(str);
}

function startOfPacket() {
  for (let i = 4; i < packet.length; i++) {
    let prevFour;
    prevFour = packet.slice(i - 4, i);
    if (!hasRepeats(prevFour)) {
      return i;
    }
  }
}

function startOfMessage() {
  for (let i = 14; i < packet.length; i++) {
    let prevFour;
    prevFour = packet.slice(i - 14, i);
    if (!hasRepeats(prevFour)) {
      return i;
    }
  }
}

console.log({ first: startOfPacket(), second: startOfMessage() });
