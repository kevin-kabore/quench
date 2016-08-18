console.log("app.js loaded");

var $drinkType;
var $alcohol
var $drinksWine

$(document).ready(function() {
  getDrinks()
})

var chosenType;

$('.chosenDrinkType').on('click', function() {
  console.log("you rang???")
  chosenType = $(this).text();
  // chosenType = "Wine"
  console.log(chosenType)
  getDrinks()
})

function getDrinks() {
  var drinks = $.get('/drinks?drinkType=' + chosenType)
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
    $("ul.wine").prepend("<li><a href='/drinks/" + drink._id + "'><b>" + drink.drinkName + "</b> - <em>" + drink.venue + "</em></a></li>")
}

// $(document).ready(function() {
//   getDrinks();
//   $.ajax({
//     url: '/drinks?drinktype=wine',
//     method: 'get',
//     dataType: 'json'
//   }).done(function(data){
//     console.log(data)
//   })
// })
//
// function getDrinks() {
//   var drinks = $.get('/drinks?drinktype=wine')
//   .done(function(data){
//     $.each(data, function(index, drink) {
//       console.log(data)
//     })
//   })
// }

// $(document).ready(function() {
//   // Grab all the needed DOM elements using jQuery
//   $drinksWine = $('#wine');
//
// // Use jQuery to create html template that can be appended to the DOM
// function createDrinkHTML(drink) {
//   return $('<li id="drink-' + drink._id + '" class="' + drink.drinkType + '">'
//   + drink.name + ' - ' + drink.venue.name + '</li>'
//   );
// }
//
// $.ajax({
//   type: "GET",
//   url: "http://localhost:3000/drinks?drinktype=wine"
// }).then(
//   function(jsonDrinks) {
//     // Iterate through our array of json todos
//     jsonDrinks.forEach(function(jsonDrink) {
//       // Create an html element for the single todo
//       var drinkHTML = createDrinkHTML(jsonDrink);
//       console.log(jsonDrink)
//       console.log('hello there')
//       // Check if todo is completed and append it to the proper column
//       if(jsonDrink.completed) {
//         console.log(drinkHTML)
//         $drinksWine.append(drinkHTML);
//       }
//     });
//   })
// })
