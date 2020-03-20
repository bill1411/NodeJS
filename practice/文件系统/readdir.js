

//读取目录
//fs.readdir(path, callback)
// path - 文件路径。

// callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

var fs = require("fs");
var dir = "./文件系统/tmp/";

console.log("查看 /tmp 目录");
fs.readdir(dir,function(err,files){
    if (err) {
        return console.error(err);
    }
    console.log('此tmp目录下的文件及文件夹数是：' + files.length);
    files.forEach(function (file){
        console.log(file);
    });
});



