//定义Hello函数
function Hello() { 
    var name;   //私有属性
    this.setName = function(thyName) {   //公布的外部方法setName
        name = thyName; 
    }; 
    this.sayHello = function() {         //公布的外部方法sayHello
        console.log('Hello ' + name); 
    }; 
    this.ss;
}; 
//告诉外部文件引用此文件时需要导入的模块名字
module.exports = Hello;


//exports 和 module.exports 的使用

//如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports