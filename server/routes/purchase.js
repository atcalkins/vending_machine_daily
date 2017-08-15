const express = require('express');
const router = express.Router();
const db = require('../models')
const Item = db.item

router.post('/api/customer/items/:itemId/purchases', function (req, res) {
    models.item.create({
        description: req.body.description,
        cost: req.body.cost,
        quantity: req.body.quantity
    }).then(function(data) {
        res.status(200);
        res.json(data.get({plain: true}));
    }).catch(function(error) {
        res.status(500);
        res.json({error:error, stackError:error.stack});
    });
});
