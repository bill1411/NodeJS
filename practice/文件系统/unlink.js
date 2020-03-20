
//删除文件
//fs.unlink(path, callback)
// path - 文件路径。
// callback - 回调函数，没有参数。

var fs = require("fs");
var filePath = './文件系统/input3.txt';

console.log('准备删除文件')
fs.unlink(filePath,function(err){
    if(err){
       return console.error(err);
    }
    console.log('删除成功')
});