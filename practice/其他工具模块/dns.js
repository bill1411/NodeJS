var dns = require("dns")

//将域名（比如 'runoob.com'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。
dns.lookup('www.github.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    //反向解析 IP 地址，指向该 IP 地址的域名数组。
    dns.reverse(address, function (err, hostnames) {
    if (err) {
       console.log(err.stack);
    }
 
    console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
 });  
 });