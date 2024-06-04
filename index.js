var Express =require("express");
var MongocLient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");
const { MongoClient } = require("mongodb");

var app=Express();
app.use(cors());

// FALTA POR A PASSWORD QUE ESTA NO BLOCO DE NOTAS DO PC DA ESCOLA
var CONNECTION_STRING="mongodb+srv://a14381:<password>@cluster0.uyqerpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATEBASENAME="todoappdb";
var database;

app.listen(5038,()=> {
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATEBASENAME);
        console.log("Mongo DB Connection Successful");
    })

})
