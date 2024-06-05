var Express =require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");
//const { MongoClient } = require("mongodb");

var app=Express();
app.use(cors());

// FALTA POR A PASSWORD QUE ESTA NO BLOCO DE NOTAS DO PC DA ESCOLA
var CONNECTION_STRING="mongodb+srv://a14381:UjPlUnACAUIuCgdo@cluster0.uyqerpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATEBASENAME="turma2p2024";
var database;

app.listen(5038,()=> {
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATEBASENAME);
        console.log("Mongo DB Connection Successful");
    })

})
