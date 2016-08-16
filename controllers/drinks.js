var Drink = require('../models/Drink')

module.exports = {
  index: index
}

function index(req, res, next){
  Drink.find({},function(err, drinks){
    if (err) next(err);

    res.json(drinks);
  })
}

function addReview(req, res, next){
  Drink.find({_id: req.params.id}, function(err, drink){
    if (err) next(err);

    drink.reviews.push(req.body)
    drink.save();
    // only has keys that are properties of reviews
  })
}
