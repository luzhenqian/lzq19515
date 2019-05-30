import { copyToClipboard } from "../../../src/core/js/Copy";

test("copy to clipboard is fail", () => {
  expect(copyToClipboard("这是要复制的话")).toBe(false);
});
