var Drink = require('../models/Drink')

module.exports = {
  index: index
}

function index(req, res, next){
  // console.log('drink: ' + Drink)
  // var venueId = req.body.venueId
  // var drinkId = req.body.drinkId
  Drink.find({},function(err, drink){
    if (err) next(err);
    console.log('drink: ' + drink)
    // res.json(drink.reviews);
    res.render('../views/drinks/reviews')
  })
}

// function addDrink(req, res, next){
//   var id = req.body.id
//   res.render('../views/drinks/new', {id: id})
// }
