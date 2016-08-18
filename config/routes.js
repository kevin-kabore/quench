var express = require('express'),
    router  = new express.Router(),
    passport = require('passport');

// Require controllers
var venuesController = require('../controllers/venues.js'),
    drinksController = require('../controllers/drinks.js'),
    reviewsController = require('../controllers/reviews.js');

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/drinks/selectType',
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
  .post(venuesController.createVenue)

router.route('/venues/:id/adddrink')
  .get(venuesController.addDrink)

router.route('/venues/new')
  .get(venuesController.newVenue)

  // router.get('/venues/new', venuesController.newVenue);
  //
  //Routes for Drinks
router.route('/drinks')
  .get(drinksController.index)
  .post(drinksController.createDrink)

router.route('/drinks/selectType')
  .get(drinksController.selectType)

router.route('/drinks/new')
  .get(drinksController.newDrink)

  // routes for lists by drinkType
  router.route('/drinks/wine')
    .get(drinksController.wine)


router.route('/drinks/:id')
  .get(drinksController.showDrink)
  // .patch(drinksController.updateDrink)
  .delete(drinksController.destroyDrink)

router.route('/drinks/:id/review/new')
  .get(drinksController.newReview)
  .post(drinksController.addReview)


// router.route('drinks/:id')
//   .get(drinksController.showDrink)
//   .patch(drinksController.updateDrink)
//   .delete(drinksController.destroyDrink)
//
// router.route('drinks/:id/edit')
//   .get(drinksController.editDrink)
//
//
// // Routes for reviews
// router.route('/reviews')
//   .get(reviewsController.index)
//   .post(reviewsController.createReview)
//
// router.route('/reviews/new')
//   .get(reviewsController.newReview)
//
// router.route('reviews/:id')
//   .get(reviewsController.showReview)
//   .patch(reviewsController.updateReview)
//   .delete(reviewsController.destroyReview)
//
// router.route('reviews/:id/edit')
//   .get(reviewsController.editReview)

module.exports = router;
