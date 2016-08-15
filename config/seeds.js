console.log("Launches file");
require('dotenv').config();

var mongoose = require('./database');

var User = require('../models/User'),
    Venue = require('../models/Venue'),
    Review = require('../models/Review'),
    Drink = require('../models/Drink')

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

console.log("At Venue1");
var venue1 = new Venue();
venue1.name = 'The Bungalow';
venue1.address = '101 Wilshire Blvd, Santa Monica, CA 90401';
venue1.save();
console.log('created venue1');

var user1 = new User();
user1.name = "Kevin K";
user1.userName = "2Kayyyyyy";
user1.email = "2k@2k.com";
user1.save();
console.log('created user1');

var review1 = new Review();
review1.rating = 4;
review1.bitter = 0;
review1.sweet = 3;
review1.salty = 0;
review1.sour = 2;
review1.savory = 0;
review1.thoughts = "Very good.";
review1.user = user1
review1.save();
console.log('created review1')

var drink1 = new Drink();
drink1.drinkType = 'Cocktail';
drink1.alcohol = true;
drink1.drinkName = 'Vodka & Redbull';
drink1.reviews.push(review1);
drink1.save();
console.log('created drink1')
process.exit()

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
