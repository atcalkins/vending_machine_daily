const express = require("express");
const router = express.Router();
const db = require('../../queries');

router.get("/", (req, res) => {
  res.render("index", { secondsToRender: Date.now() - req._startTime });
});
//
router.get ("/api/customer/items", db.getAllItems)
router.post("/api/customer/items/:id/purchases", db.purchaseAnItem)
// router.get("/api/customer/items/:itemId/purchases", db.getAllPurchases)
// router.get('/api/vendor/money', db.getMoney)
// router.post('api/vendor/items', db.addItem)
// router.put('/api/vendor/items/:itemId', db.updateItem)

module.exports = router;
