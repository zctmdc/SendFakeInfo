/**
 *1.打开钓鱼网网站(测试地址  http://180.215.6.187/f4b6sgz/6cac5s-pc.php)
 *2.按下F12，在控制台（console）中粘贴以下代码
 */

/*
 *停止定时器的方法：
 */
//stop();

/**
 * 得到合适的请求
 *
 * @returns 返回 ajax 请求对象
 */
function ajaxObject() {
  let xmlHttp;
  try {
    // Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  } catch (e) {
    // Internet Explorer
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

/**JS Ajax 请求 */
var Ajax = {
  /**
   * JS Ajax GET 请求
   *
   * @param {String } url
   * @param {function} fnSucceed
   * @param {function} fnFail
   * @param {function} fnLoading
   */
  get: function (url, fnSucceed, fnFail, fnLoading) {
    // XMLHttpRequest对象用于在后台与服务器交换数据   
    let xhr = ajaxObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) { // readyState == 4说明请求已完成
        if (xhr.status == 200) {
          fnSucceed && fnSucceed(xhr.responseText);
        } else {
          fnFail && fnFail(xhr.status);
        }
      } else {
        fnLoading && fnLoading();
      }
    };
    xhr.send();
  },
  /**
   *JS Ajax POST 请求
   *
   * @param {String} url  数据请求地址
   * @param {FormData} data 请求的数据 应为'a=a1&b=b1'这种字符串格式，也可以为表单对象,
   * 若在jq里如果data为对象会自动将对象转成这种字符串格式
   * @param {function} fnSucceed 请求成功执行的函数
   * @param {function} fnFail 请求失败执行的函数
   * @param {function} fnLoading 加载中函数
   */
  post: function (url, data, fnSucceed, fnFail, fnLoading) {
    let xhr = ajaxObject();
    xhr.open("post", url, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          fnSucceed && fnSucceed(xhr.responseText);
        } else {
          fnFail && fnFail(xhr.status);
        }
      } else {
        fnLoading && fnLoading();
      }
    };
    xhr.send(data);
  }
}

/**
 *动态加载js文件
 *
 * @param {string} url 需要加载的js文件url
 */
function loadJs(url) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.src = url;
  document
    .head
    .appendChild(script);
}
/** JQ CDN */
var jqCdnUrl = 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js';
// loadJs(jqCdnUrl);

/**
 *动态加载js代码
 *
 * @param {string} data 需要加载的js文件url
 */
function loadJs(data) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.text = data;
  document
    .head
    .appendChild(script);
}
/** FakeQQInfoJS */
var gitUrl = 'https://raw.githubusercontent.com/zctmdc/fakeQQInfo/master/fakeInfo.js';
// Ajax.get(gitUrl, function (js) {
//   let script = document.createElement('script');
//     script.type = "text/javascript";
//     script.text =js;
//     document
//       .head
//       .appendChild(script);
//   })

/**
 *
 *
 * @param {string} userNameFormName 账号表单名
 * @param {string} passwdFormName 密码表单名
 * @returns 虚假的data
 */
function fakeInfo(userNameFormName, passwdFormName) {
  let fakeUsername = fakeUserName(); //账号
  let fakePasswd = fakePassWord(); //密码
  return
  formData = '&' + userNameFormName + '=' + fakeUsername + '&' + passwdFormName + '=' + fakePasswd;
}
//http://180.215.6.187/f4b6sgz/6cac5s-pc.php
fakeInfo('user', 'pass');

/**
 *生成从minNum到maxNum的随机数
 *
 * @param {Number} minNum 范围开始
 * @param {Number} maxNum 范围结束
 * @returns
 */
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

/**
 * 范围字符串数组

 *
 * @param {Number} left 范围开始
 * @param {Number} right 范围结束
 * @returns
 */
function charArrBetween(left, right) {
  let arr = new Array(); //创建空数组
  if (!isNaN(left) && !isNaN(right)) {
    for (let i = left; i <= right; i++) {
      arr.push(i);
    }
  } else {
    for (let i = left.charCodeAt(); i <= right.charCodeAt(); i++) {
      arr.push(String.fromCharCode(i));
    }
  }
  return arr;
};

/**
 * 小写
 */
var lower_case = 0;
/**
 * 大写
 */
var upper_case = 1;
/**
 * 数字
 */
var number_case = 2;
/**
 * 符号
 */
var symbol_case = 3;
/**
 * 自定义字符数组模式
 */
var custom_case = -1;

/**
 *  randomWords 产生任意长度随机字母数字组合
 * @param {number} min 任意长度最小位[只填第一个参数生成的数为固定位数]
 * @param {number} [max=0] max-任意长度最大位
 * @param {Array} defineCases 模式选择
 * @param {Array} custom_array 自定义数组范围
 * @returns
 */
function randomWords(min, max = 0, defineCases, custom_array = []) {
  let str = "",
    range,
    arr = [];
  // 随机产生长度
  if (max > min) {
    range = Math.round(Math.random() * (max - min)) + min;
  } else {
    range = min;
  }
  //模式解析添加
  for (let index = 0; index < defineCases.length; index++) {
    switch (defineCases[index]) {
      case lower_case:
        arr = arr.concat(charArrBetween('a', 'z'));
        break;
      case upper_case:
        arr = arr.concat(charArrBetween('A', 'Z'));
        break;
      case number_case:
        arr = arr.concat(charArrBetween(0, 9));
        break;
      case symbol_case:
        /*
         * 自定义符号列表
         */
        let symbol_arr = [
          ',',
          '.',
          '#',
          '*',
          '!',
          '+',
          '-'
        ]
        for (let i = 0; i <= symbol_arr.length; i++) {
          arr.push(symbol_arr[i]);
        }
        break;
      case custom_case:
        for (let i = 0; i <= max; i++) {
          arr.push(custom_array[i]);
        }
        break;
      default:
        break;
    }
  };
  // 随机组合产生
  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}
