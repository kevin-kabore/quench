console.log("app.js loaded");

var venuesDropdown;
var $drinkType;
var $alcohol
var $drinksWine

$(document).ready(function() {
  getDrinks()
})

var chosenType;

$('.chosenDrinkType').on('click', function() {
  console.log("you rang???");
  $('ul.wine').empty();
  chosenType = $(this).text();
  // chosenType = "Wine"
  console.log(chosenType)
  getDrinks()
})

function getDrinks() {
  var drinks = $.get('/api/drinks?drinkType=' + chosenType)
  // var drinks = $.get('/drinks?drinkType=' + chosenType)
    .done(function(drinks) {
      $.each(drinks, function(index, drink) {
        addDrink(drink)
      })
    })
  console.log(drinks)
}

function addDrink(drink) {
  console.log("hello - i heard you");
    $("ul.wine").prepend("<li><a href='/api/drinks/" + drink._id + "'><b>" + drink.drinkName + "</b> - <em>" + drink.venue + "</em></a></li>")
}


// Create Venue HTMl as option of dropdwj

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
