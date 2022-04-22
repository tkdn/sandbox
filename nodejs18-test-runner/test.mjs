import test from "node:test";
import assert from "node:assert";

test("description", (t) => {
  t.test("test 1", () => {
    assert.strictEqual(1, 1);
  });

  t.test("test 2", () => {
    assert.strictEqual(1, 2);
  });
});
