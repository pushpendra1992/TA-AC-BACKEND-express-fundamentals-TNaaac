var express = require('express');
var app = express();
var logger = require('morgan');
app.use(logger("dev"));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html')
})

app.post('/new', (req, res) => {
    console.log(req.query)
    res.send("welcome")
})




app.listen(3000, "localhost", () => {
    console.log("server listning on port 3k");
})
