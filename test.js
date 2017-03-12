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
    secure: false
});


socket.on('meterupdated', function( data ) {
      console.log(data);
});
