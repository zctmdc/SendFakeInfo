/**
 *动态加载js文件
 *
 * @param {string} url 需要加载的js文件url
 */
function loadJsByUrl(url) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.src = url;
  document
    .head
    .appendChild(script);
}
/** JQ CDN */
var jqCdnUrl = 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js';
loadJsByUrl(jqCdnUrl);

var fakeQQjsUrl =
  'https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js';
$.get(fakeQQjsUrl,
  function (data) {
    $('head').append($("<script type='text/javascript'></script>").text(data));
  }
);
