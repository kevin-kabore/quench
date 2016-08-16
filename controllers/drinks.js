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
