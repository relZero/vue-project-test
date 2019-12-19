const _userAgent = navigator.userAgent
const platform = {
  isWeiXin: /MicroMessenger/i.test(_userAgent),
  isMobile: /iphone|ipod|ipad|ipad|Android|nokia|blackberry|webos|webos|webmate|bada|lg|ucweb/i.test(
    _userAgent
  ),
  isIos: /iPhone|iPad|iPod|iOS/i.test(_userAgent),
  isIphone: /iPhone/i.test(_userAgent),
  isXX: /xxAssistant/i.test(_userAgent),
  isXXipa:
    /xxipa/gi.test(_userAgent) && /(iPhone|iPod|iPad|ios)/gi.test(_userAgent),
  isSafari:
    /safari/gi.test(_userAgent) &&
    !/(crios|chrome|fxios|qqbrowser|sogou|baidu|ucbrowser|qhbrowser|opera|micromessenger|weibo)/gi.test(
      _userAgent
    )
}

export default function (equipmentName) {
  if (equipmentName === 'weixin') {
    return platform.isWeiXin
  }
  if (equipmentName === 'mobile') {
    return platform.isMobile
  }
  if (equipmentName === 'ios') {
    return platform.isIos
  }
  if (equipmentName === 'iphone') {
    return platform.isIphone
  }
  if (equipmentName === 'xx') {
    return platform.isXX
  }
  if (equipmentName === 'xxipa') {
    return platform.isXXipa
  }
  if (equipmentName === 'safari') {
    return platform.isSafari
  }
}
