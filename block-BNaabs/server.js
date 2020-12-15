var express = require('express');
var app = express();
var logger = require('morgan');
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html')
})

app.post('/new', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(username);
})
