const express = require('express');
const cors = require('cors');
const router = express.Router();
const City = require('../models/cities');

const whiteList = ['http://localhost:4200', 'http://localhost:5200']
const corsOptions = {
  origin: function(origin, callback) {
    if(whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed CORS'), console.log('Not allowed CORS'));
    }
  }
};

router.options('/city-create', cors(corsOptions));
router.post('/city-create', cors(corsOptions), (req, res, next) => {
    City.create(req.body, (err, post) => {
        if(err) return next(err);
        res.json(post);
    })
});

router.options('/cities', cors(corsOptions));
router.get('/cities', cors(corsOptions), (req, res, next) => {
    City.find((err, cities) => {
        if(err) return next(err);
        res.json(cities);
    })
});

router.options('/delete-city/:id', cors(corsOptions));
router.delete('/delete-city/:id', cors(corsOptions), (req, res, next) => {
    City.findByIdAndRemove(req.params.id, (err, post) => {
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;
