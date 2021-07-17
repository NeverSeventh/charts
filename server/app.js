const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/usersRoutes')





 app.use(cors());




app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(logger('dev'));




app.use('/',(req, res, next)  => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use('/users',usersRouter)



app.listen(6970,()=>{
    console.log('Server Started');
});