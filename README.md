# fakeQQInfo  
向群邮件中的同学相册，聚会相册等钓鱼网站发送虚假QQ信息。  

### 救救孩子吧，他们都购买服务器搭建好钓鱼网站了，求求你动动手，帮他们提交点数据吧。   

##打开方式  
###打开钓鱼网网站，按下F12，在控制台（console）中粘贴任意一种代码：  

1.[纯js外挂](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/loadByJS.js)  
```
  function loadScript(data) {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.text = data;
    document.head.appendChild(script);
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
```

2.[外挂jq加载](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/loadByJQ.js)  
3.[fakeInfo.js的代码](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js)  

![测试效果](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/QQ%E6%88%AA%E5%9B%BE20190308061106.png)
