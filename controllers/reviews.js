var Drink = require('../models/Drink')

module.exports = {
  index: index
}

function index(req, res, next){
  Drink.find({},function(err, drink){
    if (err) next(err);
    console.log('drink: ' + drink)
    // res.json(drink.reviews);
    res.render('../views/drinks/reviews')
  })
}
