import { isDOM } from "./IsDOM";

/**
 * 销毁元素
 *
 * @param {Element} el - 要销毁的元素
 * @return {boolean} 是否销毁成功
 */
function destroyElement(el) {
  let _isDestroy = false;
  if (isDOM(el)) {
    const rel = document.body.removeChild(el);
    _isDestroy = isDOM(rel);
  } else {
    console.warn("传入的不是元素");
  }
  return _isDestroy;
}

export { destroyElement };
