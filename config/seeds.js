console.log("Launches file");
require('dotenv').config();

var mongoose = require('./database');

var aprilId,
    kerriId

var User = require('../models/User'),
    Venue = require('../models/Venue'),
    Review = require('../models/Review'),
    Drink = require('../models/Drink')

  var users =
    {
      name: "April Ross",
      userName: "ARoss",
      email: "ARoss@USA.com",
    }
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

// var drink1 = new Drink();
// drink1.drinkType = 'Cocktail';
// drink1.alcohol = true;
// drink1.drinkName = 'Vodka & Redbull';
// drink1.reviews.push(review1);
// drink1.save();
// console.log('created drink1')
// process.exit()

// user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

// var reviews =  new Review();
var reviews =  [
  { rating: 1,
    bitter: 4,
    sweet: 3,
    salty: 2,
    sour: 1,
    savory: 4,
    thoughts: 'it was bad',
    user: aprilId
  }
]

// var drinks = [
//   {
//     drinkType: 'Cocktail',
//     alcohol: true,
//     drinkName: 'Vodka & Redbull',
//     review: reviews[0]
//     // review: {
//     //   rating: 2,
//     //   bitter: 1,
//     //   sweet: 1,
//     //   salty: 3,
//     //   sour: 4,
//     //   savory: 2,
//     //   thoughts: 'it was good'
//       // venue: venues[0]
//       // venue: 'The Bugalow'
//       // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
//     // }
//   },
//   {
//     drinkType: 'Juice',
//     alcohol: false,
//     drinkName: 'Orange Juice',
//     review: reviews[0]
//     // review: {
//     //   rating: 2,
//     //   bitter: 1,
//     //   sweet: 2,
//     //   salty: 3,
//     //   sour: 4,
//     //   savory: 5,
//     //   thoughts: 'it was bad'
//     //   // venue: venues[0]
//     //   // venue: 'The Bugalow'
//     //   // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
//     // }
//     // review: reviews[0]
//   }
//
// ]



// var drink1 = new Drink();
// drink1.drinkType = 'Cocktail';
// drink1.alcohol = true;
// drink1.drinkName = 'Vodka & Redbull';
// drink1.reviews.push(review1);
// drink1.save();
// console.log('created drink1')
// process.exit()
//
User.remove({}, function(err){
  if (err) throw err;
  User.create(user, function(err, user){
    if (err) {
      throw err
    } else {
      console.log('Added ' + users.length + ' users')
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
        mongoose.connection.close()
      }
      process.exit()
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

// var user1 = new User();
// user1.name = "Kevin K";
// user1.userName = "2Kayyyyyy";
// user1.email = "2k@2k.com";
// user1.save();
// console.log('created user1');
//
// var review1 = new Review();
// review1.rating = 4;
// review1.bitter = 0;
// review1.sweet = 3;
// review1.salty = 0;
// review1.sour = 2;
// review1.savory = 0;
// review1.thoughts = "Very good.";
// review1.user = user1
// review1.save();
// console.log('created review1')
//
// var drink1 = new Drink();
// drink1.drinkType = 'Cocktail';
// drink1.alcohol = true;
// drink1.drinkName = 'Vodka & Redbull';
// drink1.reviews.push(review1);
// drink1.save();
// console.log('created drink1')
// process.exit()

// User.remove({}, function(err){
//   if (err) throw err;
// });
// Review.remove({}, function(err){
//   if (err) throw err;
// });
// Drink.remove({}, function(err){
//   if (err) throw err;
// });


// var users = [
//   {
//     name: "April Ross",
//     userName: "ARoss",
//     email: "ARoss@USA.com",
//   },
//
//   {
//     name: "Kerri Walsh Jennings",
//     userName: "KWJ",
//     email: "KWJ@USA.com",
//   },
// ];

// var Venues = [
//   {
//     name: "The Bungalow",
//     address: "101 Wilshire Blvd, Santa Monica, CA 90401",
//     // drinks:
//     reviews: [Reviews]
//     }, // Venue 1
//
//   {
//     name: "41 Ocean Club",
//     address: "1541 Ocean Ave #150, Santa Monica, CA 90401",
//     // drinks:
//   }, //Venue 2
// ];

// console.log("At Venue1");
// var venue1 = new Venue();
// venue1.name = 'The Bungalow';
// venue1.address = '101 Wilshire Blvd, Santa Monica, CA 90401';
// // venue1.save();
// console.log('created venue1');
//
// var user1 = new User();
// user1.name = "Kevin K";
// user1.userName = "2Kayyyyyy";
// user1.email = "2k@2k.com";
// user1.save();
// console.log('created user1');
//
// var review1 = new Review();
// review1.rating = 4;
// review1.bitter = 0;
// review1.sweet = 3;
// review1.salty = 0;
// review1.sour = 2;
// review1.savory = 0;
// review1.thoughts = "Very good.";
// review1.user = user1
// review1.save();
// console.log('created review1')
//
// var drink1 = new Drink();
// drink1.drinkType = 'Cocktail';
// drink1.alcohol = true;
// drink1.drinkName = 'Vodka & Redbull';
// drink1.reviews.push(review1);
// drink1.save();
// console.log('created drink1')
// process.exit()

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
