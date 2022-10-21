const express=require('express');
const morgan=require('morgan');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


const booksRoutes=require('./api/routes/books');

mongoose.connect('mongodb+srv://palak2510:Palak%402510@book-api.6p8xahw.mongodb.net/?retryWrites=true&w=majority'

);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization ');
    if(req.method === 'OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/books',booksRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:
        {
           message: error.message
        }
    })
})
module.exports=app;