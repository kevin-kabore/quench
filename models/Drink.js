var mongoose = require('mongoose');
var Review = mongoose.model('Review');


var drinkSchema = mongoose.Schema({
  drinkType: {type: String, required: true},
  alcohol: {type: Boolean, required: true, default: false},
  drinkName: {type: String, required: true},
  reviews: [Review.schema],
  venue: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'}
  // stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;
