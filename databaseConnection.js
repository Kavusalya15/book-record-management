const mongoose = require("mongoose");

function DbConnection() {
    const DB_URL = process.env.Mongo_URI;

    mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  
  const db =mongoose.connection;

  db.on("error",console.error.bind("Connection error"));
  db.once("open",function (){
    console.log("DB Connected !!");
  });

 }
//CRUD=>create,read,update,delete
module.exports = DbConnection;
