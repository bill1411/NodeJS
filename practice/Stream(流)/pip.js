
//通过文件读流和文件写流，完成源文件内容到目标文件内容的拷贝
//引入模块
var fs = require('fs')
//定义读流
var readerSteam = fs.createReadStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\input.txt');

//定义写流
var writeSteam = fs.createWriteStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\output2.txt')

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerSteam.pipe(writeSteam);
console.log('操作完成')