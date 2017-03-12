//var socket = require('socket.io-client')('http://lnd-testnet-3.mably.com:8280');
//socket.on('meterypdated', function( data ) {
//	console.log(data);
//});



//var socket = io.connect('http://lnd-testnet-3.mably.com:8280');
//socket.on('connect', function(){
//  socket.emit('authentication', {query: "auth=YWRtaW46aGFja2F0b24%3D", secure: false});
//  socket.on('authenticated', function() {
//    console.log("ok");
//  });
//});



var io = require('socket.io-client'),
socket = io.connect('http://lnd-testnet-3.mably.com:8280', {
    query: "auth=YWRtaW46aGFja2F0b24%3D&type=supplier", 
//    query: "auth=2Fuid4%3D&type=supplier",  
    secure: false
});

console.log('check 1', socket.connected);
socket.on('connect', function() {
  console.log('check 2', socket.connected);
});

socket.on('meterupdated', function( data ) {
	console.log(data.data.value);
	var spawn = require("child_process").spawn;
	var process = spawn('python',["PiPower.py", data.data.value]);

});
process.stdout.on('data', function (data){
	consol.log(data);
});
