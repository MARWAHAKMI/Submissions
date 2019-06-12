
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
});
//////////////End Step#4///////////////////////////////////

//////////////Step#5//////////////////////////////////////
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
app.get('/movies/create' , function(request ,result){
    result.send('create');
})
app.get('/movies/read' , function(request ,result){
    result.send({status:200, data: movies});
})
app.get('/movies/update' , function(request ,result){
    result.send('update');
})
app.get('/movies/delete' , function(request ,result){
    result.send('delete');
})





