var server = require("../路由/server");
var router = require("../路由/route");
 
server.start(router.route);