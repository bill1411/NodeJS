//导入外部js文件
//hello1.js 通过 exports 对象把 world 作为模块的访问接口，在 main1.js 中通过 require('xxx\hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。
var hello = require('D:\\Project\\NodeJS\\practice\\模块系统\\hello1.js');
//调用文件中hello方法
hello.world();