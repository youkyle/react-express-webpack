const express = require('express');

const router = express.Router();
const passport = require('passport');
const Shop = require('../models/Shop.js');
require('../config/passport')(passport);

// Get all shops
/* router.get('/', (req, res, next) => {
  Shop.find((err, shops) => {
    if (err) return next(err);
    return res.json(shops);
  });
}); */

// get and extract jwt token
const getToken = (headers) => {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    }
    return null;
  }
  return null;
};

// token protected get all shops
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const token = getToken(req.headers);
  if (token) {
    Shop.find((err, shops) => {
      if (err) return next(err);
      return res.json(shops);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized' });
  }
});

// save shop
/* router.post('/', (req, res, next) => {
  Shop.create(req.body, (err, shop) => {
    if (err) return next(err);
    return res.json(shop);
  });
}); */

// token protected save shop
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const token = getToken(req.headers);
  if (token) {
    Shop.create(req.body, (err, post) => {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

module.exports = router;
