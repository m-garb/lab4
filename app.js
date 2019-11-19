const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.render("venus.html");
});

app.get("/earth", function(req, res){
    res.render("earth.html");
});

app.get("/mars", function(req, res){
    res.render("mars.html");
});

app.get("/jupiter", function(req, res){
    res.render("jupiter.html");
});

app.get("/saturn", function(req, res){
    res.render("saturn.html");
});

app.get("/uranus", function(req, res){
    res.render("uranus.html");
});

app.get("/neptune", function(req, res){
    res.render("neptune.html");
});

//server listener for local/cloud9
//app.listen("8080", "127.0.0.1", function(){
//    console.log("Express Server is Running...");
//});


//heroku server listener
app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Running Experess Server...");

});