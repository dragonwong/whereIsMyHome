const ua = navigator.userAgent;
const isWechat = ua.toLowerCase().indexOf("micromessenger") !== -1;
const isAliPay = ua.toLowerCase().indexOf("alipay") !== -1;
const isIOS = ua.indexOf('(iPhone') != -1 || ua.indexOf('(iPad') != -1 || ua.indexOf('(iPod') != -1;
const isAndroid = (function() {
  let isAndroid = ua.indexOf('Android') != -1 && ua.indexOf('Linux') != -1;
  // 傻逼魅族："Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.108 Safari/537.36 MZBrowser/7.9.7"
  if (ua.indexOf('MZBrowser') !== -1) {
    isAndroid = true;
  }
  return isAndroid;
})();

const isPC = !isWechat && !isAliPay && !isIOS && !isAndroid;

const platform = {
  isWechat,
  isAliPay,
  isIOS,
  isAndroid,
  isPC,
}

Object.keys(platform).some(i => {
  if (platform[i]) {
    platform.name = i.slice(2);
    return true;
  }
});

module.exports = platform;
