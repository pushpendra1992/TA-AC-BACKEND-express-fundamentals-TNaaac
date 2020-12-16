// assignment 3

let express = require('express');

let app = express();
let logger = require('morgan');
let cookieParser = require('cookie-parser');
const { json } = require('express');

app.use((req,res,next) => {
   console.log(req.method,req.url,new Date());
   next();
})


app.use('/json',(req,res,next) => {
    res.setHeader('Content-type','application/json');
    res.send(req.body);
    next();
});

app.use((req,res,next) => {
    res.send(__dirname + '/public');
    next();
})

app.get('/',(req,res) => {
    res.send('Welcome to the page')
})


app.listen(3000,() => {
    console.log('Server is listening at port 3000');
})
