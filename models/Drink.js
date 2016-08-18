var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  rating: {type: Number, required: true, min: 0, max: 5 },
  bitter: {type: Number, required: true, min: 0, max: 5},
  sweet: {type: Number, required: true, min: 0, max: 5},
  salty: {type: Number, required: true, min: 0, max: 5},
  sour: {type: Number, required: true, min: 0, max: 5},
  savory: {type: Number, required: true, min: 0, max: 5},
  thoughts: {type: String, required: false},
  user: {type: String, ref: 'User'},

});

var drinkSchema = new Schema({
  drinkType: {type: String, enum:['Wine', 'Beer', 'Cocktails'], required: true},
  alcohol: {type: Boolean, required: true, default: false},
  drinkName: {type: String, required: true},
  venue: {type: String, ref: 'Venue'},
  reviews: [reviewSchema]
});

var Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;
