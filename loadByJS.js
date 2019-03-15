/**
 *
 *  加载js代码到网页
 * @param {Text} data js代码文本
 */
function loadScript(data) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.text = data;
  document.head.appendChild(script);
}

/**
 *  ajax get方法
 *
 * @param {String} url 请求地址
 * @param {Function} fnSucceed 成功回调方法
 */
function ajaxget(url, fnSucceed) {
  // XMLHttpRequest对象用于在后台与服务器交换数据   
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    xhr.readyState == 4 && xhr.status == 200 && fnSucceed && fnSucceed(xhr.responseText);
  };
  xhr.send();
}

ajaxget('https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js', loadScript);
