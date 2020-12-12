var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Welcome to express")
})

app.listen(3000, 'localhost', () => {
    console.log("welcome to server 3k");
})
