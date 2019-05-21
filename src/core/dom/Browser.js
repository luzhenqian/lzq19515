/**
 * 判断用户设备和浏览器
 *
 * @return {Object}
 */
const userDevices = (function userDevices() {
  const ua = window.navigator.userAgent;
  const isWeixin = Boolean(ua.match(/MicroMessenger\/([^\s]+)/i)),
    isWebkit = Boolean(ua.match(/WebKit\/([\d.]+)/i)),
    isAndroid = Boolean(ua.match(/(Android)\s+([\d.]+)/i)),
    isIpad = Boolean(ua.match(/(iPad).*OS\s([\d_]+)/i)),
    isIpod = Boolean(ua.match(/(iPod).*OS\s([\d_]+)/i)),
    isIphone = Boolean(
      !isIpod && !isIpad && ua.match(/(iPhone\sOS)\s([\d_]+)/i)
    ),
    isWebos = Boolean(ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/i)),
    isTouchpad = Boolean(!isWebos && ua.match(/TouchPad/i)),
    isKindle = Boolean(ua.match(/Kindle\/([\d.]+)/i)),
    isSilk = Boolean(ua.match(/Silk\/([\d._]+)/i)),
    isBlackberry = Boolean(ua.match(/(BlackBerry).*Version\/([\d.]+)/i)),
    isMqqbrowser = Boolean(ua.match(/MQQBrowser\/([\d.]+)/i)),
    isChrome = Boolean(ua.match(/CriOS\/([\d.]+)/i)),
    isOpera = Boolean(ua.match(/Opera\/([\d.]+)/i)),
    isSafari = Boolean(ua.match(/Safari\/([\d.]+)/i)),
    isFirefox = Boolean(ua.match(/Firefox\/([\d.]+)/i));
  return {
    isWeixin,
    isWebkit,
    isAndroid,
    isIpad,
    isIpod,
    isIphone,
    isWebos,
    isTouchpad,
    isKindle,
    isSilk,
    isBlackberry,
    isMqqbrowser,
    isChrome,
    isOpera,
    isSafari,
    isFirefox
  };
})();

/**
 * 查询用户的设备和浏览器
 *
 * @return {Array}
 */
const findUserDevices = (() =>
  Object.keys(userDevices).filter(item => userDevices[item]))();

export { userDevices, findUserDevices };
