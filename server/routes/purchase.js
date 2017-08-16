const express = require('express');
const router = express.Router();
const db = require('../models');
const Item = db.item;

router.post("/api/customer/items/:itemId/purchases", (req, res) => {
  models.item.findById(:id).then(() => {

  })
})
