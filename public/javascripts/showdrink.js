console.log('working')
var $drinkShow;

$(document).ready(function() {
  $drinkShow = $('#drinkShow');
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  console.log('id: ' + id)

//Grab all venues from database
  $.ajax({
    type:"GET",
    url:"/api/drinks/" + id // so it recognizes the url as a thing
  }).then(
      // console.log(jsonDrink)
    function(jsonDrink) {
      console.log(jsonDrink);
      // Create a new html snippet to represent the updated todo.
      var drinkHTML = createDrinkHTML(jsonDrink.drink);

      // Put the html for the updated todo in the appropriate column
        $drinkShow.append(drinkHTML);
        for(var i = 0; i < jsonDrink.drink.reviews.length; i++){
          var reviews = createReviewHTML(jsonDrink.drink.id, jsonDrink.drink.reviews, i)
          $drinkShow.append(reviews)
        }
        $drinkShow.append('<hr><a href="/drinks/' + jsonDrink.drink._id + '/review/new">Add Review</a>')
    }
  )
});

function createDrinkHTML(drink){
  return '<li><h2 id="' + drink._id + '">' + drink.drinkName + '</h2></li>'
}

function createReviewHTML(drinkId, reviews, reviewNum){
  return '<li>rating: ' + reviews[reviewNum].rating + '</li>'
    + '<li>bitter: ' + reviews[reviewNum].bitter + '</li>'
    + '<li>sweet: ' + reviews[reviewNum].sweet + '</li>'
    + '<li>sour: ' + reviews[reviewNum].sour + '</li>'
    + '<li>salty: ' + reviews[reviewNum].salty + '</li>'
    + '<li>savory: ' + reviews[reviewNum].savory + '</li>'
    + '<li>thoughts: ' + reviews[reviewNum].thoughts + '</li>'
    + '<li><a href=/drinks/"' + drinkId + '/review' + reviews[reviewNum.id] + '"></a></li>'
    + '<hr>'
}
