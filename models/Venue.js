var mongoose = require('mongoose');

var VenueSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true}

})

var Venue = mongoose.model('Venue', VenueSchema);
module.exports = Venue;
