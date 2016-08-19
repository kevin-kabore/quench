$(document).ready(function() {

  // Attach listener on form button to perform AJAX post of new todo.
  $('#edit-review').on('click', function(evt) {
    console.log('you clicked')
    // Stop the default behavior from clicking on the submit button.
    evt.preventDefault();
    var updatedReview = {
      rating: $('#rating').val(),
      bitter: $('#bitter').val(),
      sweet: $('#sweet').val(),
      salty: $('#salty').val(),
      sour: $('#sour').val(),
      savory: $('#savory').val(),
      thoughts: $('#thoughts').val()
    }

    // Use AJAX to add the new todo to our db
    $.ajax({
      method: "PATCH",
      url: "/drinks/" + $('#drink-id').val() + "/review/" + $('#review-id').val(),
      data: updatedReview
    }).then(
      function(jsonTodo) {
        window.location.href = window.location.href.split('/review')[0]
      },
      function(err) {
        console.log("Failed: ", err);
      }
    )
  })
})
