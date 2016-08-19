var Venue = require('../models/Venue')
var Drink = require('../models/Drink')
var drinksController = require('./drinks')

module.exports = {
  index: index,
  newVenue: newVenue,
  createVenue: createVenue,
  addDrink: addDrink
}

//VENUE ROUTES START HERE

function index(req, res, next) {
  Venue.find({}, function(err, venues){
    if (err) next(err);

    // Change to ejs later
    res.json(venues);
  });
}

function newVenue(req, res) {
  res.render('../views/venues/new');
};

function createVenue(req, res, next)  {

  var venue = new Venue(req.body);
  console.log(venue)

  venue.save(function(err){
    if (err) res.json({message: 'Could not create venue b/c:' + err});
    res.redirect("/api/venues");
  });
}

function addDrink(req, res, next){
  var id = req.body.id
  res.render('../views/drinks/new', {id: id})
}

//VENUE ROUTES END HERE
