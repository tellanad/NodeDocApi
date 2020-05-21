const express = require('express')
const app = express();
const morgan = require('morgan');
//import routes module
const postRoutes= require('./routes/post')


//middleware
// const MyOwnMiddle =(req,res,next)=>{

//     console.log("Middleware got applied");
//     // next();
// };

app.use(morgan("dev"));
// app.use(MyOwnMiddle);



app.use('/',postRoutes);

const port = 8080
app.listen(port,()=>console.log(`Node Js is listening on port: ${port}`));