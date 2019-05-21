/**
 * 判断对象是否是DOM元素
 *
 * @param {*} target - 要判断的对象
 * @return {boolean}
 */
function isDOM(target) {
  if (!target) {
    return false;
  }
  if (typeof HTMLElement === "object") {
    return target instanceof HTMLElement;
  } else {
    return (
      typeof target === "object" &&
      target.nodeType === 1 &&
      typeof target.nodeName === "string"
    );
  }
}

export { isDOM };
