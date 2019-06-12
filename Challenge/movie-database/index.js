
/////Step#2///////

var express = require('express');
var port = 3000 ;
var app = express();

app.listen(port , console.log("Server is running Successfully"));   

app.get('/' , function(require ,result){
    result.send('ok');
})

////////////////////////////////////

/////Step#3/////////////

app.get('/test' , function(require ,result){
    result.send({status:200, message:"ok"});
})


app.get('/time' , function(require ,result){
    var date = new Date();
    result.send({status:200, message: date.getHours() + ":" + date.getSeconds()});
})