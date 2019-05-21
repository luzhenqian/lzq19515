/**
 * 生成随机字符串
 *
 * @param {number|string} len - 字符串长度
 * @return {string} 随机字符串
 */
function genRandomString(len) {
  if (typeof parseInt(len) !== "number") {
    console.error("传入参数不能转换成number.");
    return "";
  }
  const _text = "abcdefghijklmnopqrstuvwxyz0123456789";
  let _resultString = "";
  for (let i = 0; i < len; i++) {
    _resultString += _text.charAt(Math.random() * _text.length || 0);
  }
  return _resultString;
}

export { genRandomString };
