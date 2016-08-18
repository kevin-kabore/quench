console.log('app.js.loaded');

var venuesDropdown;
var $drinkType;
var $alcohol


//Create Venue HTMl as option of dropdwj

function createVenueHTML(venue) {
  return $('<option id="venue-' + venue._id + '  name="venue"> '+ venue.name + '</option>');
}

$(document).ready(function() {
  $venuesDropdown = $('#venuesDropdown');


//Grab all venues from database
  $.ajax({
    type:"GET",
    url:"/api/venues"
  }).then(
    function(jsonVenues) {
      jsonVenues.forEach(function(jsonVenue){
        //Create each element in the dropdown of venues
        var venueHTML = createVenueHTML(jsonVenue);
        $venuesDropdown.append(venueHTML)
      })
    }
  )
});
