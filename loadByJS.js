/**
 * 加载js代码到网页
 *
 * @param {Text} data js代码文本
 */
function loadScript(data) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.text = data;
  document.head.appendChild(script);
}
/**
 * 获取XMLHttpRequest对象，用于在后台与服务器交换数据   
 *
 * @returns
 */
function getxmlHttpRequestObject() {
  let xmlHttp;
  try {
    xmlHttp = new XMLHttpRequest();
  } catch (e) {
    try {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        alert("您的浏览器不支持AJAX！");
        return false;
      }
    }
  }
  return xmlHttp;
}
/**
 *  ajax get方法
 *
 * @param {String} url 请求地址
 * @param {Function} fnSucceed 成功回调方法
 */
function ajaxget(url, fnSucceed) {
  let xhr = getxmlHttpRequestObject();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    xhr.readyState == 4 && xhr.status == 200 && fnSucceed && fnSucceed(xhr.responseText);
  };
  xhr.send();
}

ajaxget('https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js', loadScript);
