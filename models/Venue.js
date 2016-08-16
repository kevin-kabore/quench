var mongoose = require('mongoose');

var VenueSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  drinks: [ type: {Schema.Types.ObjectId, ref: 'Drink'}]
  // stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]

})

var Venue = mongoose.model('Venue', VenueSchema);
module.exports = Venue;
