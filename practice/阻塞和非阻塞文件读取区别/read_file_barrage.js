var fs = require("fs");

var data = fs.readFileSync('D:\\Project\\NodeJS\\practice\\阻塞和非阻塞文件读取区别\\content.txt');

console.log(data.toString());
console.log("程序执行结束!");