const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var r = w+h;

    res.send("the result is "+r);

});

app.listen(2000,function(){
    console.log("server is running at 2000");
});

