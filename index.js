var Express =require("express");
var MongoClient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");
//const { MongoClient } = require("mongodb");

var app=Express();
app.use(cors());

// FALTA POR A PASSWORD QUE ESTA NO BLOCO DE NOTAS DO PC DA ESCOLA
var CONNECTION_STRING="mongodb+srv://a14381:UjPlUnACAUIuCgdo@cluster0.uyqerpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATEBASENAME="todoappdb";
var database;

app.listen(5038,()=> {
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        //console.log("passo#1");
        if (error) {
            console.error("Ligação nao conseguida");
            console.error(error);
            return;
        }
        database=client.db(DATEBASENAME);
        console.log("Mongo DB Connection Successful");
    })

});

app.get('/api/todoapp/GetNote', (request, response) => {
    database.collection("todoappcollection").find({}).toArray((error, result)=> {
        response.send(result);
    });
});


