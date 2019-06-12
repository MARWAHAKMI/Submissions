
/////Step#2///////
var express = require('express');
var port = 3000 ;
var app = express();

app.listen(port , console.log("Server is running Successfully"));   

app.get('/' , function(request ,result){
    result.send('ok');
})
///////////////////End Step#2/////////////////

/////Step#3/////////////
app.get('/test' , function(request ,result){
    result.send({status:200, message:"ok"});
})

app.get('/time' , function(request ,result){
    var date = new Date();
    result.send({status:200, message: date.getHours() + ":" + date.getSeconds()});
})
////////////////////End Step#3/////////////////////////

///////////Step#4//////////////////////
app.get('/hello/:ID' , function(request ,result){
    var Id = request.params.ID ;
    result.send({status:200, message: "Hello:" + Id});
})
app.get('/search' , function(request ,result){
    var Search = request.query.s ;
    if(Search)
    {
    result.send({status:200, message: "ok" , data: Search});    
    }
    else
    {
      result.send({status:500, error:true, message:"you have to provide a search"});
    }
})


