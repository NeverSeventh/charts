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
    res.header("Access-Control-Allow-Origin", "https://chartsclient.herokuapp.com");
    res.header("Access-Control-Allow-Headers", "https://chartsclient.herokuapp.com");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});




app.use('/users',usersRouter)

app.get('/',(req,res)=>{
    res.send('<p>Hello world</p>')
})

app.listen(process.env.PORT || 6970,()=>{
    console.log('Server Started');
});