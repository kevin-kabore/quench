//Require modules
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    //passport
    pasport = require('passport'),
    flash = require('connect-flash'),
    ejsLayouts = require('express-ejs-layouts'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session')

mongoose.connect('mongodb://localhost/local-authentication-with-passport');

require('dotenv').config();
//Create the app
var app = express();
var mongoose = require('./config/database');



// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Mount middleware (app.use)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(ejsLayouts);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);
// require and mount (app.use) routes
app.get('/', function(req, res){
  res.render('home')
});

var routes = require('./config/routes');
app.use(routes);

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
