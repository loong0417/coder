# ES6

## 一. 变量 let

### 1. var 和 let 区别
> 事实上 var 的设计可以看成 javascript 语言设计上的错误，但这种错误多半是不能修复和移除的，以为需要向后兼容；

- 大概十年前，Brendan Eich 就决定修复这个问题，于是添加了一个新的关键字：**let**;
- 可以将 let 看成更完美的 var ；

### 2. 块级作用域
- js 中使用 var 来声明一个变量时，变量的作用域主要是和函数的定义有关；
- 针对于其它块定义来说是没有作用域的，比如：if/for 等，这在开发中往往会引起一些问题；



## 二. 常量 const

### 1. const 的使用
- 在很多语言中存在，主要的作用是将某个变量修饰为常量；
- 使用 const 修饰的标标识符为常量，不可以再次赋值；

### 2. 什么时候使用常量
- 修饰的标识符不会再次被再次赋值时，就可以使用 const 来保证数据的安全；
- 在 ES6 开发中优先使用 const，只有需要改变标识符的时候才使用 let 关键字；


### 3. const 使用注意事项
- 一旦 const 修饰的标识符被赋值之后，不能修改；
- 在使用 const 修饰的标识符，必须进行赋值；
- 常量的含义是指向的对象不能修改，但可以改变对象内部的属性；
```javascript
const obj = {
	name: 'why',
	age: 18,
	height: 1.88
};
// obj = {}   Assignment to constant variable 对象不能改变
obj.name = "张山";  // 可以修改对象的属性

console.log(obj);
```

## 三. 对象的增强写法
> ES6中，对对象字面量进行了很多增强；

### 1. 属性初始化简写
```javascript
// 1. 属性的简写
let name = "杨小样";
let age = 18;
let job = "攻城狮";

// ES6 之前引用外面属性写法
// const obj = {
//   name:name,
//   age:age,
//   job:job
// }

// ES6 之后引用外面属性的写法
const obj = {
    name,
    age,
    job
} 
console.log(obj);
```

### 2.  函数简写方式
```javascript
// 2. 函数简写方式
const obj = {
// ES6 之前的书写方式
// test: function(){
//   console.log('this is test function');
// },

// info: function(){
//   console.log('this is info function');
// }

	// ES6 之后的书写方式
    test(){
        console.log("this is test method ");
    },
    info(){
        console.log("this is info method ");
    }
}

console.log(obj.test());
```
