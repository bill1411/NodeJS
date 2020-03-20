//导入Hello对象
//有时候我们只是想把一个对象封装到模块中，格式如下：
var Hello  = require('../模块系统/hello.js');
//实例化
hello = new Hello(); 
//通过对外公布的方法，给内部变量name赋值
hello.setName('BYVoid');
//调用sayHello方法
hello.sayHello(); 