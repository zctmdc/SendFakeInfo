
// 测试地址  http://180.215.6.187/f4b6sgz/6cac5s-pc.php
/*
打开钓鱼网网站，按下F12，在控制台（console）中粘贴以下代码
*/

/*
停止定时器方法：
*/
//stop();

/**
 *
 *
 * @param {账号表单名} userNameForm
 * @param {密码表单名} passwdForm
 * @returns
 */
function fakeInfo(userNameForm, passwdForm) {
  let fakeUsername = fakeUserName(); //账号
  let fakePasswd = fakePassWord(); //密码
  return '&' + userNameForm + fakeUsername + '=&' + passwdForm + '=' + fakePasswd;
}
//http://180.215.6.187/f4b6sgz/6cac5s-pc.php
fakeInfo('user', 'pass');

/**
 *生成从minNum到maxNum的随机数
 *
 * @param {范围开始} minNum
 * @param {范围结束} maxNum
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
 * @param {范围开始} left
 * @param {范围结束} right
 * @returns
 */
function charArrBetween(left, right) {
  var arr = new Array(); //创建空数组
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
 * @param {任意长度最小位[只填第一个参数生成的数为固定位数]} min
 * @param {max-任意长度最大位} [max=0]
 * @param {模式选择} defineCases
 * @param {自定义数组范围} custom_array
 * @returns
 */
function randomWords(min, max = 0, defineCases, custom_array = []) {
  var str = "",
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
  var fakePasswd = '';
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
  var formArray = document.getElementsByTagName('input');
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
  var forms = document.getElementsByTagName('form');
  for (let i = 0; i < forms.length; i++) {
    var formNow = forms[i];
    var formData = new FormData(formNow);
    var actionUrl = formNow.getAttribute('action');
    if (!actionUrl) {
      actionUrl = '';
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        if (responseData != xmlHttp.responseText) {
          responseData = xmlHttp.responseText;
          console.log(responseData);
        } else {
          //console.log('返回值相同');
        }
        showSendTimes();
      }
    }
    xmlHttp.open("post", actionUrl);
    xmlHttp.send(formData);
  }
}
/** 定时器数组 */
var allIntervalArray = [];


/**
 * 发送次数
 *
 */
function showSendTimes(ele) {
  var infoDiv = ele || document.getElementById('infoDiv');
  if (!infoDiv) {
    var infoDiv = document.createElement('div');
    infoDiv.setAttribute('id','infoDiv');
    infoDiv.innerText = 0;
    infoDiv.style.position='absolute';
    infoDiv.style.top='5vh';
    infoDiv.style.right='5px';
    infoDiv.style.display='table-cell';
    infoDiv.style.backgroundColor='rgb(170, 170, 170)';
    infoDiv.style.textAlign='center';
    infoDiv.style.verticalAlign = 'middle';
    document.getElementsByTagName('body')[0].appendChild(infoDiv);
  }
  infoDiv.innerText++;
}

/**
 *
 * 每秒发送一次数据
 * 部分网站发送太频繁会banIP几分钟
 */
function go() {
  allIntervalArray.push(setInterval(function () {
    setFrom();
    sendFrom();
  }, 1 * 1000));
}

/** 
停止定时器方法
*/
function clearAllInterval(allInterval) {
  let array = allInterval || allIntervalArray;
  for (let index = 0; index < array.length; index++) {
    clearInterval(array[index]);

  }
}

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
