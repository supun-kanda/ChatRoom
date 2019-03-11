var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get("/?front", function(req,res){
    indexFIle = path.join(__dirname,"/public/index.html");
    res.sendFile(indexFIle);
    //console.log(req);
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("App is listening at http://%s:%s",host,port);
});