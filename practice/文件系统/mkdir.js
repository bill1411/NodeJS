
//创建目录
//fs.mkdir(path[, options], callback)  
// path - 文件路径。

// options 参数可以是：
//     recursive - 是否以递归的方式创建目录，默认为 false。
//     mode - 设置目录权限，默认为 0777。
// callback - 回调函数，没有参数。

var fs = require("fs");

console.log("创建目录 ../文件系统/tmp/test/");
// tmp 目录必须存在
fs.mkdir("./文件系统/tmp/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});


//强制创建不管上级目录是否存在  { recursive: true }  
fs.mkdir('./文件系统/tmp/test/', { recursive: true }, (err) => {
    if (err)  return console.error(err);
    console.log("目录创建成功。");
  });


