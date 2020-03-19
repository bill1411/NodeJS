
// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

var events = require('events'); 
var emitter = new events.EventEmitter(); 

emitter.on('someevent',function(arg1,arg2){
    console.log('listen1',arg1,arg2);
});

emitter.on('someevent',function(arg1,arg2){
    console.log('listen2',arg1,arg2)
});

//如果emit执行的监听器，所绑定的函数（事件）有参数时，应该也传入参数，如果不传则相当于参数赋值为undefined
emitter.emit('someevent')
emitter.emit('someevent', 'arg1 参数', 'arg2 参数')