const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// import Order Model
const Order = require('../models/Order');

// Create order
router.post('/', (req, res, next) => {
  Order.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      // console.log(data)
      res.json(data)
    }
  })
});
// Get all orders
router.get('/', (req, res, next) => {
  const query = req.query;
  console.log(query)
  Order.find(query).
    populate('purchasedBy', 'firstName lastName email').
    exec((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    })
});
// Get single order
router.get('/:id', (req, res, next) => {
  Order.findById(req.params.id).
    populate('purchasedBy', 'firstName lastName email').
    exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});
// Update order
router.put('/:id', (req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Delete order
router.delete('/:id', (req, res, next) => {
  Order.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

module.exports = router;