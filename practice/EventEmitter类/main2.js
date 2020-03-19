//引入事件模块
var events = require('events');
//创建时间对象
var emitter = new events.EventEmitter();

//创建监听器1
var listen1 = function(){
    console.log('这里是监听器1');
}
//创建监听器2
var listen2 = function(){
    console.log('这里是监听器2')
}

//绑定 connection 事件，处理函数为 listener2   为指定事件添加一个监听器到监听器数组的尾部。【谁被加到尾部谁就先执行】
emitter.addListener('connection',listen2);

//绑定 connection 事件，处理函数为 listener1
emitter.on('connection',listen1);

//获取监听数组里的个数
var eventListeners = emitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
emitter.emit('connection');

//移除绑定的listen2，不再监听
emitter.removeListener('connection',listen2);
console.log("listener2 不再受监听。");

//再获取监听数组的个数
var listenersCount = emitter.listenerCount('connection')
console.log(listenersCount + " 个监听器监听连接事件。");

emitter.emit('connection');

//执行错误的事件
emitter.emit('error'); 
