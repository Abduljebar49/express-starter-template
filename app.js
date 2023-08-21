var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userRoutes = require('./routes/users.router');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", userRoutes);

const port = 4000
app.listen(4000, () => console.log(`the app is running on port ${port}`))
// module.exports = app;