var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/vendingMachine';
var db = pgp(connectionString);

// add query functions

//get
function getAllItems(req, res, next) {
  db.any('select * from items')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved All Items'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


//post
function purchaseAnItem(req, res, next) {
  req.body.id = parseInt(req.body.id);
  db.none('insert into purchases(description, cost, quantity, money_given, money_required)' +
      'values(${description}, ${cost}, ${quantity}, ${moneygiven} ${money_required})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Purchased an item'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//put
function updateItem(req, res, next) {
  db.none('update item set description=$1, cost=$2, quantity=$3, where id=$5',
    [req.body.description, req.body.cost, parseInt(req.body.quantity), parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated Item'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllItems: getAllItems,
  purchaseAnItem: purchaseAnItem,
  getAllPurchases: getAllPurchases,
  getMoney: getMoney,
  addItem: addItem,
  updateItem: updateItem
};
