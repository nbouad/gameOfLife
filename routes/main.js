module.exports=function(app)
{
    app.get('/',function(req,res){
        res.render('index.html')
    });
    app.get('/game',function(req,res){
        res.render('game.html');
    });
}