var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();


app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + "/public"))

app.use((req, res, next) => {
    var username = req.cookies.username;
    if (!username) {
        res.cookie("username", "pushpendra");
    }
    next()
});
app.use((req, res, next) => {
    console.log(req.cookies)
    next()
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post('/json', (req, res) => {
    console.log(req.body);
})
app.post('/contact', (req, res) => {
    console.log(req.body);
})

app.get('/about', (req, res) => {
    res.send(req.cookies)
})



app.listen(4000, 'localhost', () => {
    console.log("welcome to server 4k");
})
