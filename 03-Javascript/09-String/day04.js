// var jd2 = [
// 	{'name':'iphone6','price':5998,'color':'black'},
// 	{'name':'iphone7S','price':5698,'color':'red'},
// 	{'name':'iphone8','price':7998,'color':'black'},
// 	{'name':'iphone6S','price':3998,'color':'red'},
// 	{'name':'iphone8S','price':8998,'color':'red'},
// 	{'name':'iphone7','price':6998,'color':'black'}
// ]

// 1.数组排序，按价格从小到大排序
// 2.过滤红色手机

// jd2.sort((a,b) => a.price > b.price);
// for(var i=0;i<jd2.length;i++){
// 	for(var j in jd2[i]){
// 		document.write(jd2[i][j]);
// 	}
// 	document.write('<br>');
// }

// var relset2 = jd2.filter((a) => a.color == 'red');
// console.log(relset2);

// console.log(20-17.1);
// console.log(20-17.5);
// console.log(20-17.6);
// console.log(20-17.7);

// var money = 20;
// var price = 17.6;

// toFixed() 保留小数点
// console.log('保留小数点：' + (money-price).toFixed(1));

// prompt()返回的是一个字符串

// parseInt() 将字符串转换成number
// parseFloat()  将字符串转换成小数类型
// toString()  number转换成字符串

// var gz = 5000;

// var str = prompt('我想要涨工资');
// document.write('年底奖金是：' + (gz + parseInt(str))*2);

// var a = 'B';
// var b = '杨小样'
// console.log(a.charCodeAt(0));
// console.log(b.charCodeAt(1));

// 字符串的长度 length

// var str1 = 'hello world';
// console.log(str1.length);

// indexOf() 判断字符串中是否存在某一个字符
// 如果存在则返回字符的当前位置
// 如果不存则返回-1
// console.log(str1.indexOf('a'));

// 字符串截取函数 slice()
// var str2 = 'hello-every-body';
// console.log(str2.slice(3,5));

// 1、过滤数组中重复的值
// 比如输入: [1,2,4,6,77,434,23,223,1,11,22,33,22,22,77,4,6]
// 输出: [1,2,4,6,77,434,23,223,11,22,33] 


// 排序法
// var arry1 = [1,2,4,6,77,434,23,223,1,11,22,33,22,22,77,4,6];
// var temp = [];

// arry1.sort();
// document.write(arry1 + '<br>');

// for(var i=0; i< arry1.length; i++){
	//判断空数组中最后一个数是否与相邻的数相同
// 	if(temp[temp.length-1] != arry1[i]){
// 		temp.push(arry1[i]);
// 	}
// }
// document.write(temp);

//查找法
// for(i=0;i<arry1.length;i++){
// 	//判断空数组中是否存在相同的数
// 	if(temp.indexOf(arry1[i]) == -1){
// 		temp.push(arry1[i]);
// 	}
// }
// document.write(temp);


// 2、随机生成6位数字符串【验证码】
// Math存放很多数学函数
// random()随机生成0-1之间的随机数
// Math.random()生成随机数
// charAt返回指定位置的字符
// var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// var n = 6, s = '';
// // console.log(str.length);
// for(i=0;i<n;i++){
// 	var rand = Math.floor(Math.random()*str.length);
// 	s += str.charAt(rand);
// }
// console.log(s);


// 3、将一个数组arry[1,2,3,4,5,6,7,8,9]，拆分成3个数组。

// var arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// var list = [];
// for(i=0;i<arr2.length;i+=arr2.length/3){
// 	list.push(arr2.slice(i,i+arr2.length/3));
// }
// console.log(list);


// 4、一个url地址：http://www.baike.com%%E6%95%B0%E5%AD?height=100&width=200
// 将?后的height 和 width 以对象的形式存储起来
// 例如：申明一个对象img; url处理后返回 img.height = 100;img.width = 200;

// var str = 'http://www.baike.com%%E6%95%B0%E5%AD?height=100&width=200';
// // 截取问号后面的字符串
// var info = str.slice(str.indexOf('?')+1,str.length);
// // split() 将字符串分割成对应的数组
// var listInfo = info.split('&');
// var img = {};
// var name,value;
// for(var i=0;i<listInfo.length;i++){
// 	name = listInfo[i].slice(0,listInfo[i].indexOf('='));
// 	value = listInfo[i].slice(listInfo[i].indexOf('=')+1,listInfo[i].length);
// 	img[name] = value;
// }
// console.log(img);

// 5、将任意字符串中的字母转换成大写字母输出  
// 例如输入输入 str = a3b2C5d6E7;    输出  A3B2C5D6E7;
// 请先执行以下代码    str = prompt("输入字符串");

// var str = prompt('请输入字符串');
// document.write(str.toUpperCase());
// document.write(str.toLowerCase());

