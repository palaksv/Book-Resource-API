const mongoose=require('mongoose');

const bookSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name : String,
    imageUrl: String,
    author: String,
    pages:Number,
    price: Number
});

module.exports=mongoose.model('Book',bookSchema);