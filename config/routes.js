var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers
var venuesController = require('../controllers/venues.js'),
    drinksController = require('../controllers/drinks.js');

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/', function(req, res) {
  res.render('home', { user: req.user })
})

//Routes for Venue
router.route('/venues')
  .get(venuesController.index)
  .post(venuesController.createVenue);

router.get('/venues/new', venuesController.newVenue);

//Routes for Drinks
router.route('/drinks')
  .get(drinksController.index);

module.exports = router;
