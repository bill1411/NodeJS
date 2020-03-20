var fs = require("fs")

//异步读取文件
fs.readFile('./文件系统/input.txt',function(err,data){
    if(err)
        return console.error(err);
    console.log('异步读取: ' + data.toString());
});

//同步读取文件
var data = fs.readFileSync('./文件系统/input.txt');
console.log('同步读取数据：' + data.toString());

console.log('程序执行完毕');