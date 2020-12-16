var express = require('express')
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');

// Middleware

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var username = req.cookies.username;
    if (!username) {
        res.cookie('username', 'Pushpendra Kumar');
    }
    next();
})

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
})

// Route

app.get('/', (req, res) => {
    res.send('welcome to home page');
})

app.get('/users', (req, res) => {
    res.send("Welcome to USERS page");
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
})

app.get('/kumar', (req, res) => {
    res.sendFile(__dirname + "/kumar.html");
})

app.get('/admin', (req, res, next) => {
    next('You are not allowed to access this page');
});

// Error Handler

app.use((req, res, next) => {
    res.send("Page not found");
})

app.use((err, req, res, next) => {
    res.send(err);
})


// server port

app.listen(4000, () => {
    console.log('Server listning on port 4k');
})
