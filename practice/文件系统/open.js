var fs = require('fs')
var util = require('util')

//fs.open(path, flags[, mode], callback)
// path - 文件的路径。
// flags - 文件打开的行为。具体值详见下文。【r、r+、rs、rs+、w、wx、w+、wx+、a、ax、a+、ax+】
// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
// callback - 回调函数，带有两个参数如：callback(err, fd)。

var filePath = './文件系统/input.txt';

//异步方式打开文件
console.log("准备打开文件！");
fs.open(filePath,'r',function(err,data){
    if(err)
        return console.error(err);
    console.log('异步打开文件成功')
})

//同步方式打开文件
var data = fs.openSync(filePath,'r');
console.log('同步方式打开文件');


//获取文件信息
//fs.stat(path, callback)   path  文件路径   callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。

console.log("准备读取文件");
fs.stat(filePath,function(err,stats){
    if(err)
        console.error(err);

    console.log('Stats信息打印：' + util.inspect(stats));   //这里用util.inspect()方法吧stats打印出来了
    console.log("读取文件信息成功！");
    if(stats.isFile())
        console.log('这是一个文件')
    else if(stats.isDirectory())
        console.log('这是一个目录')
    else if(stats.isBlockDevice())
        console.log('这是一个块设备')
    else if(stats.isCharacterDevice())
        console.log('这是一个字符设备')
    else if(stats.isFIFO())
        console.log('这是一个FIFO,FIFO是UNIX中的一种特殊类型的命令管道')
    else if(stats.isSymbolicLink())
        console.log('是软链接')
    else if(stats.isSocket())
        console.log('这是Socket')
    else
        console.log('不认识了')
})