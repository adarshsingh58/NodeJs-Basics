var express=require('express');
var app=express();

app.set('view engine','ejs')

app.get('/',function(req,res){res.render('index')});
app.get('/api/:id',function(req,res){res.render('person',{ID:req.params.id})});

app.listen(3000);