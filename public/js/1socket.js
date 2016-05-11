var socket = io.connect('/chat');
socket.on('connect', function(){
	console.info('连接成功');
	socket.send('hello world!');
	socket.on('chat', function(data){
		console.info('lxk = ' + data);
	})
});