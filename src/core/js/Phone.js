/**
 * 提取手机号和电话号
 * @param {string} 手机号
 * @return {Array|string} 若只提取到1个手机号,返回字符串。若提取到多个,返回数组。提取不到时，返回空字符串。
 */
function extractPhone(text) {
  if (typeof text !== "string") {
    console.error("传入参数错误.");
    return;
  }
  if (!text.match) {
    console.error("传入参数不存在match方法.");
    return;
  }
  const checkRule = /((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}))?/g;
  // const checkRule2 = /^1[34578]\d{9}$/;
  const resultArr = text.match(checkRule),
    len = resultArr.length;
  if (len === 0) {
    return "";
  } else if (len === 1) {
    return resultArr[0];
  } else {
    return resultArr.filter(item => item !== "");
  }
}

export { extractPhone };
