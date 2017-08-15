const express = require("express");
const router = express.Router();
const db = require('../../queries');

router.get("/", (req, res) => {
  res.render("index", { secondsToRender: Date.now() - req._startTime });
});

module.exports = router;
