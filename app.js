var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname);
app.get('/',function(req,res){
    res.send('Hello world!');
});

app.listen(4000,function(){
  console.log('Server On!');
});
