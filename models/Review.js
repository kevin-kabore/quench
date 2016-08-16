// var mongoose = require('mongoose');
//
// var reviewSchema = mongoose.Schema({
//   rating: {type: Number, required: true, min: 0, max: 5 },
//   bitter: {type: Number, required: true, min: 0, max: 5},
//   sweet: {type: Number, required: true, min: 0, max: 5},
//   salty: {type: Number, required: true, min: 0, max: 5},
//   sour: {type: Number, required: true, min: 0, max: 5},
//   savory: {type: Number, required: true, min: 0, max: 5},
//   thoughts: {type: String, required: false},
//   user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
//   venue: [{type: mongoose.Schema.Types.ObjectId, ref: 'Venue'}]
//   //  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });
//
// var Review = mongoose.model('Review', reviewSchema);
// module.exports = Review;
