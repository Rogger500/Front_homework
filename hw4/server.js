var net = require('net');
var server = net.createServer(function(connection) {
    console.log('有TCP客户端连接进入');
    connection.on('end', function() {
        console.log('客户端连接断开');
    });
    //向客户端写入数据
    connection.write('hello\r\n');
    //将客户端发来的数据原样pipe返回
    connection.pipe(connection);
});

TCP服务器开始端口监听
server.listen(2345, function() {
    console.log('TCP服务启动');
});
