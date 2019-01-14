var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var tagsRouter = require('./routes/tags');
var mediasRouter = require('./routes/medias');
var subscriberRouter = require('./routes/subscriber');
var eventsRouter = require('./routes/events');
var homesRouter = require('./routes/home');
var subscriberRouter = require('./routes/subscriber');
var sectorsRouter = require('./routes/sectors');
var technologyRouter= require('./routes/technology');
var expertiseRouter = require('./routes/expertise');
var realisationRouter = require('./routes/realisation');
var sectionRealisationRouter = require('./routes/sectionRealisation');
var sectionTechnologyRouter = require('./routes/sectionTechnology');
var configurationRouter = require('./routes/configurations');

const {localAuthStrategy} = require("./routes/strategies/local");
const {jwtAuthStrategy} = require("./routes/strategies/jwt");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Disable default static files
// app.use(express.static(path.join(__dirname, 'public')));

// Expose static /uploads folders to retrive upladed files.
app.use('/uploads', express.static('uploads'));

// Initialize auth strategies config
localAuthStrategy;  
jwtAuthStrategy

app.use('/users', usersRouter);

app.use('/auth', authRouter);

app.use('/tags', tagsRouter);

app.use('/medias', mediasRouter);

app.use('/subscribers', subscriberRouter);

app.use('/sectors', sectorsRouter);

app.use('/events', eventsRouter);

app.use('/homes', homesRouter);

app.use('/technology', technologyRouter);

app.use('/expertise', expertiseRouter);

app.use('/section-realisation', sectionRealisationRouter);

app.use('/section-technology', sectionTechnologyRouter);

app.use('/realisation', realisationRouter);

app.use('/configurations', configurationRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

module.exports = app;