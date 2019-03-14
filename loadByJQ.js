/**
 *
 *动态加载js文件
 *
 * @param {string} url 需要加载的js文件url
 * @param {Function} callback 加载完回调函数
 */
function loadScript(url, callback) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  if (script.readyState) { // IE
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    }
  } else { // 其他浏览器
    script.onload = function () {
      callback();
    }
  }
  script.src = url;
  document.head.appendChild(script);
}

/** JQ CDN */
var jqCdnUrl = 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js';

loadScript(jqCdnUrl, function () {
  let fakeQQjsUrl =
    'https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js';
  $.get(fakeQQjsUrl,
    function (data) {
      $('head').append($("<script type='text/javascript'></script>").text(data));
    }
  );
});
