
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
///////////////////End Step#5////////////////////////

//////////////////Step#6////////////////////////////
app.get('/movies/read/by-date' , function(request ,result){
    result.send({status:200, data: movies.sort(function(a, b) {
        return a.year - b.year;
    })});
})
app.get('/movies/read/by-rating' , function(request ,result){
    result.send({status:200, data: movies.sort(function(a, b) {
        return b.rating - a.rating;
    })});
})
app.get('/movies/read/by-title' , function(request ,result){
    result.send({status:200, data: movies.sort(function(a, b) {
        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    })});
})
///////////////////End step#6////////////////////////////////////////

/////////////////Step#7//////////////////////////////////////////
app.get('/movies/read/id/:ID' , function(request ,result){
    var Id = request.params.ID ;
    if(Id > 0 && Id<= movies.length)
    {
        result.send({status:200, data:movies[Id-1]});
    }
    else
    {
        result.send({status:404, error:true, message:'the movie <ID> does not exist'}); 
    }
    // for(var i = 0 ; i < movies.length ; i++)
    // {
    //     if(Id == i+1)
    //     {
    //         result.send({status:200, data:movies[i]});
    //     }
    // }
    // result.send({status:404, error:true, message:'the movie <ID> does not exist'});    
});
////////////////////End Step#7/////////////////////////////////////////////

//////////////////////Step#8//////////////////////////////////////////////
app.get('/movies/add' , function(request ,result){
    var t = request.query.title ;
    var y =  request.query.year ;
    var r = request.query.rating ;
    if(t != undefined && y != undefined && r != undefined)
    {
        result.send({data: movies.push({title: t , year: y , rating: r})});    
    }
    else if(t == undefined || y == undefined|| isNaN(y) || y.length !=  4)
    {
       result.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'});
    }
    else if(r == undefined || r == "")
    {
        result.send({data: movies.push({title: t , year: y , rating: 4})});
    }
    result.send({data: movies});
});
///////////////////////End Step#8/////////////////////////////////////////







