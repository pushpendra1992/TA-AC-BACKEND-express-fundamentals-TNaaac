var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send("Welcome to home page");
})

app.get('/about', (req, res) => {
    res.send('You are on "About" page');
})

app.get('/admin', (req, res, next) => {
    next("you are 'Unauthorised User'")
})

app.use((req, res, next) => {
    res.send("Page Not Found");
})

app.use((err, req, res, next) => {
    res.end(err);
})


app.listen(3000, 'localhost', () => {
    console.log("welcome to port 3k");
})
