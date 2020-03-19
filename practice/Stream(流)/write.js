
//引入流模块
var fs = require('fs')
//定义数据对象
var datas = 'This is PLA Air Force speaking.You are about to enter the Chinese airspace.Leave immediately! Leave immediately! \n这里是中国空军，你即将进入中国领空，请你立即离开！立即离开！'

//创建可读流  不带路径时，默认在practice根目录查找txt文件
var writerStream = fs.createWriteStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\output.txt');
// 使用 utf8 编码写入数据
writerStream.write(datas,'UTF8');
// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");   //在所有数据已被写入时触发。
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

