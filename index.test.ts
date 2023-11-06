import { expect, test } from "bun:test";
import { sum } from ".";

test("test function sum", () => {
  expect(sum(2, 2)).toBe(4);
});