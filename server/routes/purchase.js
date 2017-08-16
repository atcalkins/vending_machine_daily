const express = require('express');
const router = express.Router();
const db = require('../models');
const Item = db.item;

router.post("/api/customer/item/:itemId/purchases", (req, res) => {
  console.log(req.params.itemId);
  models.item.findById(req.params.itemId)
  .then((item) => {
    console.log(item.dataValues.quantity);
    res.json("/api/customer/item/:itemId/purchases", {item : quantity} )
  })
})

// link customer money to cost if money > cost then success

module.exports = router;
