
//告诉系统允许外部引用 hello文件的world方法
exports.world = function() {
    console.log('Hello World');
  }


//exports 和 module.exports 的使用

//如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports