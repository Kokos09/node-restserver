require('./config/config')
const express=require('express');
const app=express()
//Body-Parser
const bodyParser=require('body-parser');
//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json())


app.get('/usuarios',function(req,res){
res.json('get Usuario');
});
app.post('/usuarios',function(req,res){
    let body=req.body;
    if(body.nombre==undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es necesaio'
        });
    }else{
        res.json({
            persona:body
        });
    }
    
});
app.put('/usuario/:id',function(req,res){
        let id = req.params.id;
        res.json({id});
});
app.delete('/usuarios',function(req,res){
    res.json('delete Usuario');
});

app.listen(process.env.PORT,()=>{
    console.log("Corriendo desde el puerto 3000")
});