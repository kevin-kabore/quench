var Drink = require('../models/Drink')

module.exports = {
  index: index,
  newDrink: newDrink,
  createDrink: createDrink,
  showDrink: showDrink,
  updateDrink: updateDrink,
  destroyDrink: destroyDrink,
  addReview: addReview
}

function index(req, res, next){
  Drink.find({},function(err, drinks){
    if (err) next(err);

    res.json(drinks);
  });
}

function newDrink(req, res){
  res.render('../views/drinks/new');
};


function createDrink(req, res) {
  // console.log(req.body)
  var drink = new Drink(req.body);

  drink.save(function(err){
    if (err) res.json({message: 'Could not create drink b/c:' + err});

    res.redirect("/drinks");
  });
}

function showDrink(req, res){
  var id = req.params.id;

  Drink.findById({_id: id}, function(err, drink){
    if (err) res.json({message: 'Could not find drink b/c' + err});
    res.json({drink:drink})
  })
}

function updateDrink(req, res){
  var id = req.params.id
  // var id = req.params.drinkType;

  Drink.findById({_id: id}, function(err, drink){
    if(err) res.json({message: 'Could not find b/c' + err});

    if(req.body.drinkType) drink.drinkType = req.body.drinkType;
    if(req.body.alcohol)   drink.alcohol = req.body.alcohol;
    if(req.body.drinkName) drink.drinkName = req.body.drinkName;

    drink.save(function(err) {
      if(err) res.json({message: 'Could not update drink b/c' + err});

      res.json({message: 'Drink successfully updated!'});
    });
  });
}

function destroyDrink(req, res) {
  var id = req.params.id;

  Drink.remove({_id: id}, function(err) {
    if(err) res.json({message: 'Could not destroy drink b/c' + err});

    res.json({message: 'Drink successfully destroyed'});
  });
}

function addReview(req, res, next){
  Drink.findById(req.params.id, function(err, drink){
    if (err) next(err);
    console.log('drink: ' + drink)
    console.log('reviews: ' + drink.reviews)
    drink.reviews.push(req.body)
    drink.save(function(err) {
      if(err) res.json({message: "Could not add review b/c" + err});

      res.json(drink);
    });
    // only has keys that are properties of reviews
  })
}
