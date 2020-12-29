//jshint esversion:6
const express = require("express");
const app = express();
app.get("/",function(req,res){
    response.send("<h1>Hello</h1>");
})
app.get("/contact",function(req,res){
    response.send("<h1>9340187713</h1>");
})
app.listen(3000, function(){
    console.log("server started on port 3000");
});