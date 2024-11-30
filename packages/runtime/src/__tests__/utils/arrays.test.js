import { withoutNulls } from "../../utils/arrays";
import { expect, expect, test } from "vitest";

test("withoutNulls", () => {
  expect(withoutNulls([1, null, undefined, 2])).toEqual([1, 2]);
});
