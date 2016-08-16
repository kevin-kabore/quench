console.log("Launches file");
require('dotenv').config();

var mongoose = require('./database');

var User = require('../models/User'),
    // Venue = require('../models/Venue'),
    Review = require('../models/Review');
    // Drink = require('../models/Drink')

var user = {
    name: "April Ross",
    userName: "ARoss",
    email: "ARoss@USA.com",
  };
    // {
    //   name: "Kerri Walsh Jennings",
    //   userName: "KWJ",
    //   email: "KWJ@USA.com",
    // },
  ;

// var venues = [
//   {name: 'The Bugalow', address: '101 Wilshire Blvd, Santa Monica, CA 90401'},
//   {name: '41 Ocean Club', address: '1541 Ocean Ave #150, Santa Monica, CA 90401'}
// ]

// var reviews =  new Review();
var reviews =  [
  { rating: 1,
    bitter: 4,
    sweet: 3,
    salty: 2,
    sour: 1,
    savory: 4,
    thoughts: 'it was bad'
  }
]
var drinks = [
  {
    drinkType: 'Cocktail',
    alcohol: true,
    drinkName: 'Vodka & Redbull',
    review: reviews[0]
    // review: {
    //   rating: 2,
    //   bitter: 1,
    //   sweet: 1,
    //   salty: 3,
    //   sour: 4,
    //   savory: 2,
    //   thoughts: 'it was good'
      // venue: venues[0]
      // venue: 'The Bugalow'
      // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    // }
  },
  {
    drinkType: 'Juice',
    alcohol: false,
    drinkName: 'Orange Juice',
    review: reviews[0]
    // review: {
    //   rating: 2,
    //   bitter: 1,
    //   sweet: 2,
    //   salty: 3,
    //   sour: 4,
    //   savory: 5,
    //   thoughts: 'it was bad'
    //   // venue: venues[0]
    //   // venue: 'The Bugalow'
    //   // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    // }
    // review: reviews[0]
  }

]

console.log(drinks[0].drinkType)

User.remove({}, function(err){
  if (err) throw err;
  User.create(user, function(err, user){
    if (err) {
      throw err
    } else {
      return user
      // mongoose.connection.close()
    }
    // process.exit()
  }).then(function(user) {
    Review.create({
      rating: 1,
      bitter: 4,
      sweet: 3,
      salty: 2,
      sour: 1,
      savory: 4,
      thoughts: 'it was bad',
      user: user._id
    }, function(err, review) {
      if (err) {
        throw err
      } else {
        return review

      }

    }).then(function(review){
      Drink.create(

      )
    })
  })
});


// Review.remove({}, function(err){
//   if (err) throw err;
//   Review.create(reviews, function(err, reviews){
//
//     if (err) {
//       throw err
//     } else {
//       console.log('Added ' + reviews.length + ' reviews')
//       mongoose.connection.close()
//     }
//     process.exit()
//   })
// });



//
// Venue.remove({}, function(err){
//   if (err) throw err;
//   Venue.create(venues, function(err, venues){
//     if (err) {
//       throw err
//     } else {
//       console.log('Added ' + venues.length + ' venues')
//       // mongoose.connection.close()
//     }
//     // process.exit()
//   })
// });
//
// Drink.remove({}, function(err){
//   if (err) throw err;
//   Drink.create(drinks, function(err, drinks){
//     if (err) {
//       throw err
//     } else {
//       console.log('Added ' + drinks.length + ' drinks')
//       mongoose.connection.close()
//     }
//     process.exit()
//   })
// });






// var drinks = [
//   {
//     type: "Cocktail",
//     alcohol: true,
//     drinkName: "Vodka & Redbull",
//     reviews:
//     // reviews
//
//   }, //Drink1 Venue 1
//
//   {
//     type: "Cocktail",
//     alcohol: true,
//     drinkName: "Margarita",
//     // reviews:
//   }, //Drink2 Venue 1
//
//   {
//     type: "Juice",
//     alcohol: false,
//     drinkName: "Orange Juice",
//     //reviews:
//   }, //Drink1 Venue 2
//
//   {
//     type: "Healthy",
//     alcohol: false,
//     drinkName: "Green Juice",
//     //reviews:
//   }, //Drink2 Venue 2
// ];
//
// var reviews = [
//   {
//     rating: 2,
//     bitter: 2,
//     sweet: 3,
//     salty: 0,
//     sour: 1,
//     savory: 0,
//     thoughts: "Trash but the redbull was good though.",
//   }, //Review1 Drink1Venue1
//
//   {
//    rating: 5,
//    bitter: 0,
//    sweet: 4,
//    salty: 0,
//    sour: 2,
//    savory: 0,
//    thoughts: "Most Vodka Redbull I've ever had.",
//   }, //Review2 Drink1Venue1
//
//   {
//     rating: 4,
//     bitter: 1,
//     sweet: 4,
//     salty: 0,
//     sour: 2,
//     savory: 0,
//     thoughts: "Delicious",
//   }, //Review1 Drink2Venue1
//
//   {
//     rating: 3,
//     bitter: 1,
//     sweet: 4,
//     salty: 0,
//     sour: 1,
//     savory: 0,
//     thoughts: "Solid",
//   }, //Review2 Drink2Venue1
//
//   {
//     rating: 5,
//     bitter: 2,
//     sweet: 3,
//     salty: 0,
//     sour: 2,
//     savory: 2,
//     thoughts: "Amazing"
//   }, //Review1 Drink1Venue2
//
//   {
//       rating: 2,
//       bitter: 1,
//       sweet: 4,
//       salty: 0,
//       sour: 2,
//       savory: 0,
//       thoughts: "Terrible",
//   }, //Review2 Drink1Venue2
//
//   {
//     rating: 4,
//     bitter: 1,
//     sweet: 4,
//     salty: 0,
//     sour: 2,
//     savory: 0,
//     } //Review1 Drink2Venue2
//   {
//       rating: 3,
//       bitter: 1,
//       sweet: 4,
//       salty: 0,
//       sour: 2,
//       savory: 0,
//       thoughts: "Quenched my thirst.",
//   }, //Review2 Drink2Venue2
//
// ];