/**
 * 小写
 */
var lower_case = 0;
/**
 * 大写
 */
var upper_case = 1;
/**
 * 数字
 */
var number_case = 2;
/**
 * 符号
 */
var symbol_case = 3;
/**
 * 自定义字符数组模式
 */
var custom_case = -1;

/**
 * 生成随机账号
 *
 * @returns
 */
function fakeUserName() {
  return randomNum(1000000, 999999999);
}

/**
 *生成随机密码
 *
 * @returns
 */
function fakePassWord() {
  let fakePasswd = '';
  let randPasswdLen = randomNum(8, 20); //随机密码长度
  let passwdLen = 0; //已生成的密码长度
  let num = 1; //生成数字
  let char = 2; //生成字母
  while (passwdLen < randPasswdLen) {
    let tmpLen = randomNum(1, 6); //当前模式生成密码的长度
    passwdLen += tmpLen;
    let word_case = randomNum(2);
    switch (randomNum(2)) {
      case num:
        fakePasswd += randomWords(tmpLen, 0, [number_case]);
        break;
      case char:
        fakePasswd += randomWords(tmpLen, 0, [upper_case, lower_case]);
        break;
    }
    if (randomNum(10) > 7) {
      let sym = randomWords(1, 1, [symbol_case]);
      fakePasswd += sym;
      passwdLen += 1;
    }
  }
  return fakePasswd;
}

/**
 * 填充表单
 *
 */
function setFrom() {
  let formArray = document.getElementsByTagName('input');
  for (let index = 0; index < formArray.length; index++) {
    const ele = formArray[index];
    if (!(ele.style.display == 'none')) {
      if (ele.getAttribute('type') && ele.getAttribute('type').indexOf('password') != -1) {
        ele.setAttribute('data-isPass', true);
        ele.setAttribute('type', 'text');
      }
      if (ele.getAttribute('data-isPass')) {
        ele.value = fakePassWord();
      } else {
        ele.value = fakeUserName();
      }
    }
  }
}

/** 服务器返回的数据  */
var responseData;

/**
 *向服务器提交数据
 *
 */
function sendFrom() {
  //所有表单
  let forms = document.getElementsByTagName('form');
  for (let i = 0; i < forms.length; i++) {
    //当前表单
    let formNow = forms[i];
    //当前表单中数据
    let formData = new FormData(formNow);
    //发送地址
    let actionUrl = formNow.getAttribute('action');
    if (!actionUrl) {
      actionUrl = '';
    }
    Ajax.post(actionUrl, formData, function (params) {
      if (responseData != params) {
        responseData = params;
        console.log(responseData);
      } else {
        //console.log('返回文本相同');
      }
      //发送成功，记录到网页
      showSendTimes();
    }, function (params) {
      stop();
      console.log('发送失败');
      //等待2分钟
      setTimeout(function () {
        go();
      }, 2 * 1000 * 60);
    });
  }
}

function getFormData(formNow) {
  if (typeof (formNow) != 'object') {
    formNow = document.getElementsByTagName('from');
  }
  let datas = formNow.getElementsByTagName('input');
  for (let index = 0; index < datas.length; index++) {
    const data = datas[index];
    formData += '&' + data.name + '=' + data.value;
  }
}

/**
 * 发送次数
 *
 */
function showSendTimes(ele) {
  let infoDiv = ele || document.getElementById('infoDiv');
  if (!infoDiv) {
    infoDiv = document.createElement('div');
    infoDiv.setAttribute('id', 'infoDiv');
    infoDiv.style.position = 'absolute';
    infoDiv.style.top = '5vh';
    infoDiv.style.right = '5vw';
    infoDiv.style.display = 'table-cell';
    infoDiv.style.backgroundColor = 'rgb(170, 170, 170)';
    infoDiv.style.textAlign = 'center';
    infoDiv.style.verticalAlign = 'middle';
    document.getElementsByTagName('body')[0].appendChild(infoDiv);
    infoDiv.innerText = 0;
  }
  ++infoDiv.innerText;
}

/** 定时器数组 */
var allIntervalArray = [];

/**
 * 每秒发送一次数据
 * 部分网站发送太频繁会banIP几分钟
 */
function go(times) {
  let timeNow = 0;
  allIntervalArray.push(setInterval(function () {
    setFrom();
    sendFrom();
    times && (++timeNow < times || stop());
  }, 1 * 1000));

}

/** 
 *停止定时器方法
 */
function clearAllInterval(allInterval) {
  let array = allInterval || allIntervalArray;
  for (let index = 0; index < array.length; index++) {
    clearInterval(array[index]);

  }
}

/**
 *停止定时器
 *
 */
function stop() {
  clearAllInterval(allIntervalArray);
}
/*
停止定时器
*/
//clearAllInterval(allIntervalArray);
/*
开始表演
*/
go();
