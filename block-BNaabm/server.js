var express = require('express');
var app = express();

function logger(req, res, next) {
    console.log(req.url);
    console.log(req.method);
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send("Welcome to express")
})

app.listen(4000, 'localhost', () => {
    console.log("welcome to server 4k");
})
