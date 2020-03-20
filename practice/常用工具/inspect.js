var util = require('util')


function Person(){
    this.name = 'dived';
    this.toString = function(){
        return this.name;
    };
}

var obj = new Person();

//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
//object是必选的一个参数，表示要转为字符串的对象
//showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
//depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。 
//colors 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
//特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用。

console.log(util.inspect(obj))
console.log(util.inspect(obj,true))

//判断给定的是否是数组，是返回true   否则false
util.isArray([])   // true
console.log(util.isArray(new Array))  // true
console.log(util.isArray({}))  //false

//判断是否是正则表达式
util.isRegExp(/some regexp/)
console.log(util.isRegExp(new RegExp('another regexp')))
console.log(util.isRegExp({}))

//判断是否是日期类型 true
console.log(util.isDate(new Date()))  //true
console.log(util.isDate(Date()))  // false (without 'new' returns a String)
console.log(util.isDate({}))  //false
