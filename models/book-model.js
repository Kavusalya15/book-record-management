const mongoose = require("mongoose");

const Schema= mongoose.Schema;

const bookSchema = new Schema(
    {
    name: {
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        requied:true,
    },
    price:{
        type:Number,
        required:true,
    },
    publisher:{
        type:String,
        required:true,
    },
},
    {
        timestamps:true,
    }

);

// collection will be having a name called "books"

module.exports = mongoose.model("Book",bookSchema);