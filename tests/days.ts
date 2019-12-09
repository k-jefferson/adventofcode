const assert = require("assert");

import { getFuelForAModule } from "../src/day1";
import { day2 } from "../src/day2";
import * as day3 from "../src/day3";

describe("day 1", () => {
    it("should calculate the right amount of fuel needed for a module", () => {
        assert.strictEqual(getFuelForAModule(12), 2);
        assert.strictEqual(getFuelForAModule(14), 2);
        assert.strictEqual(getFuelForAModule(1969), 654);
        assert.strictEqual(getFuelForAModule(100756), 33583);
    });
});

describe("day 2", () => {
    it("should calculate the first step answer", () => {
        assert.strictEqual(day2(12, 2), 6327510);
    });
    it("should calculate the second step answer", () => {
        assert.strictEqual(day2(41, 12), 19690720);
    });
});

describe("day3", () => {
    it("should calculate the manhattan distance", () => {
        assert.strictEqual(day3.day3(day3.exampleInputs.wire1, day3.exampleInputs.wire2), 6);
        assert.strictEqual(day3.day3(day3.puzzleInput.wire1, day3.puzzleInput.wire2), 280);
    });
});
