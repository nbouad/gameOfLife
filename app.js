var express=require('express');
var path = require('path');
var app=express();

require('./routes/main')(app);

app.set('views',__dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/',express.static(path.join(__dirname, 'public')));
app.listen(3000,function(){
    console.log("Express is running on port 3000");
});

module.exports = app;
