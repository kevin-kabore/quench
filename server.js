//Require modules
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser')

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


// require and mount (app.use) routes
app.get('/', function(req, res){
  res.render('home'))
});



// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
