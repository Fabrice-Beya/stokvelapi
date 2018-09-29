var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    costumerRoutes      = require("./routes/costumer"),
    port                = process.env.PORT || 3001


    // mongoose.connect('mongodb://localhost/stok');
    mongoose.connect("mongodb://stokvel-api.documents.azure.com:10255/?ssl=true&replicaSet=globaldb",{
        auth:{  
            user:"stokvel-api",
            password:"gv2LsDnmozDRNlYNAfxKFbZP8wD4RO6EDKOvSTLsFtERBr0Vokq6uAbGcLI7ELIAzqVHQkkj0y8cL1cctRQAcw==",
        }}, function(err, db){
            
        });

    app.use(bodyParser.json());

    app.get("/", function(req, res){
        res.send("Welcome to stokvel api");
    })
    app.use("/api/costumer", costumerRoutes);

    app.listen(port, function(){
        console.log("api server is live")
    })