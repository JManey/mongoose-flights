const express = require('express');
const router = express.Router();
//require controllers
const flightsCtrl = require('../controllers/flights');

/* GET /flights listing. */
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/', flightsCtrl.index);
router.post('/', flightsCtrl.create);

module.exports = router;
