# SendFakeInfo
向钓鱼邮件中的同学相册，聚会相册等各类钓鱼网站发送虚假QQ信息。  

### 救救孩子吧，他们都购买服务器搭建好钓鱼网站了，求求你动动手，帮他们提交点数据吧。   
经测试，大部分钓鱼网站在短时间收集到同IP打量数据就会短时间屏蔽你的IP,网站无法打开
## 使用方式  
### 打开钓鱼网网站，按下F12，在控制台（console）中粘贴任意一种代码：  

1.[js外挂](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/loadByJS.js)  
```
  function loadScript(data) {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.text = data;
    document.head.appendChild(script);
  }
  function ajaxget(url, fnSucceed) {   
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      xhr.readyState == 4 && xhr.status == 200 && fnSucceed && fnSucceed(xhr.responseText);
    };
    xhr.send();
  }
  ajaxget('https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js', loadScript);
```

2.[jq外挂](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/loadByJQ.js)  
```
  $.get('https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js', function (data) {
    $('head').append($("<script type='text/javascript'></script>").text(data));
  });
```

3.[fakeInfo.js](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js)中的代码  

### 挂机等待数据提交，去干点别的吧  

## 测试效果  
![测试效果](https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/QQ%E6%88%AA%E5%9B%BE20190308061106.png)  

