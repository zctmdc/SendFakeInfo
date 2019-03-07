function loadJs(data) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.text = data;
  document
    .head
    .appendChild(script);
}

function ajaxget(url, fnSucceed) {
  // XMLHttpRequest对象用于在后台与服务器交换数据   
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      fnSucceed && fnSucceed(xhr.responseText);
    }
  };
  xhr.send();
}
var fakeQQjsUrl =
  'https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js';

ajaxget(fakeQQjsUrl, loadJs);
