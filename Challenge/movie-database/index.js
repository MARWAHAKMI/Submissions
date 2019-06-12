var express = require('express');
var port = 3000 ;
var app = express();

app.listen(port , console.log("Server is running Successfully"));   

app.get('/' , function(require ,result){
    result.send('ok');
})
