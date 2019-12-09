import { day1 } from "./day1";
import { day2 } from "./day2";
import * as day3 from "./day3";

console.log("**** Advent of Code ****");
console.log("=> day 1");
console.log(day1());

console.log("=> day 2, part 1");
console.log(day2(12, 2));
console.log("=> day 2, part 2");
console.log(day2(41, 12));

console.log("=> day 3");
console.log(day3.day3(day3.puzzleInput.wire1, day3.puzzleInput.wire2));
