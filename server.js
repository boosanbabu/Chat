var express=require('express');
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http,{  cookie: false });
var ip = require('ip');
app.use(express.static('./')); 
require("./controller/controller.js")(app,io);

http.listen(process.env.PORT || 5000,function(){
    console.log("Node Server is setup and it is listening on http://"+ip.address()+ ":"+process.env.PORT || 5000);
})