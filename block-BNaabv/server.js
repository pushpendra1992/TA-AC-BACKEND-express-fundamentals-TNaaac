var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// middleware

app.use(logger('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    var username = req.cookies.username
    if (!username) {
        res.cookie('username', 'Pushpendra')
    }
    next();
})
app.use((req, res, next) => {
    console.log(req.cookies);
    next();
})




// routes

app.get('/', (req, res) => {
    res.header('content-Type', 'text/html');
    res.send('<h2>Welcome to express<h2>');
})

app.get('/about', (req, res) => {
    res.header('content-Type', 'text/plain');
    res.send("My name is qwerty");
})

app.post('/form', (req, res) => {
    res.header('content-Type', 'text/json');
    res.json(req.body);
})

app.post('/json', (req, res) => {
    res.header('content-Type', 'text/plain');
    res.send(JSON.stringify(req.body));
})

app.get('/users/:username', (req, res) => {
    var user = req.params.username;
    res.header('content-Type', 'text/html')
    res.send(`<h1>${user}</h1>`);
})

// Error handler

app.use((req, res, next) => {
    res.send("Page Not Found");
    next();
})

app.use((err, req, res, next) => {
    res.status(500).send('server encountered an unexpected condition');
});

// server port
app.listen(3000, 'localhost', () => {
    console.log('Welcome to localhost 3k');
})
