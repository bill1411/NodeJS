//引入事件模块
var events = require('events');

//创建事件对象
var eventEmitter = new events.EventEmitter();


//eventEmitter.emit 是触发事件
//eventEmitter.on   是绑定事件

//定义了个函数
var connectHandler = function connected(){
    console.log('连接成功。');

    // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定connection 及其对应的函数
eventEmitter.on('connection',connectHandler);

// 绑定data_received 及其匿名函数
eventEmitter.on('data_received',function(){
    console.log('数据接收成功。');
});

//触发connection事件
eventEmitter.emit('connection');
//执行完成后打印
console.log('程序执行完毕');

