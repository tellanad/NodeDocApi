const express = require('express')
const app = express();
const morgan = require('morgan');
//import routes module
const {getPosts}= require('./routes/post')


//middleware
// const MyOwnMiddle =(req,res,next)=>{

//     console.log("Middleware got applied");
//     // next();
// };

app.use(morgan("dev"));
// app.use(MyOwnMiddle);



app.get('/',getPosts);

const port = 8080
app.listen(port,()=>console.log(`Node Js is listening on port: ${port}`));