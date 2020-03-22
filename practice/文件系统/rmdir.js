
//删除目录
//fs.rmdir(path, callback)

// path - 文件路径。
// callback - 回调函数，没有参数。

var fs = require('fs');

// 执行前创建一个空的 /tmp/test 目录
console.log("准备删除目录 ./文件系统/tmp/test中的test目录");

fs.rmdir('./文件系统/tmp/test',function(err){
    if(err)
        return console.error(err);

        console.log("删除成功");
});