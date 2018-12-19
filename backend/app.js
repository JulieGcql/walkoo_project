var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var tagsRouter = require('./routes/tags');
var mediasRouter = require('./routes/medias');
var subscriberRouter = require('./routes/subscriber')
var sectorsRouter = require('./routes/sectors')
var expertiseRouter = require('./routes/expertise')
var realisationRouter = require('./routes/realisation')

const passport = require('passport');
const {localAuthStrategy} = require("./routes/strategies/local");
const {jwtAuthStrategy} = require("./routes/strategies/jwt");


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Expose static /uploads folders to retrive upladed files.
app.use('/uploads', express.static('uploads'));

// Initialize auth strategies config
localAuthStrategy;  
jwtAuthStrategy

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/tags', tagsRouter);
app.use('/medias', mediasRouter);
app.use('/subscribers', subscriberRouter);
app.use('/sectors', sectorsRouter);
app.use('/expertise', expertiseRouter);
app.use('/realisation', realisationRouter);

module.exports = app;


// passport.authenticate('jwt', { session: false }),