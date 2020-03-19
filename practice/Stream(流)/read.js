
//引入流模块
var fs = require('fs')
//定义数据对象
var datas = ''

//创建可读流  不带路径时，默认在practice根目录查找txt文件
var readerStream = fs.createReadStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\input.txt');
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    datas += chunk;  //将读到的数据附加到datas
 });
 
 readerStream.on('end',function(){
    console.log(datas);  //在读完文件后打印datas
 });
 
 readerStream.on('error', function(err){
    console.log(err.stack);  //如果错误打印错误信息
 });
 
 console.log("程序执行完毕");