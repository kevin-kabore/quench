var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var VenueSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  drinks: [{ type: Schema.Types.ObjectId, ref: 'Drink' }]
})

var Venue = mongoose.model('Venue', VenueSchema);
module.exports = Venue;
