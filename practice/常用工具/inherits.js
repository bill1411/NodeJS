
//util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数

var util = require('util');

function Base(){
    this.name = 'base';
    this.base = '1991';
    this.sayHello = function(){
        console.log('Hello ' + this.name); 
    };
}

//定义Base属性下的showName方法
Base.prototype.showName = function(){
    console.log('showName的function:' + this.name);
};

function Sub() { 
    this.name = 'sub'; 
};

//设置sub 继承自Base
util.inherits(Sub, Base); 
var obj = new Base();
obj.showName();
obj.sayHello();
console.log(obj);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();    构造函数内部创造的base属性和sayHello函数无法被继承
console.log(objSub);

// Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被 console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：



