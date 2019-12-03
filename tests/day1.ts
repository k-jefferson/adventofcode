const assert = require("assert");

import { getFuelForAModule } from "../src/day1";

describe("day 1", () => {
    it("should calculate the right amount of fuel needed for a module", () => {
        assert.strictEqual(getFuelForAModule(12), 2);
        assert.strictEqual(getFuelForAModule(14), 2);
        assert.strictEqual(getFuelForAModule(1969), 654);
        assert.strictEqual(getFuelForAModule(100756), 33583);
    });
});
