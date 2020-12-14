var express = require('express');
var app = express();

function logger(req, res, next) {
    console.log(req.url);
    console.log(req.method);
    next();
}
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + "/public"))

app.use(logger);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post('/json', (req, res) => {
    console.log(req.body);
})
app.post('/contact', (req, res) => {
    console.log(req.body);
})



app.listen(4000, 'localhost', () => {
    console.log("welcome to server 4k");
})
