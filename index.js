const session = require('express-session')
const express = require("express");
const app = express()
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const PORT = process.env.PORT || 3000;

// use static files
app.use(express.static("public"));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
// use ejs views
app.set("view engine", "ejs");
app.set("views", "views");

app.use('/', indexRouter);
app.use('/users', usersRouter);

const sess = {
    secret: 'ausazko hitz multzoa',
    cookie: {}
}
app.use(session(sess))

//username and password
const myusername = 'user1'
const mypassword = 'mypassword'

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);})
